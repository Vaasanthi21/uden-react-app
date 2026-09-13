const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const BASE_HTML_FILE = path.join(BUILD_DIR, 'index.html');

if (!fs.existsSync(BASE_HTML_FILE)) {
  console.error('[Prerender] Error: build/index.html does not exist. Run react-scripts build first.');
  process.exit(1);
}

// Ensure base index.html has canonical <meta charset="utf-8"> and read as utf-8
let rawBaseTemplate = fs.readFileSync(BASE_HTML_FILE, 'utf8');
if (/<meta\s+charset=[^>]+>/i.test(rawBaseTemplate)) {
  rawBaseTemplate = rawBaseTemplate.replace(/<meta\s+charset=[^>]+>/i, '<meta charset="utf-8">');
} else {
  rawBaseTemplate = rawBaseTemplate.replace(/<head[^>]*>/i, '$&\n    <meta charset="utf-8">');
}
fs.writeFileSync(BASE_HTML_FILE, rawBaseTemplate, 'utf8');
const baseTemplate = rawBaseTemplate;

// Global navigation header for server-rendered HTML matching redesign
const renderHeader = () => `
  <header style="background: #FFFFFF; border-bottom: 1px solid #E2E8F0; padding: 14px 24px; position: sticky; top: 0; z-index: 1000; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
    <div style="max-width: 1240px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <a href="https://uden.tech/" style="color: #1E293B; text-decoration: none; font-size: 22px; font-weight: 900; display: flex; align-items: center; gap: 8px; letter-spacing: -0.5px;">
        <span style="color: #F55825;">UDEN</span>.tech
      </a>
      <nav style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <a href="https://uden.tech/companies" style="color: #334155; text-decoration: none; font-size: 14.5px; font-weight: 700;">Hire from us</a>
        <a href="https://uden.tech/jobseekers" style="color: #334155; text-decoration: none; font-size: 14.5px; font-weight: 700;">Jobseekers</a>
        <a href="https://uden.tech/hr-services" style="color: #334155; text-decoration: none; font-size: 14.5px; font-weight: 700;">HR Services <span style="background: #F55825; color: #FFF; font-size: 10px; padding: 2px 6px; border-radius: 8px; margin-left: 4px; font-weight: 800;">New</span></a>
        <a href="https://uden.tech/campus-placements" style="color: #334155; text-decoration: none; font-size: 14.5px; font-weight: 700;">Campus Placements</a>
        <a href="https://uden.tech/government" style="color: #334155; text-decoration: none; font-size: 14.5px; font-weight: 700;">Government</a>
        <a href="https://uden.tech/about" style="color: #334155; text-decoration: none; font-size: 14.5px; font-weight: 700;">About Us</a>
      </nav>
      <div style="display: flex; align-items: center; gap: 12px;">
        <a href="https://uden.tech/find-opportunity" style="background: #F55825; color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 800; padding: 10px 20px; border-radius: 20px; box-shadow: 0 4px 12px rgba(245,88,37,0.25);">SignUp / SignIn</a>
      </div>
    </div>
  </header>
`;

// Global footer for server-rendered HTML
const renderFooter = () => `
  <footer style="background: #0F172A; color: #94A3B8; padding: 40px 24px 24px; margin-top: 60px; font-size: 14px;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; padding-bottom: 32px; border-bottom: 1px solid #334155;">
      <div>
        <h4 style="color: #FFFFFF; font-size: 16px; margin-bottom: 12px; font-weight: 700;">UDEN.tech</h4>
        <p style="line-height: 1.6; margin: 0 0 12px;">Unified Development and Employment Network. AI-powered career readiness and placement automation for India's Tier 2 and Tier 3 talent ecosystem.</p>
        <p style="margin: 0; color: #64748B;">Operated by Digverve Solutions Pvt. Ltd.</p>
      </div>
      <div>
        <h4 style="color: #FFFFFF; font-size: 16px; margin-bottom: 12px; font-weight: 700;">For Candidates</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="https://uden.tech/students" style="color: #94A3B8; text-decoration: none;">Students Career Prep</a></li>
          <li><a href="https://uden.tech/jobseekers" style="color: #94A3B8; text-decoration: none;">Jobseekers Hub & Referral Rewards</a></li>
          <li><a href="https://uden.tech/find-opportunity" style="color: #94A3B8; text-decoration: none;">Apply for Opportunities</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color: #FFFFFF; font-size: 16px; margin-bottom: 12px; font-weight: 700;">For Institutions & Hiring</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="https://uden.tech/colleges" style="color: #94A3B8; text-decoration: none;">Campus Placement System (CPS)</a></li>
          <li><a href="https://uden.tech/recruiters" style="color: #94A3B8; text-decoration: none;">Hire Pre-Vetted Talent</a></li>
          <li><a href="https://uden.tech/reports/tier-2-3-placement-report-2026" style="color: #94A3B8; text-decoration: none;">Tier 2/3 Placement Report 2026</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color: #FFFFFF; font-size: 16px; margin-bottom: 12px; font-weight: 700;">Company & Legal</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="https://uden.tech/about" style="color: #94A3B8; text-decoration: none;">About Us</a></li>
          <li><a href="https://uden.tech/contact-us" style="color: #94A3B8; text-decoration: none;">Contact Support</a></li>
          <li><a href="https://uden.tech/faq" style="color: #94A3B8; text-decoration: none;">Frequently Asked Questions</a></li>
          <li><a href="https://uden.tech/privacy-policy" style="color: #94A3B8; text-decoration: none;">Privacy Policy</a></li>
          <li><a href="https://uden.tech/terms-and-conditions" style="color: #94A3B8; text-decoration: none;">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
    <div style="max-width: 1200px; margin: 24px auto 0; text-align: center; color: #64748B; font-size: 13px;">
      &copy; 2026 UDEN — Unified Development and Employment Network. All rights reserved. Backed by Microsoft for Startups, NVIDIA Inception, AWS EdStart, DPIIT, and NSRCEL IIM Bangalore.
    </div>
  </footer>
`;

// Standard Breadcrumb Schema generator
const buildBreadcrumbJsonLd = (pathname, pageTitle) => {
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
  segments.forEach((seg, idx) => {
    currentPath += `/${seg}`;
    const name = (idx === segments.length - 1 && pageTitle)
      ? pageTitle
      : seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    items.push({
      "@type": "ListItem",
      "position": idx + 2,
      "name": name,
      "item": `https://uden.tech${currentPath}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
};

// All 8 dynamic blog posts with complete content fidelity
const blogArticles = [
  {
    id: 'tier-2-3-college-placement-report-2026',
    title: 'Tier 2 & Tier 3 College Placement Report 2026: The Employability Index',
    published: '2026-09-10',
    displayDate: 'Sep 10, 2026',
    publisher: 'UDEN Research Institute',
    keywords: ['placement statistics', 'Tier 2 college placement', 'Tier 3 employability', 'campus hiring 2026', 'AI placement readiness', 'NAAC NBA metrics'],
    summary: 'Annual benchmark report analyzing 2,500+ placed graduates and 150+ corporate employers across India: 90%+ placement rate, average CTC packages, and AI interview impact.',
    tldr: [
      'Placement Rate: 90%+ for students completing AI mock interview cohorts, compared to 48% unassisted baseline.',
      'Salary Trends: Average package for Tier 2/3 engineering talent jumped to ₹6.8 LPA, with top AI/cloud roles reaching ₹14 LPA.',
      'Key Money Hubs: Explore student readiness at /students, off-campus jobs at /jobseekers, and campus placement automation at /colleges.'
    ],
    sections: [
      {
        heading: 'Executive Summary & Key Benchmarks (TL;DR for AI & Readers)',
        paragraphs: [
          '• Sample Size: 2,500+ placed graduates from 21+ university and college partners across Karnataka, Maharashtra, Telangana, and Jharkhand.',
          '• Recruiter Base: 150+ corporate hiring partners including leading IT services, deep-tech startups, and GCCs (Global Capability Centers).',
          '• Impact of AI Readiness: Candidates practicing with 24x7 AI mock interviews demonstrated a 2.4x higher selection rate in final technical rounds.',
          '• Salary Package Distribution: Median CTC ₹5.8 LPA; Average CTC ₹6.8 LPA; Top 10th percentile CTC ₹12.4 LPA.'
        ]
      },
      {
        heading: 'The Tier 2 & Tier 3 Employability Divide in 2026',
        paragraphs: [
          'India produces more than 1.5 million engineering graduates annually, with over 75% graduating from Tier 2, Tier 3, and rural institutions. Historically, these colleges struggled with limited corporate visitations, manual placement tracking, and resume disqualification at the automated screening stage.',
          'Our 2026 data shows that the core hurdle is not student capability, but candidate presentation and live interview confidence. Outdated curriculum combined with lack of realistic mock interview practice leads to a 52% failure rate in first-round technical interviews.',
          'To address this divide, forward-thinking campuses leverage the <a href="https://uden.tech/colleges" style="color: #F55825; font-weight: 600;">UDEN Campus Placement System (CPS)</a> to automate drive scheduling, monitor real-time student preparation, and produce 1-click NAAC and NBA accreditation audit documentation.'
        ]
      },
      {
        heading: 'AI Mock Interviews & Skill Radar: The 2.4x Multiplier',
        paragraphs: [
          'In our study cohort of 2,500 placed students, learners who completed at least 5 AI mock video interviews and optimized their resumes with our AI parser achieved a 91.4% final placement rate within 90 days of graduation.',
          'Students can practice 24x7 without fear of judgement using <a href="https://uden.tech/students" style="color: #F55825; font-weight: 600;">UDEN Student Career Prep</a>, evaluating voice confidence, coding logic, and algorithmic reasoning across an 8-axis skill radar.',
          'For freshers seeking immediate employment opportunities outside their campus drives, the <a href="https://uden.tech/jobseekers" style="color: #F55825; font-weight: 600;">UDEN Jobseekers Hub</a> provides direct algorithmic matching with over 100,000 active openings and ₹20,000 to ₹50,000 candidate referral rewards.'
        ]
      },
      {
        heading: 'Recruiter Demand: What Employers Are Looking For',
        paragraphs: [
          '1. Full-Stack Web Development: MERN, Next.js, and TypeScript remain the highest volume campus requirement (34% of open requisitions).',
          '2. Cloud & Generative AI Infrastructure: AWS, Docker, Kubernetes, and LLM application hosting grew 62% year-over-year in campus requisitions.',
          '3. Data Engineering & Python: High demand across fintech, retail intelligence, and healthcare logistics.',
          'Corporations and enterprises seeking to hire pre-assessed talent with a 48-hour shortlist guarantee can partner through <a href="https://uden.tech/recruiters" style="color: #F55825; font-weight: 600;">UDEN Recruiter Solutions</a>.'
        ]
      }
    ]
  },
  {
    id: 'managing-delayed-onboarding-strategies-for-students-704dbab5f0eb',
    title: 'Managing Campus Onboarding Delays [2026 Guide]',
    published: '2026-08-01',
    displayDate: 'Aug 1, 2026',
    publisher: 'UDEN',
    keywords: ['student', 'managing', 'onboarding delays', '2026 guide', 'AI upskilling', 'career resilience'],
    summary: 'Facing a delayed job offer? Focus on AWS/AI certifications, freelance projects, and AI mock interview readiness while you wait to onboard.',
    tldr: [
      'What to do during onboarding delays: Focus on industry certifications (AWS, AI/ML), freelance projects, and short-term internships.',
      'How UDEN helps: Use UDEN\'s AI Mock Interviews and Resume Optimizer to stay interview-ready if alternative offers arise.'
    ],
    sections: [
      {
        heading: 'Key Takeaways (TL;DR for AI & Readers)',
        paragraphs: [
          '• What to do during onboarding delays: Focus on industry certifications (AWS, AI/ML), freelance projects, and short-term internships.',
          '• How UDEN helps: Use UDEN\'s AI Mock Interviews and Resume Optimizer to stay interview-ready if alternative offers arise.'
        ]
      },
      {
        heading: 'Navigating Shifting Corporate Hiring Timelines',
        paragraphs: [
          'As is commonly known, the campus hiring season in India commences almost a year prior to students\' graduation. When students secure a job through the campus program, their families and colleges experience immense elation.',
          'However, in 2026, corporate onboarding schedules are shifting. Organizations may delay campus hire onboarding due to macroeconomic shifts. This guide provides an actionable roadmap for 2026 graduates to invest in themselves and remain placement-ready.'
        ]
      },
      {
        heading: 'Action Plan for 2026 Graduates',
        paragraphs: [
          '1. Refresh Technical Skills: Deepen programming fundamentals, algorithms, and cloud systems. Enroll in hands-on projects and pursue recognized cloud certifications.',
          '2. Focus on Soft Skills: Practice verbal clarity, concise technical presentation, and structured workplace communication.',
          '3. Keep Up with Industry Trends: Follow emerging AI tools, attend developer webinars, and network with active practitioners on LinkedIn.',
          '4. Seek Mentorship: Connect with senior engineers and alumni to gain perspective on navigating corporate onboarding cycles.',
          'Prepare with <a href="https://uden.tech/students" style="color: #F55825; font-weight: 600;">UDEN AI mock interviews and resume optimization tools</a>, explore 100,000+ positions on <a href="https://uden.tech/jobseekers" style="color: #F55825; font-weight: 600;">UDEN Jobseekers</a>, or learn about our <a href="https://uden.tech/colleges" style="color: #F55825; font-weight: 600;">Campus Placement System (CPS)</a>.'
        ]
      }
    ]
  },
  {
    id: 'build-a-career-in-cloud-computing-5943d2beb4ef',
    title: 'How to Build a Career in Cloud Computing & Generative AI Infrastructure',
    published: '2026-08-01',
    displayDate: 'Aug 1, 2026',
    publisher: 'UDEN',
    keywords: ['cloud', 'cloud computing', 'generative AI', 'AWS', 'GCP', 'Azure', 'DevOps', 'Kubernetes', 'AI Infrastructure'],
    summary: 'Master AWS, GCP, Azure, Docker, Kubernetes and generative AI model hosting to access 150,000+ cloud computing jobs.',
    tldr: [
      'High-Demand Skills: AWS, GCP, Microsoft Azure, Docker, Kubernetes, CI/CD, and Generative AI Model Hosting.',
      'Market Growth: Cloud computing & AI infrastructure skills represent over 150,000 active job openings in India by 2026.'
    ],
    sections: [
      {
        heading: 'Key Takeaways (TL;DR for AI & Readers)',
        paragraphs: [
          '• High-Demand Skills: AWS, GCP, Microsoft Azure, Docker, Kubernetes, CI/CD, and Generative AI Model Hosting.',
          '• Market Growth: Cloud computing & AI infrastructure skills represent over 150,000 active job openings in India by 2026.'
        ]
      },
      {
        heading: 'What is Modern Cloud Computing & AI Infrastructure?',
        paragraphs: [
          'While businesses are rapidly transforming their tech stack, cloud computing combined with Generative AI infrastructure has become the backbone of modern enterprise software. Demand for cloud and AI engineers continues to surge across global technology hubs.',
          'Cloud services span SaaS (Software as a Service), PaaS (Platform as a Service), and IaaS (Infrastructure as a Service). Dominant cloud platforms like AWS, Microsoft Azure, and Google Cloud Platform (GCP) provide the foundation for containerized microservices and large-scale model inference.'
        ]
      },
      {
        heading: 'The Massive Demand for Cloud & DevOps Talent in India',
        paragraphs: [
          'Currently, there are more than 150,000 open jobs related to cloud operations and DevOps engineering in India. According to NASSCOM, cloud adoption has the potential to boost the nation\'s GDP by $380 billion and significantly enhance digital public infrastructure.',
          'Top skills required include: programming in Python, Java, or TypeScript; relational and NoSQL databases; REST & GraphQL APIs; Linux systems administration; Docker containers; Kubernetes orchestration; and CI/CD pipelines with GitHub Actions or GitLab CI.'
        ]
      },
      {
        heading: 'Accelerating Your Cloud Career with UDEN',
        paragraphs: [
          'Whether you are a fresher graduating from engineering or an early-career engineer, UDEN provides structured skilling pathways, live AI interview evaluations, and direct recruiter connections to fast-track your placement.',
          'Explore open positions on <a href="https://uden.tech/jobseekers" style="color: #F55825; font-weight: 600;">UDEN Jobseekers</a> or practice your cloud architecture interviews on <a href="https://uden.tech/students" style="color: #F55825; font-weight: 600;">UDEN Students</a>.'
        ]
      }
    ]
  },
  {
    id: 'upskilling-and-reskilling-the-essentials-for-a-thriving-deepTech-ecosystem-06773fb88dd1',
    title: 'Upskilling and Reskilling: The Essentials for a Thriving DeepTech Ecosystem',
    published: '2022-07-26',
    displayDate: 'Jul 26, 2022',
    publisher: 'UDEN',
    keywords: ['skill', 'upskill', 'deeptech', 'ecosystem', 'prepare', 'job', 'companies', 'cloud', 'devops', 'AI'],
    summary: 'Why rapid technological advances in AI, quantum computing, cloud, and cybersecurity make continuous upskilling essential for tech professionals and corporate teams.',
    tldr: [
      'DeepTech Expansion: Startups in AI, robotics, and cloud have grown at 40% CAGR in India.',
      'Talent Imperative: Continuous reskilling in MERN, AWS, and Data Science is vital for long-term career growth.'
    ],
    sections: [
      {
        heading: 'The Surge of DeepTech Innovation in India',
        paragraphs: [
          'India is experiencing a significant increase in the demand for tech services due to rising business expectations. Startups in recent information technologies called Deep Tech—such as AI, quantum computing, augmented reality, cloud computing, cybersecurity, and robotics—have grown at a CAGR of 40% since 2014.',
          'A strong technical background in these areas is a prerequisite for modern engineering roles. Key skills like MERN Full Stack, Data Science, AWS+DevOps, and Python analytics are in high demand across tech companies and GCCs.'
        ]
      },
      {
        heading: 'Why Reskilling is at High Demand',
        paragraphs: [
          'According to industry studies, over 80% of tech workers evaluate career transitions or skills upgrades. Mercer\'s Global Talent Trends study reveals that securing the right talent at the right time remains a critical challenge for corporate leadership.',
          'Platforms like UDEN specialize in skilling, reskilling, and hiring, bridging freshers and enterprise teams to adapt rapidly to technology shifts.'
        ]
      }
    ]
  },
  {
    id: 'indian-it-sector-facilitates-jobs-in-funding-winter-3845113ef856',
    title: 'Indian IT Sector Facilitates Jobs in Funding Winter',
    published: '2022-06-02',
    displayDate: 'Jun 2, 2022',
    publisher: 'UDEN',
    keywords: ['IT sector', 'jobs', 'funding winter', 'tech hiring', 'GCCs', 'full-stack', 'devops'],
    summary: 'How the Indian IT services sector and GCCs absorbed tech talent during startup consolidation and funding winter.',
    tldr: [
      'Talent Re-absorption: 40-50% of engineers leaving consolidating startups transitioned into established IT companies and GCCs.',
      'Key Roles: Full-stack engineers, cloud data engineers, and DevOps specialists continued to command strong hiring demand.'
    ],
    sections: [
      {
        heading: 'Market Consolidation and IT Sector Resilience',
        paragraphs: [
          'While startup ecosystems face periodic consolidation cycles, India\'s established IT services companies, consulting enterprises, and Global Capability Centers (GCCs) actively recruit seasoned technical talent.',
          'Full-stack engineers, data engineers, product management specialists, and DevOps practitioners remain in high demand across Indian tech hubs including Bengaluru, Hyderabad, and Pune.'
        ]
      },
      {
        heading: 'UDEN Hiring Assistance',
        paragraphs: [
          'UDEN provides comprehensive hiring assistance and algorithmic candidate matchmaking, connecting displaced and seeking engineers with reliable, growth-oriented tech employers across India.'
        ]
      }
    ]
  },
  {
    id: 'upskilling-the-new-age-growth-hack-a8bbdb8ccc86',
    title: 'Upskilling: The New Age Growth Hack',
    published: '2022-05-20',
    displayDate: 'May 20, 2022',
    publisher: 'UDEN',
    keywords: ['upskilling', 'career growth', 'salary hike', 'tech jobs', 'learning paths', 'professional development'],
    summary: 'How continuous upskilling accelerates salary hikes, career progression, and job security in the digital economy.',
    tldr: [
      'Career Impact: Over 84% of surveyed professionals noted that upskilling directly contributed to better job opportunities or promotions.',
      'Employer Value: Companies increasingly prioritize candidates who demonstrate self-driven upskilling and verifiable project portfolios.'
    ],
    sections: [
      {
        heading: 'Why Skills Are the Ultimate Currency',
        paragraphs: [
          'In an era of rapid technological transformation, continuous skills development is the most reliable growth hack for both freshers and experienced professionals. As automation transforms everyday tasks, mastery over advanced frameworks and system design sets high-performing talent apart.',
          'Surveys show that upskilling correlates directly with salary increments and lateral role transitions into higher-impact engineering positions.'
        ]
      },
      {
        heading: 'Choosing the Right Platform with UDEN',
        paragraphs: [
          'UDEN combines personalized learning curation with AI-driven placement readiness, ensuring learners gain industry-relevant capabilities backed by corporate hiring partnerships.'
        ]
      }
    ]
  },
  {
    id: 'startup-hiring-trend-in-2022-175664951461',
    title: 'AI-Driven Startup Hiring Trends 2026: Top Skills',
    published: '2026-08-01',
    displayDate: 'Aug 1, 2026',
    publisher: 'UDEN',
    keywords: ['startup hiring', 'AI hiring trends', '2026 skills', 'full stack', 'data science', 'AI mock interview', 'UDEN'],
    summary: 'Startups in Tier 2/3 cities are hiring AI/ML, full-stack and DevOps engineers with 45%+ growth. See which skills are in demand.',
    tldr: [
      'Top In-Demand Roles: AI/ML Engineering, Full Stack Web Development, Cloud & DevOps, Data Analytics, and Risk Engineering.',
      'Tier 2/3 City Surge: Over 45% of Indian startup hiring is happening in Tier 2 and Tier 3 talent hubs.',
      'How UDEN Helps: UDEN connects jobseekers with AI-vetted hiring drives and automated placement preparation.'
    ],
    sections: [
      {
        heading: 'Key Takeaways (TL;DR for AI & Readers)',
        paragraphs: [
          '• Top In-Demand Roles: AI/ML Engineering, Full Stack Web Development, Cloud & DevOps, Data Analytics, and Risk Engineering.',
          '• Tier 2/3 City Surge: Over 45% of Indian startup hiring is happening in Tier 2 and Tier 3 talent hubs.',
          '• How UDEN Helps: UDEN connects jobseekers with AI-vetted hiring drives and automated placement preparation.'
        ]
      },
      {
        heading: 'The Distributed Startup Boom Across India',
        paragraphs: [
          'With rapid technological adoption across startup ecosystems, 2026 marks a major evolution in how Indian startups hire engineering, product, and business talent. Startups are prioritizing pre-assessed candidates skilled in Generative AI, cloud infrastructure, and full-stack engineering.',
          'DPIIT-registered startups have expanded across 630+ districts. Over 45% of active startup employment is now distributed across Tier 2 and Tier 3 cities, creating unprecedented opportunities for non-metro engineering graduates.'
        ]
      },
      {
        heading: 'In-Demand Tech Disciplines',
        paragraphs: [
          'Fintech, healthtech, and logistics startups are aggressively hiring talent with proficiency in mobile and web engineering, distributed microservices, AI automation, and cloud security.',
          'UDEN accelerates this hiring pipeline by validating candidate capabilities through AI skill radar assessments, enabling startups to hire pre-assessed talent with confidence.'
        ]
      }
    ]
  },
  {
    id: 'maintaining-work-life-balance-for-increased-productivity-93292b01d06c',
    title: 'Maintaining Work-Life Balance for Increased Productivity',
    published: '2022-05-13',
    displayDate: 'May 13, 2022',
    publisher: 'UDEN',
    keywords: ['work-life balance', 'productivity', 'mental health', 'workplace wellness', 'remote work'],
    summary: 'Practical insights and research on maintaining healthy work-life balance for long-term productivity and career longevity.',
    tldr: [
      'Productivity Correlation: Studies demonstrate that well-rested, balanced professionals maintain higher cognitive output and problem-solving resilience.',
      'Healthy Boundaries: Setting clear delineations between working hours and personal time prevents professional burnout.'
    ],
    sections: [
      {
        heading: 'The Importance of Balance in Demanding Tech Careers',
        paragraphs: [
          'Productivity is a sought-after priority across academia and corporate workplaces. While dedication to craft is essential, sustainable productivity requires deliberate balance between focused execution and restorative rest.',
          'Research consistently shows that professionals who preserve time for wellness, family, and reflection demonstrate greater technical creativity and lower rates of burnout.'
        ]
      },
      {
        heading: 'Practical Habits for Sustained Performance',
        paragraphs: [
          'Establish clear boundaries around working hours, cultivate mindfulness, communicate transparently with team members, and prioritize physical well-being alongside professional ambitions.'
        ]
      }
    ]
  }
];

// Core pages metadata and rich semantic content
const corePages = [
  {
    route: '/',
    canonical: 'https://uden.tech/',
    title: 'UDEN — AI Placement & Career Platform in India',
    description: 'UDEN connects Tier 2/3 students with AI mock interviews & campus hiring. 2,500+ placed across 150+ partners.',
    keywords: 'UDEN, UDEN.tech, AI Career Matching, Campus Placement System, AI Interview Practice, Resume Builder, Placement Automation, Student Placement, Recruiter Shortlist, Higher Education Tech, EdTech India, Tier 2 College Placement',
    renderContent: () => `
      <main style="max-width: 1240px; margin: 0 auto; padding: 48px 24px; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
        <!-- Hero Section: FOLD 1: THE HOOK & VISION -->
        <div style="background: linear-gradient(180deg, #FFFDF7 0%, #FFFFFF 100%); border-radius: 24px; padding: 48px; border: 1.5px solid #FEF5D8; margin-bottom: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
          <div>
            <span style="display: inline-flex; align-items: center; gap: 6px; background: #FFF5F0; border: 1px solid #FFDECB; color: #F55825; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 800; margin-bottom: 18px; text-transform: uppercase;">
              ✨ AI-First Campus Placement System (CPS)
            </span>
            <h1 style="font-size: 42px; font-weight: 900; color: #0B1739; line-height: 1.15; letter-spacing: -1px; margin: 0 0 16px 0;">
              AI-Powered Career Transformation <span style="color: #F55825;">Platform</span>
            </h1>
            <p style="font-size: 16px; color: #475569; line-height: 1.6; margin-bottom: 26px;">
              Bridging <strong style="color: #F55825;">Students</strong>, <strong style="color: #2563EB;">Colleges</strong> and <strong style="color: #16A34A;">Recruiters</strong> through AI-powered career intelligence, interview preparation, resume optimization, placement automation and smart hiring.
            </p>

            <div style="display: flex; gap: 14px; margin-bottom: 20px; flex-wrap: wrap;">
              <a href="https://uden.tech/find-opportunity" style="background: #F55825; color: #FFFFFF; padding: 14px 32px; border-radius: 30px; font-size: 15px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 20px rgba(245,88,37,0.28);">Get Started Free &rarr;</a>
              <a href="https://uden.tech/campus-partner-form" style="background: #FFFFFF; color: #1E293B; border: 1.5px solid #CBD5E1; padding: 14px 28px; border-radius: 30px; font-size: 15px; font-weight: 800; text-decoration: none;">Book a Demo</a>
            </div>

            <div style="font-size: 13px; font-weight: 700; color: #64748B; margin-bottom: 28px;">
              🛡️ <span style="color: #1E293B; font-weight: 800;">Trusted by 100+ Colleges</span> &bull; <span>70+ Recruiters</span> &bull; <span>Thousands of Students</span>
            </div>

            <!-- Triad Grid: 3 Stakeholder Hubs -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
              <div style="background: #FFF7ED; border: 1.5px solid #FFEDD5; border-radius: 16px; padding: 16px;">
                <div style="font-size: 14px; font-weight: 800; color: #F55825; margin-bottom: 4px;">🎓 For Students</div>
                <p style="font-size: 12px; color: #475569; margin: 0 0 8px; line-height: 1.4;">24x7 AI Mock Interviews, 8-Axis Skill Radar &amp; 100k+ Jobs.</p>
                <a href="https://uden.tech/students" style="color: #F55825; font-size: 12px; font-weight: 800; text-decoration: none;">Explore Students &rarr;</a>
              </div>
              <div style="background: #EFF6FF; border: 1.5px solid #DBEAFE; border-radius: 16px; padding: 16px;">
                <div style="font-size: 14px; font-weight: 800; color: #2563EB; margin-bottom: 4px;">🏛️ For Colleges</div>
                <p style="font-size: 12px; color: #475569; margin: 0 0 8px; line-height: 1.4;">Automate Placement Drives &amp; 1-Click NAAC/NBA Reports.</p>
                <a href="https://uden.tech/colleges" style="color: #2563EB; font-size: 12px; font-weight: 800; text-decoration: none;">Explore Colleges &rarr;</a>
              </div>
              <div style="background: #F0FDF4; border: 1.5px solid #DCFCE7; border-radius: 16px; padding: 16px;">
                <div style="font-size: 14px; font-weight: 800; color: #16A34A; margin-bottom: 4px;">🏢 For Recruiters</div>
                <p style="font-size: 12px; color: #475569; margin: 0 0 8px; line-height: 1.4;">48-Hour Shortlist SLA &amp; Pre-Assessed Tech Talent.</p>
                <a href="https://uden.tech/recruiters" style="color: #16A34A; font-size: 12px; font-weight: 800; text-decoration: none;">Hire Talent &rarr;</a>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Dashboard Terminal Mockup -->
          <div style="background: #0F172A; border: 2px solid #334155; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 60px -15px rgba(30,41,59,0.35); color: #FFFFFF;">
            <div style="background: #0B132B; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #334155;">
              <div style="display: flex; gap: 6px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #EF4444; display: inline-block;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B; display: inline-block;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #10B981; display: inline-block;"></span>
              </div>
              <div style="font-size: 12px; font-weight: 800; color: #94A3B8;">UDEN PLATFORM SUITE &bull; LIVE RADAR</div>
            </div>
            <div style="padding: 24px;">
              <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span style="font-weight: 800; font-size: 14px; color: #FFFFFF;">Alex Sharma (Fullstack Engineer)</span>
                  <span style="background: #10B981; color: #FFFFFF; font-size: 11px; padding: 2px 8px; border-radius: 10px; font-weight: 800;">96% Match</span>
                </div>
                <div style="font-size: 12.5px; color: #94A3B8;">Verified Recruiter Shortlist: <strong style="color: #F55825;">Deloitte Tech</strong> (₹9.2L Package)</div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px; text-align: center;">
                  <div style="font-size: 18px; font-weight: 900; color: #F55825;">48 Hrs</div>
                  <div style="font-size: 11px; color: #94A3B8;">Interview SLA</div>
                </div>
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px; text-align: center;">
                  <div style="font-size: 18px; font-weight: 900; color: #10B981;">Audit Ready</div>
                  <div style="font-size: 11px; color: #94A3B8;">NAAC/NBA Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Platform Benchmark Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 48px;">
          <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 18px; padding: 20px; text-align: center; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 32px; font-weight: 900; color: #1E293B;">2,500<span style="color: #F55825;">+</span></div>
            <div style="font-size: 13px; color: #64748B; font-weight: 700;">Placed Graduates</div>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 18px; padding: 20px; text-align: center; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 32px; font-weight: 900; color: #1E293B;">90<span style="color: #F55825;">%+</span></div>
            <div style="font-size: 13px; color: #64748B; font-weight: 700;">Offer Conversion</div>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 18px; padding: 20px; text-align: center; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 32px; font-weight: 900; color: #1E293B;">150<span style="color: #F55825;">+</span></div>
            <div style="font-size: 13px; color: #64748B; font-weight: 700;">Hiring Partners</div>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 18px; padding: 20px; text-align: center; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 32px; font-weight: 900; color: #1E293B;">21<span style="color: #F55825;">+</span></div>
            <div style="font-size: 13px; color: #64748B; font-weight: 700;">University Partners</div>
          </div>
        </div>

        <!-- Dual Value Proposition -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 48px;">
          <div style="background: #FFFDF7; border: 1.5px solid #FEF5D8; border-radius: 20px; padding: 32px;">
            <h3 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 14px;">Students &amp; Job Seekers</h3>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 16px;">Practice with AI mock interviews, optimize your ATS resume, and earn ₹20,000–₹50,000 cash rewards by referring qualified peers.</p>
            <a href="https://uden.tech/students" style="color: #F55825; font-weight: 800; text-decoration: none;">Learn About Student Prep &rarr;</a>
          </div>
          <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 20px; padding: 32px;">
            <h3 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 14px;">Colleges &amp; Placement Cells</h3>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 16px;">Centralize on-campus and pooled drives, invite 150+ corporate employers, and export instant NAAC/NBA placement audit reports.</p>
            <a href="https://uden.tech/colleges" style="color: #2563EB; font-weight: 800; text-decoration: none;">Learn About Campus Automation &rarr;</a>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/students',
    canonical: 'https://uden.tech/students',
    title: 'AI Mock Interviews & Placement Prep for Students | UDEN',
    description: '24x7 AI mock interviews, resume optimization & 8-axis skill radar for Tier 2/3 college students. Win ₹20K–50K referral rewards.',
    keywords: 'AI mock interviews, placement prep, Tier 2 college students, resume optimization, 8-axis skill radar, referral rewards, UDEN',
    renderContent: () => `
      <main style="max-width: 1200px; margin: 0 auto; padding: 48px 24px; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
        <!-- Hero Section -->
        <div style="background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%); border-radius: 24px; padding: 48px; border: 1.5px solid #FEF5D8; margin-bottom: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
          <div>
            <span style="display: inline-flex; align-items: center; gap: 8px; background: #FEF5D8; color: #F55825; padding: 6px 16px; border-radius: 20px; font-size: 12.5px; font-weight: 800; border: 1px solid #F7BC08; text-transform: uppercase; margin-bottom: 18px;">STUDENT PLACEMENT & AI PREP</span>
            <h1 style="font-size: 40px; font-weight: 900; color: #1E293B; line-height: 1.2; margin: 0 0 16px;">AI Mock Interviews & Placement Prep for <span style="color: #F55825;">Students</span></h1>
            <p style="font-size: 16.5px; color: #475569; line-height: 1.65; margin-bottom: 28px;">24x7 AI mock interviews, resume optimization & 8-axis skill radar for Tier 2/3 college students. Win ₹20K–50K referral rewards.</p>
            
            <!-- 4 Benchmark Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 28px;">
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">150<span style="color: #F55825;">+</span></div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Hiring Partners</div>
              </div>
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">₹8.5L</div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Average CTC</div>
              </div>
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">48<span style="color: #F55825;">Hrs</span></div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Direct Shortlist</div>
              </div>
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">94<span style="color: #F55825;">%</span></div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Offer Conversion</div>
              </div>
            </div>

            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a href="https://uden.tech/find-opportunity" style="background: #F55825; color: #FFFFFF; padding: 14px 28px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 20px rgba(245,88,37,0.25);">Start Free AI Mock Interview &rarr;</a>
              <a href="https://uden.tech/reports/tier-2-3-placement-report-2026" style="background: #FFFFFF; color: #4B638C; border: 2px solid #4B638C; padding: 12px 24px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none;">Explore 2026 Placement Report</a>
            </div>
          </div>

          <!-- Right Column: Candidate Shortlist Card -->
          <div style="background: #FFFFFF; border: 1.5px solid #FEF5D8; border-radius: 22px; padding: 28px; box-shadow: 0 14px 32px rgba(75,99,140,0.08);">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px; border-bottom: 1px solid #F1F5F9; padding-bottom: 16px;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: #FFF0EB; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #F55825; font-weight: 800;">AS</div>
              <div>
                <div style="font-size: 18px; font-weight: 800; color: #1E293B;">Alex Sharma <span style="color: #10B981;">&#10003; Verified</span></div>
                <div style="font-size: 13.5px; color: #64748B;">Fullstack React & Node.js Engineer</div>
              </div>
              <div style="margin-left: auto; background: #FEF5D8; color: #F55825; font-weight: 800; padding: 4px 12px; border-radius: 12px; font-size: 13px;">96% AI Score</div>
            </div>
            <div style="background: #FFFDF7; border: 1px solid #FEF5D8; border-radius: 12px; padding: 14px; font-size: 13.5px; color: #1E293B; font-weight: 600;">
              Verified Recruiter Match: <span style="color: #F55825; font-weight: 800;">Deloitte Tech</span> &bull; Interview Shortlist Confirmed (₹9.2L / yr)
            </div>
          </div>
        </div>

        <!-- Four Core Pillars -->
        <div style="text-align: center; margin-bottom: 36px;">
          <h2 style="font-size: 30px; font-weight: 900; color: #1E293B; margin-bottom: 12px;">Why Candidates & Students Choose <span style="color: #F55825;">UDEN.tech</span></h2>
          <p style="font-size: 16px; color: #64748B; max-width: 750px; margin: 0 auto;">Everything you need to upskill, prepare for company selection rounds, and get placed at top tech enterprises.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 48px;">
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 28px; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 14px;">🎯</div>
            <h3 style="font-size: 19px; font-weight: 800; color: #1E293B; margin: 0 0 10px;">24x7 AI Mock Interviews</h3>
            <p style="font-size: 14.5px; color: #64748B; line-height: 1.6; margin: 0;">Simulate live voice and video technical rounds across coding algorithms, data structures, and system design without fear of judgement.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 28px; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 14px;">📊</div>
            <h3 style="font-size: 19px; font-weight: 800; color: #1E293B; margin: 0 0 10px;">8-Axis Skill Radar</h3>
            <p style="font-size: 14.5px; color: #64748B; line-height: 1.6; margin: 0;">Comprehensive automated feedback across algorithmic efficiency, code readability, spoken confidence, problem formulation, and domain expertise.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 28px; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 14px;">⚡</div>
            <h3 style="font-size: 19px; font-weight: 800; color: #1E293B; margin: 0 0 10px;">ATS Resume Optimization</h3>
            <p style="font-size: 14.5px; color: #64748B; line-height: 1.6; margin: 0;">Automated parsing that formats your experience, projects, and tech stack to achieve 90%+ pass rates through corporate ATS filters.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 28px; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 14px;">🏆</div>
            <h3 style="font-size: 19px; font-weight: 800; color: #1E293B; margin: 0 0 10px;">₹20K–₹50K Referral Rewards</h3>
            <p style="font-size: 14.5px; color: #64748B; line-height: 1.6; margin: 0;">Earn direct cash rewards by referring qualified peers from your college to open corporate hiring drives in the UDEN network.</p>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/jobseekers',
    canonical: 'https://uden.tech/jobseekers',
    title: 'AI Job Matching for First-Time Jobseekers | UDEN',
    description: 'AI-matched career guidance and fitment scoring across 100,000+ job openings. Apply off-campus in 1 click with UDEN.',
    keywords: 'AI job matching, first-time jobseekers, career guidance, fitment scoring, off-campus jobs, UDEN',
    renderContent: () => `
      <main style="max-width: 1200px; margin: 0 auto; padding: 48px 24px; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
        <!-- Hero Section -->
        <div style="background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%); border-radius: 24px; padding: 48px; border: 1.5px solid #FEF5D8; margin-bottom: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
          <div>
            <span style="display: inline-flex; align-items: center; gap: 8px; background: #FEF5D8; color: #F55825; padding: 6px 16px; border-radius: 20px; font-size: 12.5px; font-weight: 800; border: 1px solid #F7BC08; text-transform: uppercase; margin-bottom: 18px;">AI JOB MATCHING & CAREER ACCELERATOR</span>
            <h1 style="font-size: 40px; font-weight: 900; color: #1E293B; line-height: 1.2; margin: 0 0 16px;">AI Job Matching for <span style="color: #F55825;">First-Time Jobseekers</span></h1>
            <p style="font-size: 16.5px; color: #475569; line-height: 1.65; margin-bottom: 28px;">AI-matched career guidance and fitment scoring across 100,000+ job openings. Apply off-campus in 1 click with UDEN.</p>
            
            <!-- 4 Benchmark Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 28px;">
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">150<span style="color: #F55825;">+</span></div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Hiring Partners</div>
              </div>
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">₹8.5L</div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Average CTC</div>
              </div>
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">48<span style="color: #F55825;">Hrs</span></div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Direct Shortlist</div>
              </div>
              <div style="background: #FFFFFF; border: 1.5px solid rgba(247,188,8,0.4); border-radius: 16px; padding: 14px 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="font-size: 22px; font-weight: 900; color: #1E293B;">94<span style="color: #F55825;">%</span></div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700;">Offer Conversion</div>
              </div>
            </div>

            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a href="https://uden.tech/find-opportunity" style="background: #F55825; color: #FFFFFF; padding: 14px 28px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 20px rgba(245,88,37,0.25);">Search 100,000+ Jobs &rarr;</a>
              <a href="https://uden.tech/students" style="background: #FFFFFF; color: #4B638C; border: 2px solid #4B638C; padding: 12px 24px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none;">AI Student Career Prep</a>
            </div>
          </div>

          <!-- Right Column: Candidate Shortlist Card -->
          <div style="background: #FFFFFF; border: 1.5px solid #FEF5D8; border-radius: 22px; padding: 28px; box-shadow: 0 14px 32px rgba(75,99,140,0.08);">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px; border-bottom: 1px solid #F1F5F9; padding-bottom: 16px;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: #FFF0EB; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #F55825; font-weight: 800;">AS</div>
              <div>
                <div style="font-size: 18px; font-weight: 800; color: #1E293B;">Alex Sharma <span style="color: #10B981;">&#10003; Verified</span></div>
                <div style="font-size: 13.5px; color: #64748B;">Fullstack React & Node.js Engineer</div>
              </div>
              <div style="margin-left: auto; background: #FEF5D8; color: #F55825; font-weight: 800; padding: 4px 12px; border-radius: 12px; font-size: 13px;">96% AI Score</div>
            </div>
            <div style="background: #FFFDF7; border: 1px solid #FEF5D8; border-radius: 12px; padding: 14px; font-size: 13.5px; color: #1E293B; font-weight: 600;">
              Verified Recruiter Match: <span style="color: #F55825; font-weight: 800;">Deloitte Tech</span> &bull; Interview Shortlist Confirmed (₹9.2L / yr)
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin: 48px 0;">
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 24px; border-radius: 16px;">
            <h3 style="color: #0F172A; font-size: 20px; margin: 0 0 10px; font-weight: 800;">100,000+ Active Roles</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0;">Direct positions in Full-Stack Web, Cloud Infrastructure, Data Engineering, Machine Learning, and Enterprise QA.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 24px; border-radius: 16px;">
            <h3 style="color: #0F172A; font-size: 20px; margin: 0 0 10px; font-weight: 800;">48-Hour Shortlists</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0;">Because our partners pre-verify candidates on UDEN Skill Radar, verified profiles bypass initial resume black holes.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 24px; border-radius: 16px;">
            <h3 style="color: #0F172A; font-size: 20px; margin: 0 0 10px; font-weight: 800;">₹20,000–₹50,000 Referrals</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0;">Help your friends get hired and earn direct cash referral bonuses credited immediately upon joining.</p>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/colleges',
    canonical: 'https://uden.tech/colleges',
    title: 'Campus Placement Automation (CPS) for TPOs & Colleges | UDEN',
    description: "Automate placement drives, generate instant NAAC/NBA accreditation reports, and connect students to 150+ recruiters with UDEN's CPS.",
    keywords: 'campus placement automation, CPS, TPOs, colleges, NAAC accreditation, NBA reports, recruiters, UDEN',
    renderContent: () => `
      <main style="max-width: 1200px; margin: 0 auto; padding: 48px 24px; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
        <!-- Hero Section -->
        <div style="background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%); border-radius: 24px; padding: 48px; border: 1.5px solid #DA532C; margin-bottom: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
          <div>
            <span style="display: inline-flex; align-items: center; gap: 8px; background: rgba(218,83,44,0.12); color: #DA532C; padding: 6px 16px; border-radius: 20px; font-size: 12.5px; font-weight: 800; border: 1px solid rgba(218,83,44,0.25); text-transform: uppercase; margin-bottom: 18px;">INSTITUTIONAL PLACEMENT AUTOMATION</span>
            <h1 style="font-size: 40px; font-weight: 900; color: #1E293B; line-height: 1.2; margin: 0 0 16px;">Campus Placement Automation (CPS) <span style="color: #DA532C;">for TPOs &amp; Colleges</span></h1>
            <p style="font-size: 16.5px; color: #475569; line-height: 1.65; margin-bottom: 28px;">Automate placement drives, generate instant NAAC/NBA accreditation reports, and connect students to 150+ recruiters with UDEN’s CPS.</p>
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a href="https://uden.tech/campus-partner-form" style="background: #DA532C; color: #FFFFFF; padding: 14px 28px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 20px rgba(218,83,44,0.25);">Request College Demo &rarr;</a>
              <a href="https://uden.tech/reports/tier-2-3-placement-report-2026" style="background: #FFFFFF; color: #1E293B; border: 2px solid #CBD5E1; padding: 12px 24px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none;">View Placement Benchmarks</a>
            </div>
          </div>
          <!-- Right Column: Portal Registration Form -->
          <div style="background: #FFFFFF; border: 2px solid #DA532C; border-radius: 20px; padding: 32px; box-shadow: 0 16px 36px rgba(218,83,44,0.15);">
            <div style="font-size: 20px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">🏛️ Partner College Portal</div>
            <p style="font-size: 13.5px; color: #64748B; margin-bottom: 20px;">Register your university to activate UDEN's Campus Placement Drive software.</p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="background: #F8FAFC; border: 1.5px solid #CBD5E1; border-radius: 12px; padding: 12px 16px; font-size: 14px; color: #94A3B8;">Institution / College Name</div>
              <div style="background: #F8FAFC; border: 1.5px solid #CBD5E1; border-radius: 12px; padding: 12px 16px; font-size: 14px; color: #94A3B8;">Official University Email ID</div>
              <a href="https://uden.tech/campus-partner-form" style="background: #DA532C; color: #FFFFFF; text-align: center; padding: 14px; border-radius: 12px; font-weight: 800; font-size: 15px; text-decoration: none;">Activate Campus Portal &rarr;</a>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin: 48px 0;">
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 24px; border-radius: 16px;">
            <h3 style="color: #0F172A; font-size: 20px; margin: 0 0 10px; font-weight: 800;">Drive Scheduling Automation</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0;">Manage on-campus, off-campus, and pooled drives in a unified dashboard with automated student eligibility filtering.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 24px; border-radius: 16px;">
            <h3 style="color: #0F172A; font-size: 20px; margin: 0 0 10px; font-weight: 800;">1-Click NAAC/NBA Reports</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0;">Eliminate weeks of spreadsheet consolidation. Export audit-ready placement records, offer letter archives, and median salary metrics instantly.</p>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; padding: 24px; border-radius: 16px;">
            <h3 style="color: #0F172A; font-size: 20px; margin: 0 0 10px; font-weight: 800;">Real-Time Employability Analytics</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0;">Track student AI mock scores, identify skill deficiencies early, and implement targeted upskilling cohorts before companies arrive.</p>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/recruiters',
    canonical: 'https://uden.tech/recruiters',
    title: 'Hire Pre-Vetted Tier 2/3 Tech Talent | UDEN for Recruiters',
    description: 'Hire job-ready tech talent from Tier 2/3 colleges with a 48-hour shortlist SLA and zero-risk post-hire upskilling.',
    keywords: 'hire pre-vetted talent, Tier 2/3 tech talent, recruiters, 48-hour shortlist SLA, post-hire upskilling, UDEN',
    renderContent: () => `
      <main style="max-width: 1200px; margin: 0 auto; padding: 48px 24px; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
        <!-- Hero Section -->
        <div style="background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%); border-radius: 24px; padding: 48px; border: 1.5px solid rgba(75, 99, 140, 0.25); margin-bottom: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
          <div>
            <span style="display: inline-flex; align-items: center; gap: 8px; background: rgba(75, 99, 140, 0.1); color: #4B638C; padding: 6px 18px; border-radius: 20px; font-size: 12.5px; font-weight: 800; border: 1px solid rgba(75, 99, 140, 0.25); text-transform: uppercase; margin-bottom: 16px; letter-spacing: 0.5px;">ENTERPRISE TALENT ACQUISITION</span>
            <h1 style="font-size: 40px; font-weight: 900; color: #1E293B; line-height: 1.18; margin: 0 0 16px 0; letter-spacing: -0.8px;">Hire Pre-Vetted <span style="color: #F55825;">Tier 2/3 Tech Talent</span></h1>
            <p style="font-size: 16px; color: #475569; line-height: 1.65; margin-bottom: 28px; font-weight: 500;">Access top 1% pre-assessed software engineers, cloud architects, and data experts across India &amp; global markets. Zero sourcing fee until you hire.</p>
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a href="https://uden.tech/find-talent" style="background: #F55825; color: #FFFFFF; padding: 14px 28px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 20px rgba(245,88,37,0.25);">Post Hiring Requisition &rarr;</a>
              <a href="https://uden.tech/reports/tier-2-3-placement-report-2026" style="background: #FFFFFF; color: #1E293B; border: 2px solid #CBD5E1; padding: 12px 24px; border-radius: 28px; font-size: 15px; font-weight: 800; text-decoration: none;">View 2026 Salary Trends</a>
            </div>
          </div>
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 20px; padding: 28px; box-shadow: 0 10px 24px rgba(0,0,0,0.05);">
            <div style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 16px;">Recruiter Guarantees</div>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="display: flex; align-items: center; gap: 12px; font-size: 14.5px; font-weight: 700; color: #1E293B;">
                <span style="color: #10B981; font-size: 18px;">&#10003;</span> 48-Hour Shortlist SLA
              </div>
              <div style="display: flex; align-items: center; gap: 12px; font-size: 14.5px; font-weight: 700; color: #1E293B;">
                <span style="color: #10B981; font-size: 18px;">&#10003;</span> Verified 8-Axis Skill Radar &amp; Mock Video
              </div>
              <div style="display: flex; align-items: center; gap: 12px; font-size: 14.5px; font-weight: 700; color: #1E293B;">
                <span style="color: #10B981; font-size: 18px;">&#10003;</span> Zero-Risk Post-Hire Upskilling Support
              </div>
            </div>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/reports/tier-2-3-placement-report-2026',
    canonical: 'https://uden.tech/reports/tier-2-3-placement-report-2026',
    title: 'Tier 2 & Tier 3 College Placement Report 2026 | UDEN Employability Index',
    description: 'Original benchmark report on campus placement statistics, AI skill gaps, salary package trends, and recruiter demand across 2,500+ placed graduates.',
    keywords: 'tier 2 college placement report 2026, tier 3 placement statistics, engineering salaries India 2026, UDEN employability index',
    renderContent: () => `
      <main style="max-width: 1100px; margin: 0 auto; padding: 40px 24px;">
        <span style="background: #FFF0EB; color: #F55825; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 13px; text-transform: uppercase;">Flagship Research Benchmark</span>
        <h1 style="font-size: 38px; color: #0F172A; font-weight: 800; margin: 16px 0;">Tier 2 & Tier 3 College Placement Report 2026</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6; max-width: 900px;">
          The definitive employability benchmark analyzing 2,500+ placed engineering graduates, 21+ university partners, and 150+ corporate employers across India.
        </p>

        <section style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 28px; border-radius: 12px; margin: 32px 0;">
          <h3 style="color: #0F172A; font-size: 22px; margin-top: 0;">Key Benchmark Highlights</h3>
          <ul style="color: #334155; line-height: 1.8; margin-bottom: 0;">
            <li><strong>Overall Placement Rate:</strong> 91.4% for students completing 5+ AI mock interviews versus 48.2% baseline.</li>
            <li><strong>Average Package:</strong> ₹6.8 LPA for Tier 2/3 engineering talent (top AI/Cloud offers reached ₹14.0 LPA).</li>
            <li><strong>Median Salary:</strong> ₹5.8 LPA; 10th percentile ₹12.4 LPA.</li>
            <li><strong>Most In-Demand Stack:</strong> Full-Stack Web (34%), Cloud/DevOps/LLM Infra (28%), Data Engineering/Python (22%).</li>
          </ul>
        </section>

        <div style="margin-top: 32px;">
          <a href="https://uden.tech/students" style="color: #F55825; font-weight: 700; margin-right: 20px;">Explore Students Prep &rarr;</a>
          <a href="https://uden.tech/colleges" style="color: #F55825; font-weight: 700; margin-right: 20px;">TPO Campus Placement System &rarr;</a>
          <a href="https://uden.tech/recruiters" style="color: #F55825; font-weight: 700;">Recruiter Hiring Solutions &rarr;</a>
        </div>
      </main>
    `
  },
  {
    route: '/seo-plan',
    canonical: 'https://uden.tech/seo-plan',
    title: 'SEO Boost Plan & 100 Backlink Directory Tracker | UDEN.tech',
    description: 'Internal growth dashboard tracking UDEN\'s 90-day SEO boost plan, canonical consistency, and 100-site backlink directory submissions.',
    keywords: 'UDEN SEO boost plan, backlink directory tracker, 100 sites list, canonical consistency',
    renderContent: () => `
      <main style="max-width: 1100px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">UDEN.tech — SEO Boost Plan & 100-Site Backlink Tracker</h1>
        <p style="font-size: 16px; color: #475569; line-height: 1.6;">
          Growth dashboard tracking the 90-day SEO plan, self-referencing canonical verification, structured JSON-LD schemas, and curated high-DA backlink submission targets.
        </p>
        <p style="margin-top: 24px;">
          <a href="https://uden.tech/backlinks-100-tracker.csv" download style="background: #F55825; color: #FFF; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">Download 100-Site Backlink CSV</a>
        </p>
      </main>
    `
  },
  {
    route: '/blogs',
    canonical: 'https://uden.tech/blogs',
    title: 'Career & Tech Hiring Insights Blog | UDEN',
    description: 'Latest guides on tech hiring trends, AI interview readiness, campus placement automation, and cloud engineering careers in India.',
    keywords: 'UDEN blogs, campus hiring guide, AI interview tips, cloud computing careers, student placement advice',
    renderContent: () => `
      <main style="max-width: 1100px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 38px; color: #0F172A; font-weight: 800; margin-bottom: 12px;">UDEN Career & Tech Hiring Insights</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 40px;">Actionable research, placement statistics, and career roadmaps for students, colleges, and recruiters.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          ${blogArticles.map(article => `
            <article style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 24px; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="color: #64748B; font-size: 13px;">${article.displayDate} &bull; ${article.publisher}</span>
                <h3 style="font-size: 20px; color: #0F172A; margin: 10px 0 12px; font-weight: 700;">
                  <a href="https://uden.tech/blogs/${article.id}" style="color: #0F172A; text-decoration: none;">${article.title}</a>
                </h3>
                <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0 0 16px;">${article.summary}</p>
              </div>
              <a href="https://uden.tech/blogs/${article.id}" style="color: #F55825; font-weight: 700; font-size: 14px; text-decoration: none;">Read Full Article &rarr;</a>
            </article>
          `).join('')}
        </div>
      </main>
    `
  },
  {
    route: '/about',
    canonical: 'https://uden.tech/about',
    title: 'About UDEN — Unified Development and Employment Network',
    description: 'UDEN is an AI-powered career readiness and placement platform backed by Microsoft for Startups, NVIDIA Inception, AWS EdStart and DPIIT.',
    keywords: 'About UDEN, Unified Development and Employment Network, AI career readiness, Microsoft for Startups, NVIDIA Inception, AWS EdStart, DPIIT',
    renderContent: () => `
      <main style="max-width: 1100px; margin: 0 auto; padding: 48px 24px; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
        <!-- Hero Mission Statement Banner -->
        <div style="background: linear-gradient(135deg, #FFFDF7 0%, #FFF3E0 100%); border-radius: 24px; padding: 48px 24px; border: 2px solid #FFE0B2; margin-bottom: 48px; text-align: center;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(245, 88, 37, 0.12); color: #F55825; padding: 6px 18px; border-radius: 20px; font-size: 13px; font-weight: 800; margin-bottom: 20px; border: 1px solid rgba(245, 88, 37, 0.25); text-transform: uppercase; letter-spacing: 0.5px;">
            OUR PURPOSE &amp; MISSION
          </div>
          <h1 style="font-size: 42px; font-weight: 900; color: #1E293B; line-height: 1.25; margin: 0 0 16px 0; letter-spacing: -0.8px;">
            Unified <span style="color: #F55825;">Development &amp; Employment</span> Across the Globe
          </h1>
          <p style="font-size: 16.5px; color: #475569; line-height: 1.65; margin-bottom: 36px; max-width: 780px; margin-left: auto; margin-right: auto;">
            UDEN (Unified Development and Employment Network) bridges the gap between ambitious talent, accredited upskilling academies, and enterprise employers through algorithmic matching.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 800px; margin: 0 auto;">
            <div style="background: #FFFFFF; border: 1.5px solid #FDE68A; border-radius: 18px; padding: 24px; text-align: center; box-shadow: 0 10px 25px -5px rgba(245, 88, 37, 0.08);">
              <div style="font-size: 34px; font-weight: 900; color: #F55825; margin-bottom: 4px;">25,000+</div>
              <div style="font-size: 13px; color: #64748B; font-weight: 700;">Students Assessed</div>
            </div>
            <div style="background: #FFFFFF; border: 1.5px solid #FDE68A; border-radius: 18px; padding: 24px; text-align: center; box-shadow: 0 10px 25px -5px rgba(245, 88, 37, 0.08);">
              <div style="font-size: 34px; font-weight: 900; color: #F55825; margin-bottom: 4px;">150+</div>
              <div style="font-size: 13px; color: #64748B; font-weight: 700;">Corporate Partners</div>
            </div>
            <div style="background: #FFFFFF; border: 1.5px solid #FDE68A; border-radius: 18px; padding: 24px; text-align: center; box-shadow: 0 10px 25px -5px rgba(245, 88, 37, 0.08);">
              <div style="font-size: 34px; font-weight: 900; color: #F55825; margin-bottom: 4px;">98%</div>
              <div style="font-size: 13px; color: #64748B; font-weight: 700;">Placement Success Rate</div>
            </div>
          </div>
        </div>

        <!-- Official About UDEN Vision Section -->
        <section style="margin: 48px 0;">
          <h2 style="font-size: 32px; font-weight: 900; color: #F55825; margin-bottom: 20px;">About UDEN</h2>
          <p style="font-size: 16px; color: #334155; line-height: 1.75; margin-bottom: 20px;">
            To create an AI/ML powered ecosystem where the right talent gets guidance to access World's best opportunities. The platform facilitates an algorithmic fitment between the profile of the Talent and what global Companies require to meet their business demand.
          </p>
          <p style="font-size: 16px; color: #334155; line-height: 1.75; margin-bottom: 20px;">
            UDEN platform ensures all companies get deserving and aspiring talents for their teams with a minimum effort toward the recruitment process. It helps minimize the cost of onboarding with our "Hire only Trained" model through process, IP's.
          </p>
          <p style="font-size: 16px; color: #334155; line-height: 1.75; margin-bottom: 20px;">
            UDEN platform serves as an unbiased and neutral agency to rate/review and guide training and upskilling institutions based on industry requirements. It will be the one-stop solution for all job and course-related suggestions for job seekers and students.
          </p>
          <p style="font-size: 16px; color: #334155; line-height: 1.75; margin-bottom: 20px;">
            UDEN (operated by Digverve Solutions Pvt. Ltd.) is recognized and supported by <strong>Microsoft for Startups Founders Hub, NVIDIA Inception Program, AWS EdStart, DPIIT (Startup India), and NSRCEL IIM Bangalore</strong>.
          </p>
        </section>
      </main>
    `
  },
  {
    route: '/contact-us',
    canonical: 'https://uden.tech/contact-us',
    title: 'Contact UDEN | Bengaluru & Ranchi Regional Hubs',
    description: 'Get in touch with UDEN team for student support, college TPO partnerships, and corporate hiring inquiries.',
    keywords: 'Contact UDEN, UDEN email, UDEN phone, Bangalore office, Ranchi office, campus hiring contact',
    renderContent: () => `
      <main style="max-width: 1000px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 38px; color: #0F172A; font-weight: 800;">Contact UDEN</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">
          Have questions about student career prep, college TPO placement automation, or corporate talent acquisition? Our team is here to help.
        </p>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 24px; border-radius: 12px; margin: 32px 0;">
          <p><strong>Email:</strong> <a href="mailto:contact@uden.tech" style="color: #F55825;">contact@uden.tech</a></p>
          <p><strong>Headquarters:</strong> HSR Layout, Sector 7, Bengaluru, Karnataka 560102</p>
          <p><strong>Regional Operations:</strong> Ranchi, Jharkhand, India</p>
        </div>
      </main>
    `
  },
  {
    route: '/faq',
    canonical: 'https://uden.tech/faq',
    title: 'Frequently Asked Questions | UDEN AI Career Platform',
    description: 'Find answers to common questions about UDEN AI mock interviews, student placement guarantee, TPO campus software, and employer hiring.',
    keywords: 'UDEN FAQ, campus placement questions, AI mock interview faq, hire students india faq',
    renderContent: () => `
      <main style="max-width: 1000px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 38px; color: #0F172A; font-weight: 800;">Frequently Asked Questions (FAQ)</h1>
        <dl style="margin-top: 32px; line-height: 1.8;">
          <dt style="font-size: 18px; font-weight: 700; color: #0F172A;">What is UDEN?</dt>
          <dd style="color: #475569; margin: 8px 0 24px;">UDEN (Unified Development and Employment Network) is an AI-powered career platform providing 24x7 AI mock interviews, resume optimization, and automated campus placements for Tier 2 and Tier 3 college students in India.</dd>

          <dt style="font-size: 18px; font-weight: 700; color: #0F172A;">How does UDEN help College Training and Placement Officers (TPOs)?</dt>
          <dd style="color: #475569; margin: 8px 0 24px;">UDEN provides TPOs with a Campus Placement System (CPS) that automates recruitment drives, generates 1-click NAAC & NBA accreditation audit reports, and connects students directly to 150+ corporate hiring partners.</dd>

          <dt style="font-size: 18px; font-weight: 700; color: #0F172A;">Is UDEN free for students?</dt>
          <dd style="color: #475569; margin: 8px 0 24px;">Yes, student registration, AI mock practice, resume scoring, and job applications are 100% free.</dd>

          <dt style="font-size: 18px; font-weight: 700; color: #0F172A;">How quickly can companies hire talent through UDEN?</dt>
          <dd style="color: #475569; margin: 8px 0 24px;">Employers receive pre-assessed candidate shortlists backed by verified AI skill radar scores within 48 hours.</dd>
        </dl>
      </main>
    `
  },
  {
    route: '/privacy-policy',
    canonical: 'https://uden.tech/privacy-policy',
    title: 'Privacy Policy | UDEN',
    description: 'Privacy Policy for UDEN (Unified Development and Employment Network) and Digverve Solutions Pvt. Ltd.',
    keywords: 'privacy policy, UDEN privacy, data protection',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px; line-height: 1.6; color: #334155;">
        <h1 style="color: #0F172A; font-size: 34px;">Privacy Policy</h1>
        <p>Last updated: September 10, 2026. Operated by Digverve Solutions Pvt. Ltd.</p>
        <p>UDEN respects the privacy of our students, partner colleges, and corporate employers. We collect and process user data solely to facilitate AI career readiness, mock interview assessments, and job placement matching.</p>
      </main>
    `
  },
  {
    route: '/terms-and-conditions',
    canonical: 'https://uden.tech/terms-and-conditions',
    title: 'Terms and Conditions | UDEN',
    description: 'Terms and Conditions for using UDEN platform, campus placement services, and mobile applications.',
    keywords: 'terms and conditions, UDEN terms, user agreement',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px; line-height: 1.6; color: #334155;">
        <h1 style="color: #0F172A; font-size: 34px;">Terms and Conditions</h1>
        <p>Last updated: September 10, 2026. Operated by Digverve Solutions Pvt. Ltd.</p>
        <p>By accessing or using UDEN (uden.tech) or any affiliated applications, you agree to be bound by these Terms and Conditions.</p>
      </main>
    `
  },
  {
    route: '/find-opportunity',
    canonical: 'https://uden.tech/find-opportunity',
    title: 'Apply for Opportunities & Candidate Portal | UDEN',
    description: 'Submit your profile to be matched with top tech employers, campus hiring drives, and off-campus requisitions.',
    keywords: 'apply jobs, candidate registration, tech openings, UDEN career application',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Find Your Next Tech Career Opportunity</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Complete your registration to receive AI-matched interview invites and direct corporate recruiter shortlists.</p>
      </main>
    `
  },
  {
    route: '/find-talent',
    canonical: 'https://uden.tech/find-talent',
    title: 'Hire Pre-Vetted Talent Requisition Form | UDEN',
    description: 'Tell us your hiring requirements to receive candidate shortlists within 48 hours.',
    keywords: 'hire talent form, post job, campus hiring inquiry, recruit engineers',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Request Pre-Assessed Candidate Shortlists</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Submit your role details to receive pre-evaluated candidates from 21+ partner engineering institutions within 48 hours.</p>
      </main>
    `
  },
  {
    route: '/campus-partner-form',
    canonical: 'https://uden.tech/campus-partner-form',
    title: 'College TPO Partnership & CPS Demo Request | UDEN',
    description: 'Partner with UDEN to automate your college placement drives and receive NAAC/NBA placement audit tools.',
    keywords: 'college partner form, TPO demo, campus placement registration',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Partner Your College with UDEN</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Join 21+ higher education institutions using UDEN CPS to elevate campus placement rates.</p>
      </main>
    `
  },
  {
    route: '/hr-service-join',
    canonical: 'https://uden.tech/hr-service-join',
    title: 'HR Services & Corporate Talent Partnership | UDEN',
    description: 'Scale your recruitment engine with UDEN corporate HR and pre-assessment solutions.',
    keywords: 'HR service join, corporate partnership, talent acquisition',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Corporate HR & Hiring Solutions</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Access verified engineering talent with 48-hour shortlists and post-hire upskilling support.</p>
      </main>
    `
  },
  {
    route: '/government-partner-form',
    canonical: 'https://uden.tech/government-partner-form',
    title: 'Government & Skill Mission Partnership Request | UDEN',
    description: 'Collaborate with UDEN on state and national youth skill development and placement initiatives.',
    keywords: 'government partnership, skill india, youth employability, rural placement',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Government & Skill Mission Partnerships</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Partner with UDEN to deploy AI-powered career intelligence and youth skilling across state and district ecosystems.</p>
      </main>
    `
  },
  {
    route: '/upskilling-partners',
    canonical: 'https://uden.tech/upskilling-partners',
    title: 'Upskilling & Training Partner Program | UDEN',
    description: 'Partner with UDEN to deliver cutting-edge technical training, cloud certifications, and AI-driven placement cohorts.',
    keywords: 'upskilling partners, edtech partnership, training partners india, placement driven skilling',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Upskilling & Training Partner Program</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Join UDEN's network of specialized skilling institutions preparing candidates for high-growth tech roles.</p>
      </main>
    `
  },
  {
    route: '/hr-services',
    canonical: 'https://uden.tech/hr-services',
    title: 'Enterprise HR & Talent Acquisition Services | UDEN',
    description: 'Custom HR staffing, pre-assessment drives, and campus recruitment automation for high-volume corporate hiring.',
    keywords: 'enterprise HR services, corporate staffing, candidate assessment, tech hiring solutions',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Enterprise HR & Talent Solutions</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">End-to-end recruitment management and pre-assessed talent pipelines tailored to your organizational scale.</p>
      </main>
    `
  },
  {
    route: '/government-partnership',
    canonical: 'https://uden.tech/government-partnership',
    title: 'Government & State Skill Development Partnerships | UDEN',
    description: 'Empowering state skilling missions and public universities with AI career intelligence and verified placement tracking.',
    keywords: 'government skill missions, public university placements, state employability initiative',
    renderContent: () => `
      <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
        <h1 style="font-size: 34px; color: #0F172A; font-weight: 800;">Government & State Skill Development Partnerships</h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6;">Deploy scalable placement readiness and AI mock evaluations across public colleges and district skill centers.</p>
      </main>
    `
  }
];

// Helper to sanitize and escape for HTML attribute
const escAttr = (str) => String(str || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Master function to generate prerendered HTML file for a route
function generatePage({ route, canonical, title, description, keywords, ogType = 'website', ogImage, breadcrumbJsonLd, articleJsonLd, bodyHtml }) {
  let html = baseTemplate;

  // Strip JobPosting schema from base template on non-job pages
  if (route !== '/find-opportunity') {
    html = html.replace(/\{\s*"@type":\s*"JobPosting"[\s\S]*?\},\s*/g, '');
    html = html.replace(/,\s*\{\s*"@type":\s*"JobPosting"[\s\S]*?\}/g, '');
  }

  // 0. Ensure explicit <meta charset="utf-8"> is the first tag in <head>
  if (/<meta\s+charset=[^>]+>/i.test(html)) {
    html = html.replace(/<meta\s+charset=[^>]+>/i, '<meta charset="utf-8">');
  } else {
    html = html.replace(/<head[^>]*>/i, '$&\n  <meta charset="utf-8">');
  }

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escAttr(title)}</title>`);
  html = html.replace(/<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i, `<meta name="title" content="${escAttr(title)}" />`);

  // 2. Replace Canonical Tag (Ensure exact self-referencing canonical)
  const canonicalTag = `<link rel="canonical" id="canonical-url" href="${escAttr(canonical)}" />`;
  if (html.includes('id="canonical-url"')) {
    html = html.replace(/<link\s+rel="canonical"\s+id="canonical-url"\s+href="[^"]*"\s*\/?>/i, canonicalTag);
  } else if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // 3. Replace Meta Description & Keywords
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escAttr(description)}" />`);
  if (keywords) {
    html = html.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${escAttr(keywords)}" />`);
  }

  // 4. Replace OpenGraph & Twitter Tags
  const finalOgImage = ogImage || 'https://uden.tech/og-banner.png';
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escAttr(title)}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escAttr(description)}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${escAttr(canonical)}" />`);
  html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${escAttr(ogType)}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${escAttr(finalOgImage)}" />`);

  html = html.replace(/<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:title" content="${escAttr(title)}" />`);
  html = html.replace(/<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:description" content="${escAttr(description)}" />`);
  html = html.replace(/<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:url" content="${escAttr(canonical)}" />`);
  html = html.replace(/<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:image" content="${escAttr(finalOgImage)}" />`);

  // 5. Inject Structured JSON-LD Schemas before </head>
  let extraScripts = '';
  if (breadcrumbJsonLd) {
    extraScripts += `\n    <script type="application/ld+json">\n    ${JSON.stringify(breadcrumbJsonLd, null, 2)}\n    </script>`;
  }
  if (articleJsonLd) {
    extraScripts += `\n    <script type="application/ld+json">\n    ${JSON.stringify(articleJsonLd, null, 2)}\n    </script>`;
  }
  if (extraScripts) {
    html = html.replace('</head>', `${extraScripts}\n  </head>`);
  }

  // 6. Assemble Full Semantic Layout
  const completeLayout = `
    ${renderHeader()}
    ${bodyHtml}
    ${renderFooter()}
  `;

  // 7. Replace any existing <noscript> block with a clean standard fallback to eliminate content duplication
  const cleanNoscript = `<noscript>You need to enable JavaScript to run this app.</noscript>`;
  if (html.includes('<noscript>')) {
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/i, cleanNoscript);
  } else {
    html = html.replace(/<div\s+id="root">/i, `${cleanNoscript}\n    <div id="root">`);
  }

  // 8. Inject the single canonical prerendered semantic layout into <div id="root">
  html = html.replace(/<div\s+id="root">\s*<\/div>/i, `<div id="root">${completeLayout}</div>`);

  return html;
}

// Ensure clean directory and write file
function writeRouteFile(routePath, htmlContent) {
  const cleanRoute = routePath.replace(/^\//, '').replace(/\/$/, '');
  let targetDir = path.join(BUILD_DIR, cleanRoute);

  // For root '/', don't create an empty folder
  if (!cleanRoute) {
    targetDir = BUILD_DIR;
  } else {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 1. Write directory index (build/<route>/index.html) for trailing slash requests
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, htmlContent, 'utf8');
  console.log(`[Prerender] Generated: ${targetFile.replace(BUILD_DIR, 'build')}`);

  // 2. Also write flat clean URL file (build/<route>.html) for non-trailing slash requests
  // Azure Static Web Apps clean URLs directly serves <route>.html when /<route> is requested!
  if (cleanRoute) {
    const flatFile = path.join(BUILD_DIR, `${cleanRoute}.html`);
    fs.mkdirSync(path.dirname(flatFile), { recursive: true });
    fs.writeFileSync(flatFile, htmlContent, 'utf8');
    console.log(`[Prerender] Generated: ${flatFile.replace(BUILD_DIR, 'build')}`);
  }
}

console.log('[Prerender] Starting static pre-rendering for all routes and blog posts...');

// 1. Prerender Core Platform & Marketing Pages
corePages.forEach(page => {
  const breadcrumb = buildBreadcrumbJsonLd(page.route, page.title.split('|')[0].trim());
  const html = generatePage({
    route: page.route,
    canonical: page.canonical,
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    ogType: 'website',
    breadcrumbJsonLd: breadcrumb,
    bodyHtml: page.renderContent()
  });

  writeRouteFile(page.route, html);
});

// 2. Prerender All 8 Dynamic Blog Articles
const customBlogMeta = {
  'managing-delayed-onboarding-strategies-for-students-704dbab5f0eb': {
    title: 'Managing Campus Onboarding Delays [2026 Guide] | UDEN',
    description: 'Facing a delayed job offer? Focus on AWS/AI certifications, freelance projects, and AI mock interview readiness while you wait to onboard.'
  },
  'build-a-career-in-cloud-computing-5943d2beb4ef': {
    title: 'How to Build a Career in Cloud Computing & GenAI | UDEN',
    description: 'Master AWS, GCP, Azure, Docker, Kubernetes and generative AI model hosting to access 150,000+ cloud computing jobs.'
  },
  'startup-hiring-trend-in-2022-175664951461': {
    title: 'AI-Driven Startup Hiring Trends 2026: Top Skills | UDEN',
    description: 'Startups in Tier 2/3 cities are hiring AI/ML, full-stack and DevOps engineers with 45%+ growth. See which skills are in demand.'
  }
};

blogArticles.forEach(article => {
  const route = `/blogs/${article.id}`;
  const canonical = `https://uden.tech/blogs/${article.id}`;
  const custom = customBlogMeta[article.id];
  const pageTitle = custom ? custom.title : `${article.title} | UDEN Career Insights`;
  const description = custom ? custom.description : article.summary;
  const keywords = article.keywords.join(', ');
  const ogImage = article.image ? (article.image.startsWith('http') ? article.image : `https://uden.tech${article.image}`) : 'https://uden.tech/og-banner.png';

  const breadcrumb = buildBreadcrumbJsonLd(route, article.title);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": description,
    "datePublished": article.published,
    "dateModified": article.published,
    "image": ogImage,
    "author": {
      "@type": "Organization",
      "name": article.publisher,
      "url": "https://uden.tech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UDEN",
      "url": "https://uden.tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uden.tech/og-banner.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "keywords": article.keywords
  };

  const bodyHtml = `
    <main style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
      <div style="margin-bottom: 24px;">
        <a href="https://uden.tech/blogs" style="color: #F55825; text-decoration: none; font-weight: 700; font-size: 14px;">&larr; Back to All Articles</a>
      </div>

      <article>
        <header style="margin-bottom: 32px; border-bottom: 1px solid #E2E8F0; padding-bottom: 24px;">
          <div style="color: #64748B; font-size: 14px; margin-bottom: 8px;">
            Published on <strong>${article.displayDate}</strong> by <strong>${article.publisher}</strong>
          </div>
          <h1 style="font-size: 36px; color: #0F172A; font-weight: 800; line-height: 1.25; margin: 12px 0;">${article.title}</h1>
          <p style="font-size: 18px; color: #475569; line-height: 1.6; margin: 0;">${article.summary}</p>
        </header>

        ${article.tldr && article.tldr.length ? `
          <div style="background: #FFFDF0; border: 1px solid #FEF5D8; padding: 24px; border-radius: 12px; margin-bottom: 36px;">
            <h3 style="color: #854D0E; font-size: 18px; margin-top: 0; font-weight: 700;">Executive Summary & Key Takeaways (TL;DR)</h3>
            <ul style="color: #713F12; margin-bottom: 0; padding-left: 20px; line-height: 1.8;">
              ${article.tldr.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div style="color: #334155; font-size: 17px; line-height: 1.8;">
          ${article.sections.map(sec => `
            <section style="margin-bottom: 32px;">
              ${sec.heading ? `<h2 style="font-size: 24px; color: #0F172A; font-weight: 700; margin-bottom: 16px;">${sec.heading}</h2>` : ''}
              ${sec.paragraphs.map(p => `<p style="margin-bottom: 16px;">${p}</p>`).join('')}
            </section>
          `).join('')}
        </div>

        <section style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 28px; border-radius: 12px; margin-top: 48px;">
          <h3 style="color: #0F172A; font-size: 20px; margin-top: 0;">Explore Related Opportunities & Solutions</h3>
          <p style="color: #475569; margin-bottom: 16px;">Advance your placement readiness or streamline your campus recruitment drives with UDEN:</p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="https://uden.tech/students" style="color: #F55825; font-weight: 700; text-decoration: none;">For Students: AI Mock Prep &rarr;</a>
            <a href="https://uden.tech/jobseekers" style="color: #F55825; font-weight: 700; text-decoration: none;">For Jobseekers: 100k+ Jobs &rarr;</a>
            <a href="https://uden.tech/colleges" style="color: #F55825; font-weight: 700; text-decoration: none;">For Colleges: CPS Platform &rarr;</a>
            <a href="https://uden.tech/recruiters" style="color: #F55825; font-weight: 700; text-decoration: none;">For Recruiters: Hire Talent &rarr;</a>
          </div>
        </section>
      </article>
    </main>
  `;

  const html = generatePage({
    route,
    canonical,
    title: pageTitle,
    description,
    keywords,
    ogType: 'article',
    ogImage,
    breadcrumbJsonLd: breadcrumb,
    articleJsonLd,
    bodyHtml
  });

  writeRouteFile(route, html);
});

// Remove any stale /about-us files so Azure Static Web Apps route redirect cleanly handles /about-us -> /about
const legacyAboutUsHtml = path.join(BUILD_DIR, 'about-us.html');
const legacyAboutUsDir = path.join(BUILD_DIR, 'about-us');
if (fs.existsSync(legacyAboutUsHtml)) fs.unlinkSync(legacyAboutUsHtml);
if (fs.existsSync(legacyAboutUsDir)) fs.rmSync(legacyAboutUsDir, { recursive: true, force: true });

console.log('[Prerender] Successfully completed pre-rendering for all routes and blog posts!');
