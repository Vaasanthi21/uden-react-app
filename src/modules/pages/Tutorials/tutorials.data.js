import heroImg from '../../../assets/tutorials/hero_career_growth.png';
import video1Img from '../../../assets/tutorials/video_1_overview.png';
import video2Img from '../../../assets/tutorials/video_2_profile_resume.png';
import video3Img from '../../../assets/tutorials/video_3_resume_analysis.png';
import video4Img from '../../../assets/tutorials/video_4_interview_coach.png';
import video5Img from '../../../assets/tutorials/video_5_points_referral.png';
import video6Img from '../../../assets/tutorials/video_6_job_agent_pro.png';
import video7Img from '../../../assets/tutorials/video_7_ai_job_matcher.png';
import video8Img from '../../../assets/tutorials/video_8_career_journey.png';

import video1MP4Asset from '../../../assets/tutorials/WelcometoUden.mp4';
import video2MP4Asset from '../../../assets/tutorials/UDEN_Video2_Profile_and_Resume_Tutorial.mp4';
import video3MP4Asset from '../../../assets/tutorials/ResumeAnalysis.mp4';
import video4MP4Asset from '../../../assets/tutorials/AiInterviewCoach.mp4';
import video5MP4Asset from '../../../assets/tutorials/PointsReferralSystem.mp4';
import video6MP4Asset from '../../../assets/tutorials/JobAgentPro.mp4';
import video7MP4Asset from '../../../assets/tutorials/AiJobMatcher.mp4';
import video8MP4Asset from '../../../assets/tutorials/FinalVideoCareer.mp4';

const resolveVideo = (asset, fallback) => {
  if (typeof asset === 'string' && asset.trim().length > 0) return asset;
  if (asset && typeof asset === 'object' && typeof asset.default === 'string') return asset.default;
  return fallback;
};

export const video1Url = resolveVideo(video1MP4Asset, '/assets/tutorials/WelcometoUden.mp4');
export const video2Url = resolveVideo(video2MP4Asset, '/assets/tutorials/UDEN_Video2_Profile_and_Resume_Tutorial.mp4');
export const video3Url = resolveVideo(video3MP4Asset, '/assets/tutorials/ResumeAnalysis.mp4');
export const video4Url = resolveVideo(video4MP4Asset, '/assets/tutorials/AiInterviewCoach.mp4');
export const video5Url = resolveVideo(video5MP4Asset, '/assets/tutorials/PointsReferralSystem.mp4');
export const video6Url = resolveVideo(video6MP4Asset, '/assets/tutorials/JobAgentPro.mp4');
export const video7Url = resolveVideo(video7MP4Asset, '/assets/tutorials/AiJobMatcher.mp4');
export const video8Url = resolveVideo(video8MP4Asset, '/assets/tutorials/FinalVideoCareer.mp4');

export const TUTORIAL_HERO_DATA = {
  badge: "UDEN TUTORIAL SERIES",
  titlePrefix: "Learn UDEN, ",
  titleHighlight: "step by step",
  subtitle: "8 short videos that walk you through every major UDEN feature — what it is for, where to find it and how the main workflow runs. Watch the video, then read the walkthrough and FAQs underneath it.",
  features: [
    "Video + written guide",
    "Step-by-step walkthroughs",
    "FAQs per module",
    "Points & approvals explained"
  ],
  ctaText: "Start with video 1",
  secondaryText: "Prefer reading? Every video has a written walkthrough.",
  cardBadge: "8 video modules",
  cardImage: heroImg,
  cardCaption: "Points, referrals & approvals explained"
};

export const TUTORIAL_MODULES = [
  {
    id: 1,
    number: "VIDEO 1 OF 8",
    title: "Welcome to UDEN: Platform Overview",
    shortTitle: "Welcome to UDEN: Platfor...",
    level: "Beginner",
    duration: "0:49 mins",
    image: video1Img,
    videoUrl: video1Url,
    fallbackVideoUrl: '/assets/tutorials/WelcometoUden.mp4',
    summary: "Why UDEN exists, the tools it puts in one place, how subscriptions and points work, and where to find every major feature.",
    about: [
      "UDEN brings career preparation and job search into one place. This opening video is a guided tour of the platform: you sign in, land on the main dashboard, and see how the navigation is organised around the tools you will use most.",
      "Along the way the video visits the Upgrade to Pro page and shows the three subscription options — Monthly, 6-Month, and 1-Year. A subscription is what gives you points, and points are what you spend when you use features such as Resume Analysis, AI Interview Coach and UDEN AI Assistant.",
      "The tour then moves quickly through every major area — Profile, Resume Builder, Resume Analysis, AI Interview Coach, UDEN AI Assistant, Job Agent Pro, AI Job Matcher and Referral. Each one gets a short introduction here; the full workflow for each is covered in the later videos of this series."
    ],
    covers: [
      "Log in or sign up and enter the UDEN platform",
      "Tour the main dashboard and navigation",
      "Open the Upgrade to Pro page and compare Monthly, 6-Month and 1-Year plans",
      "See the points each plan gives you",
      "Jump through Profile, Resume Builder, Resume Analysis, AI Interview Coach, UDEN AI Assistant, Job Agent Pro, AI Job Matcher and Referral"
    ],
    takeaways: [
      "UDEN provides multiple tools for career preparation and job search in one place.",
      "A subscription plan gives you points, and points are used across the platform features.",
      "Every major feature gets a short introduction here and its own video later in the series."
    ],
    faqs: [
      {
        question: "What do I get from a subscription?",
        answer: "A subscription provides a package of platform points valid for your subscription duration. You use these points to access AI-powered features like Resume Analysis, AI Interview practice, and UDEN AI Assistant assistance."
      },
      {
        question: "Which subscription options are available?",
        answer: "UDEN offers three plans: Monthly, 6-Month, and 1-Year plans. Longer plans provide more points at greater value per point along with extended validity."
      },
      {
        question: "Do I need a subscription before I can explore UDEN?",
        answer: "No. You can sign up, explore your dashboard, build your profile, and browse opportunities. Subscriptions and points are only needed when using AI credits such as interview simulations or in-depth resume scoring."
      }
    ]
  },
  {
    id: 2,
    number: "VIDEO 2 OF 8",
    title: "Profile & Resume: Build Your Professional Profile and Resume",
    shortTitle: "Profile & Resume: Build Yo...",
    level: "Beginner",
    duration: "1:36 mins",
    image: video2Img,
    videoUrl: video2Url,
    fallbackVideoUrl: '/assets/tutorials/UDEN_Video2_Profile_and_Resume_Tutorial.mp4',
    summary: "How your profile and resume builder work together, switching templates, and exporting an ATS-ready resume.",
    about: [
      "Your Profile is the central hub for maintaining all of your career information in UDEN. This video demonstrates how filling in your profile once powers the rest of your experience across the platform.",
      "We then dive into Resume Builder. The left panel allows you to enter or customize specific details manually, or pull them in with one click via 'Import from Profile'. On the right side, a live preview reflects every edit in real time.",
      "You'll see how to switch across the three professionally designed templates, select your favorite layout, and download the finished resume. Finally, we cover what to do if an organization or technical skill is not currently in the database — simply submit a request form for quick admin review."
    ],
    covers: [
      "Open Profile and review your personal and professional details",
      "Edit and save education, projects, certifications, and skills",
      "Open Resume Builder and explore the live split-view interface",
      "Use 'Import from Profile' to populate resume fields automatically",
      "Switch between the 3 available resume templates and preview changes instantly",
      "Select a preferred template and download the resume in the selected format",
      "Briefly show what users can do if an organization or skill is not available"
    ],
    takeaways: [
      "Complete your profile first where possible, then use that information to create and customize your resume.",
      "Resume Builder allows users to enter details manually or import information from their Profile.",
      "Users can choose between three templates and see the selected template in the preview before downloading.",
      "If an organization or skill is not available, request it via form — admin reviews and approves it."
    ],
    faqs: [
      {
        question: "Will updating my profile automatically overwrite my resume?",
        answer: "No. The Resume Builder lets you import data from your profile when you choose, but you can also tailor resume entries independently without changing your main profile."
      },
      {
        question: "How many resume templates can I choose from?",
        answer: "UDEN provides 3 ATS-optimized resume templates designed for tech, business, and early-career applicants. You can switch templates anytime without re-typing data."
      },
      {
        question: "How long does skill or organization approval take?",
        answer: "Admin review of custom skill and organization requests typically completes within 24 to 48 hours."
      }
    ]
  },
  {
    id: 3,
    number: "VIDEO 3 OF 8",
    title: "Resume Analysis & UDEN AI Assistant",
    shortTitle: "Resume Analysis & ChatGP...",
    level: "Intermediate",
    duration: "1:30 mins",
    image: video3Img,
    videoUrl: video3Url,
    fallbackVideoUrl: '/assets/tutorials/ResumeAnalysis.mp4',
    summary: "Show how users can improve their resume and use UDEN AI Assistant to clarify doubts.",
    about: [
      "Resume Analysis helps you understand the objective quality of your resume through the eyes of modern ATS and recruiters. In this video, we upload a resume and trigger the analysis to uncover the estimated hiring probability.",
      "We walk through the comprehensive evaluation metrics: structure, impact metrics, action verbs, and missing industry keywords. You'll see specific recommendations on how to revise weak bullet points to boost your hiring chances.",
      "Next, we open UDEN AI Assistant — your 24/7 in-platform career mentor. We demonstrate asking questions about specific interview hurdles, tricky resume phrasing, and learning paths, showing how conversational follow-ups can help clarify any doubt."
    ],
    covers: [
      "Open Resume Analysis and upload your resume",
      "Start the analysis and view hiring probability score",
      "Show the complete analysis and areas for improvement",
      "Show actionable recommendations for making the resume better",
      "Open UDEN AI Assistant from the navigation",
      "Ask a practical question/doubt and show the response and follow-up conversation"
    ],
    takeaways: [
      "Resume Analysis helps users understand the quality and hiring probability of their resume.",
      "Users can use the recommendations to make their resume stronger.",
      "UDEN AI Assistant can be used to clarify doubts and get assistance within UDEN, including career, resume, interview, learning, or general questions."
    ],
    faqs: [
      {
        question: "How many points does Resume Analysis cost?",
        answer: "Each full resume scan costs 5 points and generates an exhaustive analysis report with hiring probability."
      },
      {
        question: "How does UDEN AI Assistant deduct points?",
        answer: "UDEN AI Assistant deducts 1 point per conversational query/response interaction."
      },
      {
        question: "What file formats does Resume Analysis support?",
        answer: "PDF and DOCX formats are fully supported. For best results, use clean, selectable text PDFs."
      }
    ]
  },
  {
    id: 4,
    number: "VIDEO 4 OF 8",
    title: "AI Interview Coach",
    shortTitle: "AI Interview Coach",
    level: "Intermediate",
    duration: "1:47 mins",
    image: video4Img,
    videoUrl: video4Url,
    fallbackVideoUrl: '/assets/tutorials/AiInterviewCoach.mp4',
    summary: "Explain the complete AI interview journey without splitting booking, requests, and interview-taking into separate videos.",
    about: [
      "The AI Interview Coach provides a realistic, low-pressure interview simulator tailored to your target job role. Rather than fragmenting booking, role requests, and practice into multiple steps, this video covers the complete end-to-end interview journey.",
      "You'll see how to browse existing role templates or request a custom interview track. Once booked (costing 150 points), you step into the interview chamber where the AI conducts a structured interview, evaluating technical depth, communication clarity, and confidence.",
      "After finishing, we review the instant feedback report: your strengths, areas that need polish, model answers for questions you stumbled on, and actionable steps for your next round."
    ],
    covers: [
      "Open AI Interview Coach and select a particular role",
      "Book an available AI interview and review schedule/duration details",
      "Show the Request New Interview option for a specific role",
      "Show the interview starting and questions being answered",
      "Complete the interview and submit responses",
      "Review the comprehensive result and AI feedback report"
    ],
    takeaways: [
      "Users can book an available AI interview for a particular role or request a new interview role.",
      "Explain what happens before, during, and after the interview.",
      "Booking an AI interview deducts 150 points.",
      "Interview feedback provides actionable steps to improve performance."
    ],
    faqs: [
      {
        question: "How many points does booking an AI Interview take?",
        answer: "Booking an AI Interview costs 150 points and covers the full interview session plus detailed AI feedback."
      },
      {
        question: "What if my desired job role is not listed?",
        answer: "You can click 'Request New Interview' for any role. The platform team configures the role questions, making it available for booking."
      },
      {
        question: "Can I retake an interview to improve my score?",
        answer: "Yes! You can book subsequent sessions to measure your progress and track how your feedback scores improve over time."
      }
    ]
  },
  {
    id: 5,
    number: "VIDEO 5 OF 8",
    title: "Points & Referral System",
    shortTitle: "Points & Referral System",
    level: "Intermediate",
    duration: "1:38 mins",
    image: video5Img,
    videoUrl: video5Url,
    fallbackVideoUrl: '/assets/tutorials/PointsReferralSystem.mp4',
    summary: "Make the points system and referral rewards transparent so users understand how points are used and earned.",
    about: [
      "Transparency around points and rewards is essential for maximizing your value on UDEN. This video demonstrates exactly how points are consumed, where to track them, and how to earn both points and cash rewards through our referral program.",
      "We show live transactions: UDEN AI Assistant deducting 1 point, Resume Analysis deducting 5 points, and AI Interview booking consuming 150 points. You'll see where to audit every credit and debit inside My Profile's Transaction History.",
      "Finally, we walk through the Referral dashboard. You will learn how inviting friends rewards both of you upon signup (20 points each), and how upgrading friends generates up to ₹500 in direct cash rewards plus 500 points for you."
    ],
    covers: [
      "Show the user's current points balance in the platform header",
      "Demonstrate one UDEN AI Assistant conversation and show 1 point deduction",
      "Demonstrate Resume Analysis and show 5 points deduction",
      "Demonstrate AI Interview booking and show 150 points deduction",
      "Briefly explain that Job Agent Pro has its own point-deduction system",
      "Open My Profile and inspect point transaction and deduction history",
      "Open Referral and show referral code, link sharing, and cash reward structure"
    ],
    takeaways: [
      "UDEN AI Assistant: 1 point is deducted per conversation. Resume Analysis: 5 points deducted. AI Interview: 150 points deducted.",
      "Job Agent Pro uses its own point-deduction system.",
      "Users can check their full point transaction history from My Profile.",
      "Referrals give: 20 pts on signup, ₹50 cash + 50 pts on 1-month sub, ₹300 cash + 300 pts on 6-month sub, ₹500 cash + 500 pts on 1-year sub."
    ],
    faqs: [
      {
        question: "What are the exact referral rewards for subscriptions?",
        answer: "1-Month subscription referral: Referrer earns 50 points and receives a ₹50 cash reward. 6-Month subscription referral: Referrer earns 300 points and ₹300 cash reward; referred user gets 200 bonus points. 1-Year subscription referral: Referrer earns 500 points and ₹500 cash reward; referred user gets 300 bonus points."
      },
      {
        question: "Do points expire?",
        answer: "Points stay active as long as your subscription plan is valid. Unused points rollover if you renew before expiration."
      },
      {
        question: "Where do I track my points and referral earnings?",
        answer: "Visit My Profile > Transaction History for point logs, and the Referral tab to check referral invites and cash reward payouts."
      }
    ]
  },
  {
    id: 6,
    number: "VIDEO 6 OF 8",
    title: "Job Agent Pro: Prepare, Find Jobs, Apply & Track",
    shortTitle: "Job Agent Pro: Prepare, Fi...",
    level: "Advanced",
    duration: "0:52 mins",
    image: video6Img,
    videoUrl: video6Url,
    fallbackVideoUrl: '/assets/tutorials/JobAgentPro.mp4',
    summary: "Introduce the complete Job Agent Pro workflow so users understand how it supports their job search and preparation.",
    about: [
      "Job Agent Pro is your dedicated co-pilot that bridges preparation and real hiring. This walkthrough demonstrates how to pick a target role and follow a structured career roadmap tailored to current industry standards.",
      "You'll see how role-specific quizzes benchmark your core competencies, giving recruiters proof of your skills. We then navigate the curated job board, showing open positions that match your preparation profile.",
      "Learn how to apply in a single click, monitor your application status as recruiters review your profile, and access custom interview prep modules for each specific company and role."
    ],
    covers: [
      "Open Job Agent Pro and select a particular job role",
      "Show guided role preparation and skill requirements",
      "Show relevant jobs actively posted on the platform",
      "Open a job and demonstrate the smooth application flow",
      "Show where application status can be tracked from submission to hire",
      "Show job-specific interview preparation materials",
      "Show quizzes that help users test and validate their skills"
    ],
    takeaways: [
      "Job Agent Pro helps users prepare for a particular job role from start to finish.",
      "Users can find jobs posted on the platform, apply, and track application status.",
      "Users can prepare for interview processes and take quizzes to test role skills.",
      "Job Agent Pro operates on its own dedicated point-deduction system."
    ],
    faqs: [
      {
        question: "What is Job Agent Pro used for?",
        answer: "It is an integrated career engine that helps you prepare for a specific job role, prove your ability through quizzes, discover vacancies, and track your applications in one place."
      },
      {
        question: "Does Job Agent Pro consume points?",
        answer: "Job Agent Pro operates on a dedicated modular point system depending on the advanced features, quizzes, and role applications used."
      },
      {
        question: "Can I apply to multiple roles at the same time?",
        answer: "Yes! You can explore multiple role tracks and track all submitted applications simultaneously in your Job Agent dashboard."
      }
    ]
  },
  {
    id: 7,
    number: "VIDEO 7 OF 8",
    title: "AI Job Matcher",
    shortTitle: "AI Job Matcher",
    level: "Intermediate",
    duration: "1:13 mins",
    image: video7Img,
    videoUrl: video7Url,
    fallbackVideoUrl: '/assets/tutorials/AiJobMatcher.mp4',
    summary: "Explain how users can discover relevant jobs based on their profile and resume.",
    about: [
      "Finding the right role among hundreds of listings can be overwhelming. AI Job Matcher eliminates the guesswork by analyzing your complete profile and resume against live vacancies on UDEN.",
      "In this video, we trigger the matching engine and show how the AI parses your projects, skills, and certifications to score each role by alignment percentage.",
      "You'll see transparent breakdowns explaining why a job was recommended, which keywords matched, and what minor skills you could learn to become an exact 100% match. Keeping your profile fresh ensures you never miss top opportunities."
    ],
    covers: [
      "Open AI Job Matcher from the navigation",
      "Show the automated matching process and compatibility results",
      "Show how profile and resume information form the basis for matching",
      "Open one or more matched jobs and review matching breakdowns"
    ],
    takeaways: [
      "AI Job Matcher uses your Profile and Resume to find relevant job matches on the platform.",
      "Keeping your Profile and Resume updated ensures that job matching is always accurate and fresh.",
      "Transparent match percentages highlight which skills make you competitive for each role."
    ],
    faqs: [
      {
        question: "How does the AI determine my job matches?",
        answer: "The algorithm evaluates your skills, education, projects, certifications, and experience against the requirements and seniority specified in job postings."
      },
      {
        question: "Why is an updated profile so crucial for Job Matcher?",
        answer: "The matching engine continuously indexes your latest resume and profile additions. Adding new skills or certifications immediately surfaces new compatible jobs."
      },
      {
        question: "Can I adjust my job preferences or filters?",
        answer: "Yes. You can refine matches by location, work mode (remote/hybrid/on-site), role title, and salary expectations."
      }
    ]
  },
  {
    id: 8,
    number: "VIDEO 8 OF 8",
    title: "Complete UDEN Career Journey",
    shortTitle: "Complete UDEN Career Jo...",
    level: "Advanced",
    duration: "2:10 mins",
    image: video8Img,
    videoUrl: video8Url,
    fallbackVideoUrl: '/assets/tutorials/FinalVideoCareer.mp4',
    summary: "The whole platform as one journey — from profile and resume through matching, preparation, application and interview practice.",
    about: [
      "This final video connects everything together and follows one user through the entire UDEN journey: logging in, completing the Profile, building the resume, then analysing and improving it.",
      "From there the journey continues into job search — using AI Job Matcher to find suitable jobs and Job Agent Pro to prepare for the role, take quizzes and apply. Applications are then tracked through to the interview stage.",
      "The last steps are interview preparation for the specific job, completing an interview with AI Interview Coach, and reviewing the feedback to keep improving. The video shows how each part feeds the next: Profile information supports resume creation and other personalised features, Resume information is used by Resume Analysis and AI Job Matcher, Job Agent Pro carries preparation through to application and tracking, and AI Interview Coach closes the loop with practice and feedback."
    ],
    covers: [
      "Log in and complete your Profile",
      "Build your resume",
      "Analyse and improve the resume",
      "Find suitable jobs with AI Job Matcher",
      "Prepare for the role with Job Agent Pro and test your skills with quizzes",
      "Apply for a job and track the application",
      "Prepare for the specific interview and complete it with AI Interview Coach",
      "Review the feedback and keep improving"
    ],
    takeaways: [
      "Profile information supports resume creation and other personalised features.",
      "Resume information can be used by Resume Analysis and AI Job Matcher.",
      "Job Agent Pro supports job preparation, applications, tracking, quizzes and interview preparation.",
      "AI Interview Coach supports interview practice and feedback.",
      "UDEN is designed to support the user from career profile creation through job preparation and application."
    ],
    faqs: [
      {
        question: "Where should a new user start?",
        answer: "Start by completing your Profile with accurate education, projects, and skills. Then build your resume using the Resume Builder and run Resume Analysis to refine it."
      },
      {
        question: "Which features depend on my resume?",
        answer: "Resume Analysis, AI Job Matcher, and direct job applications directly rely on your resume data for accurate scoring and recruiter reviews."
      },
      {
        question: "How do the features fit together as one journey?",
        answer: "UDEN creates a complete loop: Profile -> Resume Builder -> Resume Analysis -> AI Job Matcher -> Job Agent Pro Preparation & Quizzes -> Job Application -> AI Interview Practice -> Placement."
      }
    ]
  }
];
