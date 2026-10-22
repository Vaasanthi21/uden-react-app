/**
 * Ad User Journey & IP Attribution Tracker for UDEN.tech
 * 
 * Captures ad campaign tags (UTM parameters, fbclid, gclid),
 * resolves visitor IP address, records step-by-step navigation paths,
 * and sends custom 'AdUserJourney' events to Meta Pixel and Google Analytics 4.
 */

const STORAGE_KEYS = {
  AD_ATTR: 'uden_ad_attribution',
  USER_IP: 'uden_user_ip',
  NAV_HISTORY: 'uden_nav_history',
  NAV_STEP: 'uden_nav_step'
};

const safeGetStorage = (storage, key) => {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetStorage = (storage, key, value) => {
  try {
    storage.setItem(key, value);
  } catch {
    // Ignore storage quota or private browsing errors
  }
};

let cachedIp = safeGetStorage(sessionStorage, STORAGE_KEYS.USER_IP) || '';
let ipPromise = null;

// Asynchronously resolve visitor IP once per session
export const resolveUserIp = async () => {
  if (cachedIp) return cachedIp;
  if (ipPromise) return ipPromise;

  ipPromise = (async () => {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 3500) : null;
      
      const res = await fetch('https://api.ipify.org?format=json', {
        signal: controller ? controller.signal : undefined,
        headers: { 'Accept': 'application/json' }
      });
      if (timeoutId) clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.ip) {
          cachedIp = data.ip;
          safeSetStorage(sessionStorage, STORAGE_KEYS.USER_IP, cachedIp);
          return cachedIp;
        }
      }
    } catch {
      // Fallback IP service if ipify is blocked or times out
      try {
        const fallbackRes = await fetch('https://ipapi.co/json/');
        if (fallbackRes.ok) {
          const fbData = await fallbackRes.json();
          if (fbData && fbData.ip) {
            cachedIp = fbData.ip;
            safeSetStorage(sessionStorage, STORAGE_KEYS.USER_IP, cachedIp);
            return cachedIp;
          }
        }
      } catch {
        // Silent fallback
      }
    }
    return '';
  })();

  return ipPromise;
};

// Start background IP resolution immediately upon module load
if (typeof window !== 'undefined') {
  resolveUserIp();
}

// Retrieve or capture ad entry attribution (UTMs, fbclid, gclid, referrer)
export const getAdAttribution = () => {
  if (typeof window === 'undefined') return {};

  let stored = null;
  try {
    const raw = safeGetStorage(sessionStorage, STORAGE_KEYS.AD_ATTR) || safeGetStorage(localStorage, STORAGE_KEYS.AD_ATTR);
    if (raw) stored = JSON.parse(raw);
  } catch {
    stored = null;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  const utmContent = urlParams.get('utm_content');
  const utmTerm = urlParams.get('utm_term');
  const fbclid = urlParams.get('fbclid');
  const gclid = urlParams.get('gclid');

  const hasNewAdParams = !!(utmSource || utmCampaign || fbclid || gclid);

  if (hasNewAdParams || !stored) {
    const freshAttribution = {
      utm_source: utmSource || (stored && stored.utm_source) || (document.referrer ? 'referrer' : 'direct'),
      utm_medium: utmMedium || (stored && stored.utm_medium) || (document.referrer ? 'organic' : 'none'),
      utm_campaign: utmCampaign || (stored && stored.utm_campaign) || 'none',
      utm_content: utmContent || (stored && stored.utm_content) || '',
      utm_term: utmTerm || (stored && stored.utm_term) || '',
      fbclid: fbclid || (stored && stored.fbclid) || '',
      gclid: gclid || (stored && stored.gclid) || '',
      referrer: document.referrer || (stored && stored.referrer) || '',
      landing_page: (stored && stored.landing_page) || (window.location.pathname + window.location.search),
      landing_time: (stored && stored.landing_time) || new Date().toISOString()
    };

    safeSetStorage(sessionStorage, STORAGE_KEYS.AD_ATTR, JSON.stringify(freshAttribution));
    safeSetStorage(localStorage, STORAGE_KEYS.AD_ATTR, JSON.stringify(freshAttribution));
    return freshAttribution;
  }

  return stored;
};

// Track a navigation step along the ad journey
export const trackAdUserJourney = async (pathname, customTitle) => {
  if (typeof window === 'undefined') return;

  const attribution = getAdAttribution();
  const currentIp = cachedIp || (await resolveUserIp()) || 'unknown';

  // Read and update navigation history in session
  let navHistory = [];
  try {
    const rawHistory = safeGetStorage(sessionStorage, STORAGE_KEYS.NAV_HISTORY);
    if (rawHistory) navHistory = JSON.parse(rawHistory);
  } catch {
    navHistory = [];
  }

  if (navHistory[navHistory.length - 1] !== pathname) {
    navHistory.push(pathname);
    safeSetStorage(sessionStorage, STORAGE_KEYS.NAV_HISTORY, JSON.stringify(navHistory));
  }

  let stepNumber = parseInt(safeGetStorage(sessionStorage, STORAGE_KEYS.NAV_STEP) || '0', 10) + 1;
  safeSetStorage(sessionStorage, STORAGE_KEYS.NAV_STEP, String(stepNumber));

  const payload = {
    page_path: pathname,
    page_title: customTitle || document.title,
    user_ip: currentIp,
    utm_source: attribution.utm_source || 'direct',
    utm_medium: attribution.utm_medium || 'none',
    utm_campaign: attribution.utm_campaign || 'none',
    utm_content: attribution.utm_content || '',
    utm_term: attribution.utm_term || '',
    fbclid: attribution.fbclid || '',
    gclid: attribution.gclid || '',
    landing_page: attribution.landing_page || pathname,
    step_number: stepNumber,
    journey_path: navHistory.join(' -> '),
    timestamp: new Date().toISOString()
  };

  // 1. Send to Meta Pixel
  if (typeof window.fbq === 'function') {
    try {
      window.fbq('trackCustom', 'AdUserJourney', payload);
    } catch (e) {
      console.warn('Meta Pixel AdUserJourney error:', e);
    }
  }

  // 2. Send to Google Analytics 4 (GA4)
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'ad_user_journey', payload);
    } catch (e) {
      console.warn('GA4 ad_user_journey error:', e);
    }
  }

  // 3. Send to PumpGTM
  if (typeof window.pumpgtm === 'function') {
    try {
      window.pumpgtm('event', 'ad_user_journey', payload);
    } catch {
      // Optional
    }
  }
};
