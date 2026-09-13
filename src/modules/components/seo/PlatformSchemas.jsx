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

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://uden.tech/#website",
  "url": "https://uden.tech",
  "name": "UDEN",
  "publisher": {
    "@id": "https://uden.tech/#organization"
  }
});

// /students page schemas
export const getStudentsServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://uden.tech/students#service",
  "name": "UDEN Student Placement Prep & AI Mock Interviews",
  "serviceType": "AI Career Readiness & Placement Preparation",
  "provider": {
    "@id": "https://uden.tech/#organization"
  },
  "description": "24x7 AI mock interviews, ATS resume optimization, and 8-axis skill radar evaluations for Tier 2 and Tier 3 college students, with ₹20,000–₹50,000 referral rewards.",
  "audience": {
    "@type": "Audience",
    "audienceType": "College Students and Fresh Graduates"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
});

export const getStudentsFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does UDEN's AI mock interview work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UDEN's AI simulates realistic technical and HR interview rounds with voice and video evaluations, assessing candidates across an 8-axis skill radar including algorithmic coding, spoken clarity, and problem formulation."
      }
    },
    {
      "@type": "Question",
      "name": "Is UDEN free for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, UDEN offers 100% free registration, AI mock interviews, resume scoring, and campus placement access for college students."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 8-axis skill radar on UDEN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 8-axis skill radar provides multi-dimensional feedback on technical proficiency, problem-solving speed, code readability, voice confidence, and system design readiness."
      }
    },
    {
      "@type": "Question",
      "name": "How do student referral rewards work on UDEN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Students can refer qualified peers from their colleges to open hiring drives on UDEN and earn ₹20,000 to ₹50,000 cash rewards upon successful candidate placement."
      }
    }
  ]
});

// /jobseekers page schemas
export const getJobseekersServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://uden.tech/jobseekers#service",
  "name": "UDEN AI Job Matching & Off-Campus Hiring",
  "serviceType": "Job Matching & Placement Assistance",
  "provider": {
    "@id": "https://uden.tech/#organization"
  },
  "description": "AI-matched career guidance, fitment scoring across 100,000+ job openings, and 1-click off-campus applications for first-time jobseekers.",
  "audience": {
    "@type": "Audience",
    "audienceType": "First-Time Jobseekers and Early-Career Engineers"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
});

export const getJobseekersFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does UDEN match jobseekers with tech jobs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UDEN uses AI fitment scoring to match jobseekers' verified skill profiles against 100,000+ active job openings, bypassing automated ATS resume filters."
      }
    },
    {
      "@type": "Question",
      "name": "Can first-time jobseekers apply off-campus with UDEN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, first-time jobseekers can apply in 1-click to off-campus hiring drives and direct recruiter requisitions with guaranteed 48-hour shortlist reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What are the candidate referral rewards on UDEN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jobseekers can refer friends and peers to hiring drives and earn ₹20,000 to ₹50,000 cash prizes when their referrals are successfully placed."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any cost for jobseekers to use UDEN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, UDEN is 100% free for jobseekers to create profiles, take AI mock interviews, and apply for jobs."
      }
    }
  ]
});

// /colleges page schemas
export const getCollegesEducationalOrgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://uden.tech/colleges#educational-organization",
  "name": "UDEN Campus Placement & Higher Education Network",
  "url": "https://uden.tech/colleges",
  "parentOrganization": {
    "@id": "https://uden.tech/#organization"
  },
  "description": "Empowers college Training and Placement Officers (TPOs) across India with an automated Campus Placement System (CPS), instant NAAC & NBA accreditation reporting, and corporate recruiter connections.",
  "areaServed": "IN"
});

export const getCollegesServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://uden.tech/colleges#service",
  "name": "UDEN Campus Placement System (CPS)",
  "serviceType": "Campus Placement Automation & Accreditation Reporting",
  "provider": {
    "@id": "https://uden.tech/#organization"
  },
  "description": "Centralized placement drive management, automated student eligibility screening, and 1-click NAAC/NBA accreditation audit reporting for colleges and universities.",
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "Training and Placement Officers (TPOs), College Deans & Administrators"
  }
});

export const getCollegesFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can training and placement cells (TPOs) automate campus drives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UDEN CPS centralizes drive scheduling, student registration, eligibility filtering, and company interview tracking into a single unified dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "How does UDEN help colleges generate NAAC and NBA accreditation reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UDEN automatically compiles student participation records, offer letters, median CTC metrics, and company visitation logs into 1-click audit-ready NAAC and NBA reports."
      }
    },
    {
      "@type": "Question",
      "name": "Can colleges invite their existing hiring partners to UDEN CPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, institutions can manage their existing campus recruiters while tapping into UDEN's network of 150+ active enterprise employers."
      }
    }
  ]
});

// /recruiters page schema
export const getRecruitersServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://uden.tech/recruiters#service",
  "name": "UDEN Recruiter Solutions & Pre-Vetted Tech Talent",
  "serviceType": "Recruitment & Technical Talent Acquisition",
  "provider": {
    "@id": "https://uden.tech/#organization"
  },
  "description": "Access pre-assessed software engineering, cloud, and data talent from Tier 2 and Tier 3 colleges across India with a 48-hour shortlist SLA and zero sourcing fees until hire.",
  "audience": {
    "@type": "Audience",
    "audienceType": "Corporate Recruiters, Engineering Hiring Managers, Talent Acquisition Teams"
  },
  "termsOfService": "48-Hour Shortlist SLA, Zero Sourcing Fee Until Hire, Zero-Risk Post-Hire Upskilling Support"
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
