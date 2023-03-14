import { MoreHoriz } from "@mui/icons-material";
import { AppAssets } from "../../../utils/consts/app_assets";
import { AppRoutes } from "../../../utils/consts/routes";



const UpskillingPartnersConst = {
    Banner:{    
        title:"Become an upskilling",
        subtitle:"and training provider of choice. Bring to your students opportunies with global Companies",
        image:AppAssets.UpskillingPartnersAssets.Banner,
        action:{
            name:"Partner with Us",
            href:AppRoutes.BECOME_PARTNER
        },
    },
    TrustedBrand:{
        desktop:AppAssets.JobSeekersAssets.TrustedBrand.Desktop,
        mobile:AppAssets.JobSeekersAssets.TrustedBrand.Mobile,
    },
    Features:{
        title:"Help your learners meet their aspirations by upskilling them for a world of opportunitites",
        features:[
            {
                title:"Increase reach for your learners",
                description:"By enrolling your learner and training participants on the UDEN platform, you provide them visibility into all the opportunities with global companies and be a catalyst in getting them employment Higher placements through your institution helps you increase your business with referrals.",
                image:AppAssets.UpskillingPartnersAssets.Features.IncreaseReach
            },
            {
                title:"Curated Programs",
                description:"Based on your area of specialization and available bandwidth, we work with you and our strategic clients to design curated programs exclusively for them. This helps learners to get upskilled and get an opportunity to get employment with our client, subject to the learner completing their upskilling programs successfully and per the requirements of the client.",
                image:AppAssets.UpskillingPartnersAssets.Features.CuratedPrograms
            }
        ]
    },
    Testimonials:{
        title: "Testimonials",
    testimonials:[
        {
            id: 1,
            image: AppAssets.UpskillingPartnersAssets.Testimonial.NohubAcademy,
            message: "NoHub Academy is a platform that provides live training on Full Stack Development (MERN). It is started by industry mentors. The curriculum is industry vetted in order to provide the relevant content to the students so that they are able to implement that knowledge into real-life projects/interviews. The trainers are really experienced and have been working in top product-based companies like AMAZON, Cure.fit, Innovaccer, Zeta, etc.",
            name: 'Nohub Academy',
            company: 'Nohub Academy',
            link: 'https://nohub.co/'
        }
    ]
 
    },
    KnowMore:{
        title: "Transform Your skills and Take Charges of your Future Career Growth",
        buttonText: "Partner with Us",
        href: AppRoutes.BECOME_PARTNER,
        icon: <MoreHoriz/>
    }
}

export default UpskillingPartnersConst