// JSON-LD structured schemas for UDEN.tech
// Compliant with Schema.org standards for Google Rich Results and AI/GEO answer engines

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://uden.tech/#organization",
  "name": "UDEN",
  "legalName": "Digverve Solutions Pvt. Ltd.",
  "alternateName": [
    "UDEN.tech",
    "Unified Development and Employment Network"
  ],
  "url": "https://uden.tech",
  "logo": {
    "@type": "ImageObject",
    "url": "https://uden.tech/og-banner.png",
    "width": 1200,
    "height": 630
  },
  "description": "UDEN is India's leading AI-powered placement and career readiness platform connecting Tier 2 and Tier 3 college students, jobseekers, colleges, and recruiters with 24x7 AI mock interviews, resume optimization, and campus hiring automation.",
  "sameAs": [
    "https://www.linkedin.com/company/uden-tech",
    "https://play.google.com/store/apps/details?id=co.arya.xxzis"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HSR Layout, Sector 7",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560102",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-99000-00000",
    "contactType": "customer service",
    "email": "contact@uden.tech",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "knowsAbout": [
    "Campus Placement Automation",
    "AI Mock Interviews",
    "Resume Optimization",
    "Tier 2 & Tier 3 College Employability",
    "Tech Hiring in India"
  ],
  "memberOf": [
    {
      "@type": "ProgramMembership",
      "programName": "Microsoft for Startups Founders Hub"
    },
    {
      "@type": "ProgramMembership",
      "programName": "NVIDIA Inception Program"
    },
    {
      "@type": "ProgramMembership",
      "programName": "AWS EdStart"
    },
    {
      "@type": "ProgramMembership",
      "programName": "NSRCEL IIM Bangalore"
    },
    {
      "@type": "ProgramMembership",
      "programName": "Startup India / DPIIT"
    }
  ]
});

export const getEducationalOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://uden.tech/colleges#educational-organization",
  "name": "UDEN Campus Placement & Higher Education Network",
  "url": "https://uden.tech/colleges",
  "parentOrganization": {
    "@id": "https://uden.tech/#organization"
  },
  "description": "Empowers college Training and Placement Officers (TPOs) across India with an automated Campus Placement System (CPS), instant NAAC & NBA accreditation reporting, and corporate recruiter connections.",
  "areaServed": "IN",
  "serviceType": [
    "Campus Placement Automation",
    "Employability Analytics",
    "NAAC/NBA Placement Audit Reports",
    "AI Skill Radar Assessments"
  ]
});

export const getJobPostingSchemas = () => [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Senior React & Fullstack Developer",
    "description": "Exciting role for passionate React and Node.js developers. Work on scalable enterprise products with pre-vetted campus talent hiring.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "UDEN Job Hub",
      "value": "UDEN-JOB-001"
    },
    "datePosted": "2026-08-15",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "UDEN Partner Network",
      "sameAs": "https://uden.tech"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 750000,
        "maxValue": 1200000,
        "unitText": "YEAR"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "SDE-1 (Java Microservices & AWS)",
    "description": "Core software development opportunity for freshers and early engineers with strong Java, Spring Boot, and AWS cloud foundations.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "UDEN Job Hub",
      "value": "UDEN-JOB-002"
    },
    "datePosted": "2026-08-15",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "UDEN Partner Network",
      "sameAs": "https://uden.tech"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 700000,
        "maxValue": 950000,
        "unitText": "YEAR"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "AI / Python Data Engineer",
    "description": "Build modern data pipelines and implement generative AI models for enterprise client ecosystems.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "UDEN Job Hub",
      "value": "UDEN-JOB-003"
    },
    "datePosted": "2026-08-15",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "UDEN Partner Network",
      "sameAs": "https://uden.tech"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 800000,
        "maxValue": 1400000,
        "unitText": "YEAR"
      }
    }
  }
];

export const getFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best placement platform for Tier 2 college students in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UDEN (Unified Development and Employment Network) is an AI-powered career readiness and placement platform providing 24x7 AI mock interviews, resume optimization, and automated campus placements for Tier 2 and Tier 3 college students in India with 2,500+ placed students."
      }
    },
    {
      "@type": "Question",
      "name": "How can training and placement cells (TPOs) automate campus drives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UDEN provides TPOs with a Campus Placement System (CPS) that automates placement drives, generates 1-click NAAC/NBA accreditation reports, and matches students with 150+ corporate hiring partners."
      }
    },
    {
      "@type": "Question",
      "name": "Is UDEN free for students and jobseekers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! UDEN offers 100% free registration for students and jobseekers, along with ₹20,000 to ₹50,000 cash prize referral rewards when referring candidates to open opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can recruiters hire pre-vetted campus talent on UDEN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise recruiters can receive pre-assessed candidate shortlists within 48 hours, backed by AI skill radar scores and zero-risk post-hire upskilling support."
      }
    }
  ]
});

export const getBreadcrumbSchema = (pathname) => {
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://uden.tech/"
    }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const formattedName = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": formattedName,
      "item": `https://uden.tech${currentPath}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
};
