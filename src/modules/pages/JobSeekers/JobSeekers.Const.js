import { MoreHoriz } from "@mui/icons-material";
import { AppAssets } from "utils/consts/app_assets";
import { AppRoutes } from "utils/consts/routes";



const JobSeekersConst = {
    Banner:{
        title:"Work with Global Companies",
        subtitle:"Upskill to stay ahead and increase your chances",
        image:AppAssets.JobSeekersAssets.Banner,
        action:{
            name: "Join Now",
            href: AppRoutes.FIND_OPPORTUNITY,
        },
    },
    TrustedBrand:{
        desktop:AppAssets.JobSeekersAssets.TrustedBrand.Desktop,
        mobile:AppAssets.JobSeekersAssets.TrustedBrand.Mobile,
    },
    WorkFlow:{
        title:"How it works",
        images:{
            desktop:AppAssets.JobSeekersAssets.WorkFlow.Desktop,
            tablet:AppAssets.JobSeekersAssets.WorkFlow.Tablet,
            mobile:AppAssets.JobSeekersAssets.WorkFlow.Mobile,
        }
    },
    Features:{
        title:"Get access to a global pool of pre-assessed Talent for all your needs",
        features:[
            {
                title:"Work with global companies",
                description:"UDEN'S platform attracts Talent from across the world, offering a vast pool to the recruiters to identify and hire from and also a choice in terms of managing costs. The platform enables access to Talent not only in low-cost economies but also to a segment that might find it difficult to take up full-time engagement as in the case of working mothers or anyone else looking for a work-life balance.",
                image:AppAssets.JobSeekersAssets.Features.GlobalCompanies
            },
            {
                title:"Upskill to stay ahead",
                description:"UDEN platform helps you identify the skills which are in demand and also gaps in your profile vis-a-vis the current in-demand skills This helps you maximize your returns from the investments you make in time and money to upgrade yourself. The platform matches your profile with the opportunities available with companies for the best fitment and also helps you prepare better during the recruitment the global process.",
                image:AppAssets.JobSeekersAssets.Features.Upskill
            },
            {
                title:"Support to help you win",
                description:"UDEN increases your profile fitment and the chances of getting selected by the companies, by offering you suggestions to improve the presentation of your profile (resume) and through mentorship programs against premium job opportunities. This helps you prepare appropriately and put your best foot forward against the openings and stay ahead of other contenders.",
                image:AppAssets.JobSeekersAssets.Features.Support
            }
        ]
    },
    Testimonials:{
        title: "Testimonials",
    testimonials:[
        {
            id: 1,
            image: AppAssets.JobSeekersAssets.Testimonial.PalakJain,
            message: 'UDEN helped me with the interview preparation and mock interviews which helped build my confidence to tackle the interviewer’s questions. Thanks to their team I cracked Delloitte’s interview.',
            name: 'Palak Jain',
            company: ''
        },
        {
            id: 2,
            image: AppAssets.JobSeekersAssets.Testimonial.PankajSharma,
            message: 'As a fresher, it was difficult to find jobs. But the team at UDEN guided me to upskill, helped me with the interview process and connected me to the Company directly for the interview. I finally got the offer and now I am hopeful for a bright future.',
            name: 'Pankaj Sharma',
            company: ''
        }
    ]
 
    },
    KnowMore:{
        title: "Discover a World of Opportunities and Find Your Dream Job Today. With Our Expert Guidance, Take Your Career to New Heights and Achieve Your Full Potential.",
        buttonText: "Join Now",
        href: AppRoutes.FIND_OPPORTUNITY,
        icon: <MoreHoriz/>
    }
}

export default JobSeekersConst