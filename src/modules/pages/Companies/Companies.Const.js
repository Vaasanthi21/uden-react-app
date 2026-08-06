import { MoreHoriz } from "@mui/icons-material";
import { AppAssets } from "utils/consts/app_assets";
import { AppRoutes } from "utils/consts/routes";



const CompaniesConst = {
    Banner:{
        title:"Get Access to The Pool",
        subtitle:"To, find the Talent you need, when you need and at the cost you desire",
        image:AppAssets.CompanyAssets.Banner,
        action:{
            name:"Get Started",
            href: AppRoutes.FIND_TALENT,
        },
    },
    TrustedBrand:{
        desktop:AppAssets.CompanyAssets.TrustedBrand.Desktop,
        mobile:AppAssets.CompanyAssets.TrustedBrand.Mobile,
    },
    WorkFlow:{
        title:"How it works",
        images:{
            desktop:AppAssets.CompanyAssets.WorkFlow.Desktop,
            tablet:AppAssets.CompanyAssets.WorkFlow.Tablet,
            mobile:AppAssets.CompanyAssets.WorkFlow.Mobile,
        }
    },
    Features:{
        title:"Get access to a global pool of pre-assessed Talent for all your needs",
        image:AppAssets.CompanyAssets.Features.GlobalPool,
        features:[
            {
                title:"Pre-assessed Talent",
                description:"UDEN'S platform offers job seekers a platform to assess themselves on the most in-demand skills and an opportunity to close gaps, if any, by upskilling themselves from a host of options available on the platform itself. The platform keeps track of all the skills acquired, gets assessed or certified on, and improves the profile progressively. This enables a precise match based on data and what the recruiters could be looking for in terms of skills.",
                image:AppAssets.CompanyAssets.Features.PreAssessedTalent
            },
            {
                title:"Global Talent Pool",
                description:"UDEN'S platform attracts Talent from across the world, offering a vast pool to the recruiters to identify and hire from and also a choice in terms of managing costs. The platform enables access to Talent not only in low-cost economies but also to a segment that might find it difficult to take up full-time engagement as in the case of working mothers or anyone else looking for a work-life balance.",
                image:AppAssets.CompanyAssets.Features.GlobalTalentPool
            },
            {
                title:"Curated Programs",
                description:"For your specific requirements, not easily available in the market. UDEN works with you closely to design Curated programs to upskill candidates which meet other requirements. This helps recruiters to plan their Talent intake and ensure that the business does not get impacted for want of skilled resources. UDEN works with a large number of trusted upskilling partners to ensure those skill gaps can be closed quickly.",
                image:AppAssets.CompanyAssets.Features.CuratedProgram
            },
            {
                title:"In-demand and domain skills",
                description:"The platform identifies the skills which are Currently in demand and Curatesit pools accordingly. For your specific needs and domain skills, UDEN addresses them through curated programs.",
                image:AppAssets.CompanyAssets.Features.IndemandSkill
            }
        ]
    },
    Testimonials:{
        title: "Testimonials",
        testimonials:[
            {
                id: 1,
                image: AppAssets.CompanyAssets.Testimonial.TinaSingh,
                message: 'We have been working closely with the team at UDEN for many years now. From the scoping of our requirements to the completion of hiring, the team has consistently provided prompt and quality services. UDEN takes care of the small, but important details including candidate vetting, interview documents and then the offer itself. I look forward to work with their team immensely for many years to follow.',
                name: 'Tina Singh',
                designation:'Admin Manager',
                company: 'Bravvura Digital Pvt. Ltd.'
            },
            {
                id: 2,
                image: AppAssets.CompanyAssets.Testimonial.PoonamDevi,
                message: 'Working with UDEN and the entire team has been a journey which is smooth and professional. They have always helped us find right resources for our team in all right manner. Thank you team for all the support always.',
                name: 'Poonam Devi',
                designation:'Senior HR Recruiter',
                company: 'bluCognition Pvt Ltd'
            }
        ]   
    },
    KnowMore:{
        title: "Access Top Talent and Build Your Dream Team with Ease - Let Us Help You Find the Right Fit for Your Company!",
        buttonText: "Get Started",
        href: AppRoutes.FIND_TALENT,
        icon: <MoreHoriz/>
    }
}

export default CompaniesConst