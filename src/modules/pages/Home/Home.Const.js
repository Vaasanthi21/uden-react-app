import { AppAssets } from "../../../utils/consts/app_assets"
import { AppRoutes } from "../../../utils/consts/routes"




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
    }
];

const TrustedBrand = {
    desktop:AppAssets.HomeAssets.TRUSTED_BRAND.DESKTOP,
    mobile:AppAssets.HomeAssets.TRUSTED_BRAND.MOBILE,
};

const WorkFlow = {
    Company:{
        Desktop:AppAssets.HomeAssets.WORKFLOW.COMPANY.DESKTOP,
        Tablet:AppAssets.HomeAssets.WORKFLOW.COMPANY.TABLET,
        Mobile:AppAssets.HomeAssets.WORKFLOW.COMPANY.MOBILE,
    },
    JobSeeker:{
        Desktop:AppAssets.HomeAssets.WORKFLOW.JOB_SEEKER.DESKTOP,
        Tablet:AppAssets.HomeAssets.WORKFLOW.JOB_SEEKER.TABLET.DESKTOP,
        Mobile:AppAssets.HomeAssets.WORKFLOW.JOB_SEEKER.MOBILE,
    },
    title:"How it works",
    JobSeekersButtonText:"Job Seekers",
    CompanyButtonText:"Companies",
    
}

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
    
}

const TrustedBy = {
    certificate:AppAssets.HomeAssets.TRUSTED_BY.CERTIFICATE,
    aws:AppAssets.HomeAssets.TRUSTED_BY.AWS
}

const Testimonial = {
    title: "Testimonials",
    testimonials:[
        {
            id: 1,
            image: AppAssets.HomeAssets.TESTIMONIAL.PALAK_JAIN,
            message: 'UDEN helped me with the interview preparation and mock interviews which helped build my confidence to tackle the interviewer’s questions. Thanks to their team I cracked Delloitte’s interview.',
            name: 'Palak Jain',
            company: ''
        },
        {
            id: 2,
            image: AppAssets.HomeAssets.TESTIMONIAL.PANKAJ_SHARMA,
            message: 'As a fresher, it was difficult to find jobs. But the team at UDEN guided me to upskill, helped me with the interview process and connected me to the Company directly for the interview. I finally got the offer and now I am hopeful for a bright future.',
            name: 'Pankaj Sharma',
            company: ''
        }
    ]

}

const StudentPlaced = {
    title: 'Student Placed',
    count:"2500"
}

export const HomeConst = {
    SliderItems,
    TrustedBrand,
    WorkFlow,
    Features,
    TrustedBy,
    Testimonial,
    StudentPlaced

}