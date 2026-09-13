import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getOrganizationSchema,
  getEducationalOrganizationSchema,
  getJobPostingSchemas,
  getFaqSchema,
  getBreadcrumbSchema
} from './PlatformSchemas';

// Canonical route mapping for primary pages and canonicalized aliases
const canonicalMap = {
  '/': 'https://uden.tech/',
  '/students': 'https://uden.tech/students',
  '/jobseekers': 'https://uden.tech/jobseekers',
  '/job-seekers': 'https://uden.tech/jobseekers',
  '/benefits': 'https://uden.tech/students',
  '/colleges': 'https://uden.tech/colleges',
  '/campus': 'https://uden.tech/colleges',
  '/campus-placements': 'https://uden.tech/colleges',
  '/campus-placement': 'https://uden.tech/colleges',
  '/for-campus': 'https://uden.tech/colleges',
  '/recruiters': 'https://uden.tech/recruiters',
  '/companies': 'https://uden.tech/recruiters',
  '/upskilling-partners': 'https://uden.tech/upskilling-partners',
  '/upskillig-partners': 'https://uden.tech/upskilling-partners',
  '/government-partnership': 'https://uden.tech/government-partnership',
  '/government': 'https://uden.tech/government-partnership',
  '/hr-services': 'https://uden.tech/hr-services',
  '/about': 'https://uden.tech/about',
  '/about-us': 'https://uden.tech/about',
  '/contact-us': 'https://uden.tech/contact-us',
  '/cotact-us': 'https://uden.tech/contact-us',
  '/faq': 'https://uden.tech/faq',
  '/blogs': 'https://uden.tech/blogs',
  '/reports/tier-2-3-placement-report-2026': 'https://uden.tech/reports/tier-2-3-placement-report-2026',
  '/seo-plan': 'https://uden.tech/seo-plan',
  '/privacy-policy': 'https://uden.tech/privacy-policy',
  '/terms-and-conditions': 'https://uden.tech/terms-and-conditions',
  '/find-opportunity': 'https://uden.tech/find-opportunity',
  '/find_opportunity': 'https://uden.tech/find-opportunity',
  '/find-talent': 'https://uden.tech/find-talent',
  '/find_talent': 'https://uden.tech/find-talent',
  '/findtalent': 'https://uden.tech/find-talent',
  '/campus-partner-form': 'https://uden.tech/campus-partner-form',
  '/hr-service-join': 'https://uden.tech/hr-service-join',
  '/government-partner-form': 'https://uden.tech/government-partner-form'
};

const routeMetadata = {
  '/': {
    title: 'UDEN — AI Placement & Career Platform in India',
    description: 'UDEN connects Tier 2/3 students with AI mock interviews & campus hiring. 2,500+ placed across 150+ partners.'
  },
  '/students': {
    title: 'AI Mock Interviews & Placement Prep for Students | UDEN',
    description: '24x7 AI mock interviews, resume optimization & 8-axis skill radar for Tier 2/3 college students. Win ₹20K–50K referral rewards.'
  },
  '/jobseekers': {
    title: 'AI Job Matching for First-Time Jobseekers | UDEN',
    description: 'AI-matched career guidance and fitment scoring across 100,000+ job openings. Apply off-campus in 1 click with UDEN.'
  },
  '/colleges': {
    title: 'Campus Placement Automation (CPS) for TPOs & Colleges | UDEN',
    description: 'Automate placement drives, generate instant NAAC/NBA accreditation reports, and connect students to 150+ recruiters with UDEN’s CPS.'
  },
  '/recruiters': {
    title: 'Hire Pre-Vetted Tier 2/3 Tech Talent | UDEN for Recruiters',
    description: 'Hire job-ready tech talent from Tier 2/3 colleges with a 48-hour shortlist SLA and zero-risk post-hire upskilling.'
  },
  '/blogs': {
    title: 'Career & Tech Hiring Insights Blog | UDEN',
    description: 'Latest guides on tech hiring trends, AI interview readiness, campus placement automation, and cloud engineering careers in India.'
  },
  '/reports/tier-2-3-placement-report-2026': {
    title: 'Tier 2 & Tier 3 College Placement Report 2026 | UDEN Employability Index',
    description: 'Original benchmark report on campus placement statistics, AI skill gaps, salary package trends, and recruiter demand across 2,500+ placed graduates.'
  },
  '/seo-plan': {
    title: 'SEO Boost Plan & 100 Backlink Directory Tracker | UDEN.tech',
    description: 'Internal growth dashboard tracking UDEN\'s 90-day SEO boost plan, canonical consistency, and 100-site backlink directory submissions.'
  },
  '/about': {
    title: 'About UDEN — Unified Development and Employment Network',
    description: 'UDEN is an AI-powered career readiness and placement platform backed by Microsoft for Startups, NVIDIA Inception, AWS EdStart and DPIIT.'
  },
  '/about-us': {
    title: 'About UDEN — Unified Development and Employment Network',
    description: 'UDEN is an AI-powered career readiness and placement platform backed by Microsoft for Startups, NVIDIA Inception, AWS EdStart and DPIIT.'
  },
  '/contact-us': {
    title: 'Contact UDEN | Bengaluru & Ranchi Regional Hubs',
    description: 'Get in touch with UDEN team for student support, college TPO partnerships, and corporate hiring inquiries.'
  },
  '/faq': {
    title: 'Frequently Asked Questions | UDEN AI Career Platform',
    description: 'Find answers to common questions about UDEN AI mock interviews, student placement guarantee, TPO campus software, and employer hiring.'
  }
};

const setMetaTag = (attrName, attrValue, content) => {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const injectJsonLdScript = (id, data) => {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
};

export const SEOHead = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // 1. Determine exact self-referencing canonical URL
    let canonicalUrl;
    if (canonicalMap[pathname]) {
      canonicalUrl = canonicalMap[pathname];
    } else if (pathname.startsWith('/blogs/')) {
      canonicalUrl = `https://uden.tech${pathname.replace(/\/$/, '')}`;
    } else {
      canonicalUrl = `https://uden.tech${pathname.replace(/\/$/, '') || '/'}`;
    }

    // 2. Resolve Duplicate Canonical Tags: Remove any secondary or stray canonical tags
    const allCanonicals = document.querySelectorAll('link[rel="canonical"]');
    if (allCanonicals.length > 1) {
      for (let i = 1; i < allCanonicals.length; i++) {
        allCanonicals[i].parentNode.removeChild(allCanonicals[i]);
      }
    }

    // Update or create the primary canonical tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      canonicalTag.id = 'canonical-url';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 3. Set Document Title & Descriptions
    const meta = routeMetadata[pathname] || {
      title: 'UDEN — AI Placement & Career Platform in India',
      description: 'UDEN connects Tier 2/3 students with AI mock interviews & campus hiring. 2,500+ placed across 150+ partners.'
    };

    // Only overwrite title if it's not a specific blog post (handled inside Blog.jsx)
    if (!pathname.startsWith('/blogs/') || pathname === '/blogs') {
      document.title = meta.title;
    }

    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'twitter:title', meta.title);
    setMetaTag('property', 'twitter:description', meta.description);
    setMetaTag('property', 'twitter:url', canonicalUrl);

    // 4. Inject Unified JSON-LD Schemas
    try {
      injectJsonLdScript('uden-org-schema', getOrganizationSchema());
      injectJsonLdScript('uden-edu-org-schema', getEducationalOrganizationSchema());
      injectJsonLdScript('uden-job-postings-schema', getJobPostingSchemas());
      injectJsonLdScript('uden-faq-schema', getFaqSchema());
      injectJsonLdScript('uden-breadcrumb-schema', getBreadcrumbSchema(pathname));
    } catch (err) {
      console.warn('Error injecting SEO schemas:', err);
    }
  }, [pathname]);

  return null;
};

export default SEOHead;
