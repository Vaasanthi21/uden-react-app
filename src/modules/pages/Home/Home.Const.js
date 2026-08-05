import { AppAssets } from "utils/consts/app_assets";
import { AppRoutes } from "utils/consts/routes";

const SliderItems = [
    {
        id: 1,
        title:"Find The Talent You Need",
        subtitle:"From The Global Pool",
        points:["Ai Powered","Pre Assessed","Curated Programs"],
        action:{
            name:"Find Talent",
            href:AppRoutes.FIND_TALENT
        },
        image:AppAssets.HomeAssets.SLIDER.HOMESLIDER_FIND_TALENT
    },
    {
        id: 2,
        title:"Get Access To Global Companies",
        subtitle:"To Realize Your Dream",
        points:["Get Up-Skilled","Mentored","Enhanced Resume"],
        action:{
            name:"Find Opportunities",
            href:AppRoutes.FIND_OPPORTUNITY
        },
        image:AppAssets.HomeAssets.SLIDER.HOMESLIDER_GET_ACCESS
    },
    {
        id: 3,
        title:"Up-Skill Talent And Bring To Them A World",
        subtitle:"Of Opportunities With Global Companies",
        points:["Up-Skill","Mentorship","Talent Readiness"],
        action:{
            name:"Become A Partner",
            href:AppRoutes.BECOME_PARTNER
        },
        image:AppAssets.HomeAssets.SLIDER.HOMESLIDER_UPSKILL
    },
    {
        id: 4,
        title:"Get HR Service",
        subtitle:"Make your Company best place to work",
        points:["Customized solutions","Expert guidance","Comprehensive services"],
        action:{
            name:"Join HR Services",
            href:AppRoutes.HR_SERVICE_JOIN
        },
        image:AppAssets.HomeAssets.SLIDER.HOMESLIDER_HR_SERVICE
    }
];

const MetricsTicker = [
    {
        number: "2,500+",
        label: "Candidates Placed Globally"
    },
    {
        number: "150+",
        label: "Partner Hiring Companies"
    },
    {
        number: "50+",
        label: "Curated Upskilling Programs"
    },
    {
        number: "98%",
        label: "Placement Success Rate"
    }
];

const CompanyInterviewPrep = {
    title: "Company-Specific Interview Prep & PYQs Engine",
    subtitle: "Search 100,000+ jobs directly and master each company's interview rounds with skill paths, video lessons, and previous years' exam papers.",
    companies: [
        {
            id: "deloitte",
            name: "Deloitte",
            logoText: "DL",
            roleTarget: "Associate Analyst & Tech Consultant",
            avgPackage: "₹7.6L / yr",
            rounds: [
                {
                    roundNum: "01",
                    title: "Aptitude & Verbal Reasoning",
                    skillFocus: "Quantitative, Logical & Verbal Ability",
                    pyqCount: "45 Previous Exam Papers",
                    videoCount: "12 Curated Video Lessons",
                    description: "Assess speed and accuracy in numerical puzzles, data interpretation, and business communication."
                },
                {
                    roundNum: "02",
                    title: "Technical Coding & SQL Assessment",
                    skillFocus: "Data Structures, SQL Queries, OOPS Concepts",
                    pyqCount: "30 Verified Coding Problems",
                    videoCount: "18 Hands-on Code Walkthroughs",
                    description: "Covers array manipulation, complex SQL JOIN queries, and object-oriented architecture."
                },
                {
                    roundNum: "03",
                    title: "AI Video Mock Interview (Final Prep)",
                    skillFocus: "Behavioral Scenarios & Project Defense",
                    pyqCount: "15 Real Recruiter Questions",
                    videoCount: "AI Real-Time Feedback Simulator",
                    description: "Simulate a live 1-on-1 video interview with real-time feedback on body language, tone, and technical clarity."
                }
            ]
        },
        {
            id: "tcs",
            name: "TCS NQT / Prime",
            logoText: "TCS",
            roleTarget: "Digital & Ninja Engineer",
            avgPackage: "₹7.0L - ₹9.0L / yr",
            rounds: [
                {
                    roundNum: "01",
                    title: "Cognitive & Foundational Test",
                    skillFocus: "Numerical, Verbal & Reasoning",
                    pyqCount: "60 TCS NQT Exam Sets",
                    videoCount: "15 Shortcut Trick Videos",
                    description: "Master time management for foundation and advanced cognitive sections."
                },
                {
                    roundNum: "02",
                    title: "Advanced Coding & Algorithms",
                    skillFocus: "C++, Java, Python Problem Solving",
                    pyqCount: "40 Past Exam Questions",
                    videoCount: "20 Algorithm Solutions",
                    description: "Solve string parsing, dynamic programming, and matrix manipulation questions under strict time limits."
                },
                {
                    roundNum: "03",
                    title: "Managerial & Technical Video Round",
                    skillFocus: "System Design & Final HR Round",
                    pyqCount: "20 Past Interview Transcripts",
                    videoCount: "AI Video Interview Practice",
                    description: "Comprehensive practice for technical defense, project architecture, and HR salary negotiation."
                }
            ]
        },
        {
            id: "amazon",
            name: "Amazon SDE",
            logoText: "AMZ",
            roleTarget: "Software Development Engineer (SDE-1)",
            avgPackage: "₹18L - ₹28L / yr",
            rounds: [
                {
                    roundNum: "01",
                    title: "Online Assessment & Work Simulation",
                    skillFocus: "16 Leadership Principles & Coding",
                    pyqCount: "50 Online Assessment Questions",
                    videoCount: "10 Work Style Walkthroughs",
                    description: "Evaluate system tradeoffs aligned directly with Amazon Leadership Principles."
                },
                {
                    roundNum: "02",
                    title: "Data Structures & Algorithmic Deep-Dive",
                    skillFocus: "Trees, Graphs, DP & System Architecture",
                    pyqCount: "65 Medium-Hard Problems",
                    videoCount: "25 Whiteboard Coding Videos",
                    description: "Focus on optimal space-time complexity, graph traversals, and dynamic programming."
                },
                {
                    roundNum: "03",
                    title: "Bar Raiser AI Video Interview",
                    skillFocus: "Behavioral Star Method & Technical Defense",
                    pyqCount: "30 Past Bar Raiser Prompts",
                    videoCount: "AI Bar-Raiser Mock Interview",
                    description: "Practice answering high-stakes behavioral questions using the STAR framework with instant AI scoring."
                }
            ]
        }
    ]
};

const WorkFlowNew = {
    title: "How UDEN Works",
    subtitle: "A personalized journey to assess, upskill and get you industry-ready.",
    jobSeekerSteps: [
        {
            step: "01",
            title: "Register & Search 100,000+ Jobs",
            desc: "Search openings aggregated across top job boards directly in one unified platform."
        },
        {
            step: "02",
            title: "Company-Specific Round Prep & PYQs",
            desc: "Explore round-by-round skill paths, video lessons, and previous years' exam paper sets."
        },
        {
            step: "03",
            title: "AI Video Mock Interview Practice",
            desc: "Practice company-specific video interviews with real-time AI scoring on tone, body language, and tech answers."
        },
        {
            step: "04",
            title: "Targeted Upskilling & Certification",
            desc: "Bridge identified skill gaps with accredited upskilling partners."
        },
        {
            step: "05",
            title: "Direct Recruiter Introduction",
            desc: "Get introduced directly to hiring managers with a 48-Hour Shortlist SLA."
        }
    ],
    companySteps: [
        {
            step: "01",
            title: "Post Job Requirements",
            desc: "Define your hiring needs, required tech stack, and experience levels."
        },
        {
            step: "02",
            title: "AI Candidate Matching",
            desc: "UDEN's AI engine instantly filters top-fit pre-assessed candidate profiles."
        },
        {
            step: "03",
            title: "Shortlist & Interview",
            desc: "Review verified skill scores, video intros, and schedule same-day interviews."
        },
        {
            step: "04",
            title: "Curated Cohort Training",
            desc: "Optionally curate custom upskilling programs aligned to your company stack."
        },
        {
            step: "05",
            title: "Onboard in 48 Hours",
            desc: "Deploy job-ready talent quickly with zero training overhead and full SLA protection."
        }
    ],
    footerBanner: "Your growth. Our mission. UDEN empowers you with the right skills, guidance, and opportunities to build a successful career."
};

const PersonaSwitcher = {
    title: "Tailored Solutions for Every Stakeholder",
    subtitle: "Select your role to see how UDEN accelerates growth for candidates, employers, colleges & governments",
    personas: [
        {
            id: "student",
            tabLabel: "🎓 For Job Seekers",
            badge: "Job Seekers & Freshers",
            title: "Search 100,000+ Jobs & Master Company Interview Rounds.",
            desc: "UDEN gives Tier 2 & Tier 3 students a multi-job board search engine, company-specific round prep, previous years' exam papers (PYQs), and AI Video Mock Interviews.",
            bullets: ["Multi-Job Board Search (100,000+ Jobs)", "Company Round-by-Round Study Paths & PYQs", "AI Video Detailed Mock Interview Simulator"],
            actionText: "Explore Job & Exam Prep",
            route: AppRoutes.JOB_SEEKERS
        },
        {
            id: "college",
            tabLabel: "🏛️ For Colleges / TPOs",
            badge: "Colleges & Universities",
            title: "Your placement rate, with proof behind it.",
            desc: "AI-powered placement-readiness programs built for NAAC and NIRF pressure — designed for Principals and TPOs at Tier 2 & 3 colleges.",
            bullets: ["+170% Corporate Drives / Student", "+21% On-Campus Conversion Rate", "+82% Average CTC Package Uplift"],
            actionText: "Partner Your College",
            route: AppRoutes.CAMPUS_PLACEMENTS
        },
        {
            id: "employer",
            tabLabel: "🏢 For Employers",
            badge: "Companies & Recruiters",
            title: "Hire pre-vetted talent evaluated by AI Video Interviews.",
            desc: "Access pre-screened, placement-ready candidates with AI video interview reports and verified benchmark scores across 21+ partner institutes.",
            bullets: ["48-Hour Shortlist SLA", "AI Video Interview Assessments", "Zero Upfront Sourcing Fees"],
            actionText: "Hire from UDEN",
            route: AppRoutes.COMPANIES
        },
        {
            id: "govt",
            tabLabel: "🏛️ For Public Institutions",
            badge: "Youth Skill Development",
            title: "Empowering Students with Industry-Ready Skills & Placements.",
            desc: "UDEN partners with educational institutions and skill development bodies to provide students with diagnostic skill tests, company PYQs, and corporate placement drives.",
            bullets: ["25,000+ Students Skill-Assessed", "150+ Corporate Hiring Partners", "100% Free Career Guidance for Candidates"],
            actionText: "Request Student Employability Proposal",
            route: AppRoutes.GOVERNMENT
        }
    ]
};

const CareerCalculator = {
    title: "Explore Your Career Growth Potential",
    subtitle: "See salary estimates and in-demand skills tailored to your domain",
    domains: {
        frontend: {
            label: "Frontend & Web Development",
            roles: ["React Developer", "Full Stack JS", "UI/UX Engineer"],
            growth: "+45%",
            avgSalary: "₹6.5L - ₹14L / year",
            skills: ["React 18", "TypeScript", "Next.js", "State Mgmt", "Tailwind/Emotion"]
        },
        backend: {
            label: "Backend & Cloud Systems",
            roles: ["Node.js Engineer", "Java Microservices", "Cloud DevOps"],
            growth: "+55%",
            avgSalary: "₹8L - ₹18L / year",
            skills: ["Node.js", "Docker", "AWS / Azure", "PostgreSQL", "Microservices"]
        },
        data: {
            label: "Data Science & AI/ML",
            roles: ["Data Analyst", "AI/ML Engineer", "Data Engineer"],
            growth: "+60%",
            avgSalary: "₹9L - ₹22L / year",
            skills: ["Python", "SQL", "Pandas", "PyTorch/TensorFlow", "PowerBI"]
        },
        hr: {
            label: "HR Ops & Talent Acquisition",
            roles: ["Talent Acquisition Lead", "HR Operations", "Recruiter"],
            growth: "+35%",
            avgSalary: "₹5L - ₹12L / year",
            skills: ["AI Screening", "HRIS Tools", "Talent Sourcing", "Labor Compliance"]
        }
    }
};

const RecruiterHub = {
    badge: "For Enterprise Recruiters",
    headingMain: "Hire Pre-Vetted Tech Talent in ",
    headingSpan: "48 Hours",
    desc: "Skip 30-day hiring cycles. Access UDEN’s pool of pre-assessed candidates evaluated by AI and industry mentors on real-world projects.",
    features: [
        "Top 5% verified technical & domain skill scores",
        "AI Video Interview Assessment Recordings",
        "48-hour shortlist SLA with resume & interview recordings"
    ],
    ctaText: "Request Candidate Profiles",
    slaCard: {
        title: "UDEN Hiring SLA Guarantee",
        rows: [
            { label: "Candidate Shortlist Time", value: "Under 24 Hours", highlight: true },
            { label: "AI Video Evaluation", value: "100% Completed" },
            { label: "Assessment Accuracy", value: "98.4% Verified" },
            { label: "Risk Protection", value: "Replacement Guarantee" }
        ]
    }
};

const TrustedBrand = {
    desktop:AppAssets.HomeAssets.TRUSTED_BRAND.DESKTOP,
    mobile:AppAssets.HomeAssets.TRUSTED_BRAND.MOBILE,
};

const WorkFlow = {
    Company:{
        desktop:AppAssets.HomeAssets.WORKFLOW.COMPANY.DESKTOP,
        tablet:AppAssets.HomeAssets.WORKFLOW.COMPANY.TABLET,
        mobile:AppAssets.HomeAssets.WORKFLOW.COMPANY.MOBILE,
    },
    JobSeeker:{
        desktop:AppAssets.HomeAssets.WORKFLOW.JOB_SEEKER.DESKTOP,
        tablet:AppAssets.HomeAssets.WORKFLOW.JOB_SEEKER.TABLET,
        mobile:AppAssets.HomeAssets.WORKFLOW.JOB_SEEKER.MOBILE,
    },
    title:"How it works",
    JobSeekersButtonText:"Job Seekers",
    CompanyButtonText:"Companies",
};

const Features = {
    title:"Get access to a global pool of pre-assessed Talent for all your needs",
    features:[
        {
            id: 1,
            title:"Talent Development",
            image:AppAssets.HomeAssets.FEATURES.TALENT_DEVELOPMENT,
            description:"UDEN'S platform offers jobseekers a platform to assess themselves on the most in-demand skills and in partnership with the upskilling partners, facilitate jobseekers in closing gaps if any,As a trusted partner to a large number of global organizations, UDEN offers a choice to the jobseekers and helps them find a job that best matches their aspirations and profile"
        },
        {
            id: 2,
            title:"Best Talent Fit",
            image:AppAssets.HomeAssets.FEATURES.BEST_TALENT_FIT,
            description:"UDEN's AI-powered matching ensures you get the Talent you require and when you require it.UDEN's50 customized and curated programs help you with a planned and predictable intake of Talent, which works out cost-effectively and helps you plan your business better.Access to the vast pool of pre-assessed Talent pool offers you a choice - both in terms of the right fitment and affordability"
        },
        {
            id: 3,
            title:"Curated Programs",
            image:AppAssets.HomeAssets.FEATURES.CURATED_PROGRAM,
            description:"UDEN believes there is always Talent out there for every skill you need and for those which are very specific and are not easily available in the pool, UDEN works with a large number of trusted upskilling partners to ensure those skills gaps can be closed quickly.The platform facilitates the jobseekers who choose to get upskilled with our partners to get access to the global companies UDEN works with closely to meet all their Talent needs"
        },
        {
            id: 4,
            title:"Al Powered Match",
            image:AppAssets.HomeAssets.FEATURES.AI_POWERED_MATHC,
            description:"UDEN'S platform facilitates job seekers to invest in the right upskilling programs. The continuously improving jobseeker's profile and the Talent needs from the companies are matched meticulously using the AI-powered engine which is not possible otherwise"
        },
    ],
    bottom:{
        title:"In-demand Skills",
        description:"In-demand skills The platform regularly identifies the skills where the gap between the market demand and the availability begins to widen and accordingly, channelizes all the efforts to Talent address the unmet demand. The Talent pool is swelling with",
        image:AppAssets.HomeAssets.FEATURES.IN_DEMAND_SKILLS
    }
};

const TrustedBy = {
    title:'Trusted By',
    certificate:AppAssets.HomeAssets.TRUSTED_BY.CERTIFICATE,
    aws:AppAssets.HomeAssets.TRUSTED_BY.AWS
};

const Testimonial = {
    title: "Testimonials",
    subtitle: "Real Stories from UDEN Candidates & Employers",
    testimonials:[
        {
            id: 1,
            image: AppAssets.HomeAssets.TESTIMONIAL.PALAK_JAIN,
            message: 'UDEN helped me with the interview preparation, PYQs, and AI video mock interviews which built my confidence. Thanks to their team I cracked Deloitte’s interview.',
            name: 'Palak Jain',
            company: 'Placed at Deloitte',
            badge: 'Verified Candidate'
        },
        {
            id: 2,
            image: AppAssets.HomeAssets.TESTIMONIAL.PANKAJ_SHARMA,
            message: 'Searching from lakhs of jobs and following the company-specific round prep guide made all the difference. I cleared TCS Digital with a ₹7.0L package.',
            name: 'Pankaj Sharma',
            company: 'Software Engineer',
            badge: 'Placed via UDEN'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
            message: 'As a hiring manager, UDEN reduced our time-to-hire from 4 weeks to under 48 hours. The pre-assessed AI video interview recordings saved us dozens of screening rounds.',
            name: 'Ananya Verma',
            company: 'Talent Acquisition Director',
            badge: 'Enterprise Employer'
        }
    ]
};

const StudentPlaced = {
    title: 'Student Placed',
    count:"2500"
};

export const HomeConst = {
    SliderItems,
    MetricsTicker,
    CompanyInterviewPrep,
    WorkFlowNew,
    PersonaSwitcher,
    CareerCalculator,
    RecruiterHub,
    TrustedBrand,
    WorkFlow,
    Features,
    TrustedBy,
    Testimonial,
    StudentPlaced
};