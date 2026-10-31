/**
 * Utility for capturing, persisting, and constructing Bubble login URLs
 * with preserved UTM parameters and fbclid.
 *
 * Supported query parameters:
 * - utm_source
 * - utm_medium
 * - utm_campaign
 * - utm_content
 * - utm_term
 * - fbclid
 */

export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid'
];

/**
 * Capture available tracking parameters from the current URL and store in
 * sessionStorage and localStorage so they persist across SPA page transitions.
 */
export const captureTrackingParams = () => {
  if (typeof window === 'undefined') return;

  try {
    const searchParams = new URLSearchParams(window.location.search);
    TRACKING_PARAMS.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        sessionStorage.setItem(`uden_${key}`, val);
        localStorage.setItem(`uden_${key}`, val);
      }
    });
  } catch (err) {
    // Graceful fallback if storage is restricted
  }
};

/**
 * Build the Bubble login URL dynamically preserving available tracking parameters.
 * Checks current URL first, then falls back to session/local storage.
 * Also preserves any existing or extra query parameters.
 *
 * @param {Object} extraParams Optional extra query parameters (e.g. destination, template_id)
 * @returns {string} The constructed Bubble login URL
 */
export const buildBubbleLoginUrl = (extraParams = {}) => {
  const baseUrl = 'https://cps.uden.tech/log_in';

  if (typeof window === 'undefined') {
    return baseUrl;
  }

  // Ensure current URL parameters are captured
  captureTrackingParams();

  const currentParams = new URLSearchParams(window.location.search);
  const targetParams = new URLSearchParams();

  // 1. Add all 6 tracking parameters if available
  TRACKING_PARAMS.forEach((key) => {
    let val = currentParams.get(key);
    if (!val) {
      try {
        val = sessionStorage.getItem(`uden_${key}`) || localStorage.getItem(`uden_${key}`);
      } catch (e) {
        // ignore storage errors
      }
    }
    if (val) {
      targetParams.set(key, val);
    }
  });

  // 2. Add extra parameters passed to function
  if (extraParams && typeof extraParams === 'object') {
    Object.entries(extraParams).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        targetParams.set(k, String(v));
      }
    });
  }

  // 3. Preserve any other URL query parameters present in the browser that are not yet set
  currentParams.forEach((v, k) => {
    if (!targetParams.has(k) && v !== undefined && v !== null && v !== '') {
      targetParams.set(k, v);
    }
  });

  const queryStr = targetParams.toString();
  return queryStr ? `${baseUrl}?${queryStr}` : baseUrl;
};

/**
 * Open the Bubble login page in a new tab with preserved tracking parameters.
 * Handles Android Meta/Instagram in-app browser redirect via Chrome intent
 * to prevent Google OAuth 403 disallowed_useragent.
 *
 * @param {Object} extraParams Optional extra query parameters
 */
export const openBubbleLogin = (extraParams = {}) => {
  const url = buildBubbleLoginUrl(extraParams);

  if (typeof window === 'undefined') return;

  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  const isInApp = /FBAN|FBAV|Instagram|LinkedInApp|Messenger/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  // If in Meta in-app browser on Android, trigger external Chrome intent
  if (isInApp && isAndroid) {
    const rawUrl = url.replace(/^https?:\/\//, '');
    const chromeIntent = `intent://${rawUrl}#Intent;scheme=https;package=com.android.chrome;end`;
    window.location.href = chromeIntent;
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};
