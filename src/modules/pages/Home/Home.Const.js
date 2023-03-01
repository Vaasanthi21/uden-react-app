import { AppAssets } from "../../../utils/consts/app_assets"
import { AppRoutes } from "../../../utils/consts/routes"




const SliderItems = [
    {title:"Find The Talent You Need",
     subtitle:"From The Global Pool",
     points:["Ai Powered","Pre Assessed","Curated Programs"],
     action:{
        name:"Find Talent",
        href:AppRoutes.FIND_TALENT
     },
     image:AppAssets.HomeAssets.HOMESLIDER_FIND_TALENT
    },
    {title:"Get Access To Global Companies",
     subtitle:"To Realize Your Dream",
     points:["Get Up-Skilled","Mentored","Enhanced Resume"],
     action:{
        name:"Find Opportunities",
        href:AppRoutes.FIND_OPPORTUNITY
     },
     image:AppAssets.HomeAssets.HOMESLIDER_GET_ACCESS
    },
    {title:"Up-Skill Talent And Bring To Them A World",
     subtitle:"Of Opportunities With Global Companies",
     points:["Up-Skill","Mentorship","Talent Readiness"],
     action:{
        name:"Become A Partner",
        href:AppRoutes.BECOME_PARTNER
     },
     image:AppAssets.HomeAssets.HOMESLIDER_UPSKILL
    }
];

const TrustedBrand = {
    TrustedBrand:AppAssets.HomeAssets.TRUSTED_BRAND,
    TrustedBrandMobile:AppAssets.HomeAssets.TRUSTED_BRAND_MOBILE,
};

const WorkFlow = {
    Company:{
        Desktop:AppAssets.HomeAssets.COMPANY_WORKFLOW,
        Tablet:AppAssets.HomeAssets.COMPANY_WORKFLOW_TABLET,
        Mobile:AppAssets.HomeAssets.COMPANY_WORKFLOW_MOBILE,
    },
    JobSeeker:{
        Desktop:AppAssets.HomeAssets.JOB_SEEKER_WORKFLOW,
        Tablet:AppAssets.HomeAssets.JOB_SEEKER_WORKFLOW_TABLET,
        Mobile:AppAssets.HomeAssets.JOB_SEEKER_WORKFLOW_MOBILE,
    },
    title:"How it works",
    JobSeekersButtonText:"Job Seekers",
    CompanyButtonText:"Companies",
    
}

const Features = {
    title:"Get access to a global pool of pre-assessed Talent for all your needs",
    features:[
        {
            title:"Talent Development",
            image:AppAssets.HomeAssets.HOME_FEATURES.TALENT_DEVELOPMENT,
            description:"UDEN'S platform offers jobseekers a platform to assess themselves on the most in-demand skills and in partnership with the upskilling partners, facilitate jobseekers in closing gaps if any,As a trusted partner to a large number of global organizations, UDEN offers a choice to the jobseekers and helps them find a job that best matches their aspirations and profile"
        },
        {
            title:"Best Talent Fit",
            image:AppAssets.HomeAssets.HOME_FEATURES.BEST_TALENT_FIT,
            description:"UDEN's AI-powered matching ensures you get the Talent you require and when you require it.UDEN's50 customized and curated programs help you with a planned and predictable intake of Talent, which works out cost-effectively and helps you plan your business better.Access to the vast pool of pre-assessed Talent pool offers you a choice - both in terms of the right fitment and affordability"
        },
        {
            title:"Curated Programs",
            image:AppAssets.HomeAssets.HOME_FEATURES.CURATED_PROGRAM,
            description:"UDEN believes there is always Talent out there for every skill you need and for those which are very specific and are not easily available in the pool, UDEN works with a large number of trusted upskilling partners to ensure those skills gaps can be closed quickly.The platform facilitates the jobseekers who choose to get upskilled with our partners to get access to the global companies UDEN works with closely to meet all their Talent needs"
        },
        {
            title:"Al Powered Match",
            image:AppAssets.HomeAssets.HOME_FEATURES.AI_POWERED_MATHC,
            description:"UDEN'S platform facilitates job seekers to invest in the right upskilling programs. The continuously improving jobseeker's profile and the Talent needs from the companies are matched meticulously using the AI-powered engine which is not possible otherwise"
        },
    ],
    bottom:{
        title:"In-demand Skills",
        description:"In-demand skills The platform regularly identifies the skills where the gap between the market demand and the availability begins to widen and accordingly, channelizes all the efforts to Talent address the unmet demand. The Talent pool is swelling with",
        image:AppAssets.HomeAssets.HOME_FEATURES.IN_DEMAND_SKILLS
    }
    
}

const TrustedBy = {
    certificate:AppAssets.HomeAssets.HOME_TRUSTED_BY.CERTIFICATE,
    aws:AppAssets.HomeAssets.HOME_TRUSTED_BY.AWS
}

export const HomeConst = {
    SliderItems,
    TrustedBrand,
    WorkFlow,
    Features,
    TrustedBy

}