import { AppRoutes } from "./routes"

const HeaderStrings = {
    HOME:"Home",
    COMPANIES:"Companies",
    JOB_SEEKERS:"Job Seekers",
    UPSKILLING_PARTNERS:"Upskilling partners",
    ABOUT_US:"About Us",
}

const FooterStrings = {
    LINKS:[
        [
            {
                NAME:"Blogs",
                LINK:AppRoutes.BLOGS,
                isDisabled:false,
            },
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
    FOOTER_COPYRIGHT:"© 2021 | Digverve Solutions Pvt. Ltd. All Rights Reserved.",
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

const ButtonStrings = {
    SIGNUP_SIGNIN:"SignUp / SignIn",
}


const Liks = {
    PLAY_STORE_APP:"https://play.google.com/store/apps/details?id=com.digverve.uden",
    UDEN_FACEBOOK:"https://www.facebook.com/UnifiedDevelopmentAndEmploymentNetworkk",
    UDEN_INSTAGRAM:"https://instagram.com/uden.tech?utm_medium=copy_link",
    UDEN_LINKEDIN:"https://www.linkedin.com/company/uden-professional-s-permanent",
}

export const AppStrigs = {
    HeaderStrings,
    ButtonStrings,
    Liks,
    FooterStrings
}