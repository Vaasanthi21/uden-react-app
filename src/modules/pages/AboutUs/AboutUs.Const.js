import { AppAssets } from "../../../utils/consts/app_assets";



const AboutUsConst = {
    Banner:{    
        title:"About UDEN",
        description:'To create an AI/ML powered ecosystem where the right talent gets guidance to access World\'s best opportunities. The platform facilitates an algorithmic fitment between the profile of the Talent and what global Companies require to meet their business demand. UDEN platform ensures all companies get deserving and aspiring talents for their teams with a minimum effort toward the recruitment process. It helps minimize the cost of onboarding with our "Hire only Trained " model through process, IP\'s. UDEN platform serves as an unbiased and neutral agency to rate/review and guide training and upskilling institutions based on industry requirements. It will be the one-stop solution for all job and course-related suggestions for job seekers and students. This initiative also provides us a vehicle to do our bit to create a better world for tomorrow. The platform helps contribute to sustainability by promoting remote working and connecting global talent with businesses across the world. The reduced travel and local commute help reduce the carbon footprint. The platform will act as a means for the Talent to realize their dreams and meet their aspirations. It will also open up the world of opportunities to the talent in lier-2/ 3 cities across the globe, which also increases the availability of Talent to the companies.',
        image:AppAssets.AboutUsAssets.BANNER
    },
    TrustedBy:{
        title:"Trusted By",
        certificate:AppAssets.AboutUsAssets.TRUSTED_BY.CERTIFICATE,
        aws:AppAssets.AboutUsAssets.TRUSTED_BY.AWS
    },
    LeadershipTeam:{
        title:"The Leadership Team",
        subtitle:"The Leadership Team Team with a belief and passion to make you successful",
        leaders:[
            {
                id: 1,
                name: "Jay Bhasker",
                designation: "Chief Executive Officer and Founder",
                image: AppAssets.AboutUsAssets.LEADERSHIP_TEAM.CEO,
                linkedinUrl: "https://www.linkedin.com/in/jay-bhaskar-3b231942/",
                message:undefined,
              },
              {
                id: 2,
                name: "Pratham Jain",
                designation: "Chief Operations Officer and Founder",
                image: AppAssets.AboutUsAssets.LEADERSHIP_TEAM.COO,
                linkedinUrl: "https://www.linkedin.com/in/pratham-jain/",
                message:undefined,
              },
              {
                id: 3,
                name: "Ranjan Tayal",
                designation: "Chief Strategy Officer and Board Advisor",
                image: AppAssets.AboutUsAssets.LEADERSHIP_TEAM.CSO,
                linkedinUrl: "https://www.linkedin.com/in/ranjantayalofficial/",
                message:undefined,
              },
              {
                id: 4,
                name: "Vivek Vinayak Purekar",
                designation: "Chief Customer Success Officer and Co-Founder",
                image: AppAssets.AboutUsAssets.LEADERSHIP_TEAM.CCO,
                linkedinUrl: "https://www.linkedin.com/in/vivekpurekar/",
                message:undefined,
              },
        ]
    },
    AdvisoryBoard:{
        title: "Advisor &  Angel Investor",
        advisor:[
            {
                id: 1,
                name: "TR Anand",
                designation:"Advisor and Angel Investor",
                image: AppAssets.AboutUsAssets.ADVISORY_BOARD.TR_ANAND,
                linkedinUrl: "https://www.linkedin.com/in/t-r-anand-565a1816/",
            },
    ]
 
    },
}

export default AboutUsConst