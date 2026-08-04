import { AppRoutes } from "../../../../utils/consts/routes";



export const FooterConst = {
    LINKS:[
        [
            {
                NAME:"For Companies",
                LINK:AppRoutes.COMPANIES,
                isDisabled:false,
            },
            {
                NAME:"For Job Seekers",
                LINK:AppRoutes.JOB_SEEKERS,
                isDisabled:false,
            },
            {
                NAME:"For Parters",
                LINK:AppRoutes.UPSKILLING_PARTNERS,
                isDisabled:false,
            },
            {
                NAME:"HR Services",
                LINK:AppRoutes.HR_SERVICES,
                isDisabled:false,

            }
        ],
        [
            {
                NAME:"Terms and Conditions",
                LINK:AppRoutes.TERMS,
                isDisabled:false,
            },
            {
                NAME:"Privacy Policy",
                LINK:AppRoutes.PRIVACY,
                isDisabled:false,
            },
            {
                NAME:"Contact Us",
                LINK:AppRoutes.COTACT_US,
                isDisabled:false,
            },
            {
                NAME:"About UDEN",
                LINK:AppRoutes.ABOUT_US,
                isDisabled:false,
            }

        ],
        [
            {
                NAME:"Blogs",
                LINK:AppRoutes.BLOGS,
                isDisabled:false,
            },
            {
                NAME:"Careers",
                LINK:AppRoutes.CAREERS,
                isDisabled:true,
            },
            {
                NAME:"Community Forum",
                LINK:AppRoutes.COMMUNITY_FORUM,
                isDisabled:true,
            },
            {
                NAME:"Learning Lab",
                LINK:AppRoutes.LEARNING_LAB,
                isDisabled:true,
            }

        ],
    ],
    FOOTER_COPYRIGHT:`© ${new Date().getFullYear()} | Digverve Solutions Pvt. Ltd. All Rights Reserved.`,
    BOTTOM_LINKS:[
        {
            NAME:"Terms and Conditions",
            LINK:AppRoutes.TERMS,
        },
        {
            NAME:"Site Map",
            LINK:AppRoutes.SITE_MAP,
        },
        {
            NAME:"Privacy Policy",
            LINK:AppRoutes.PRIVACY,
        }

    ],
}


