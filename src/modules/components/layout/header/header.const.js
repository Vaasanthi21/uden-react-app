import { AppRoutes } from "../../../../utils/consts/routes";
import { CorporateFare,Work,Upgrade,Groups, Diversity3 } from '@mui/icons-material';


const HeaderTabs = {
    HOME:"Home",
    COMPANIES:"Hire from us",
    JOB_SEEKERS:"Job Seekers",
    UPSKILLING_PARTNERS:"Upskilling partners",
    HR_SERVICES:"HR Services",
    ABOUT_US:"About Us",
}
const ButtonStrings = {
    SIGNUP_SIGNIN:"SignUp / SignIn",
}
const Routes = [AppRoutes.COMPANIES, AppRoutes.JOB_SEEKERS, AppRoutes.UPSKILLING_PARTNERS, AppRoutes.HR_SERVICES,AppRoutes.ABOUT_US];
const Names = [HeaderTabs.COMPANIES, HeaderTabs.JOB_SEEKERS, HeaderTabs.UPSKILLING_PARTNERS,HeaderTabs.HR_SERVICES, HeaderTabs.ABOUT_US];
const Icons = [<CorporateFare/>, <Work/>, <Upgrade/>,<Diversity3/>, <Groups/>];
const Badge = [null,null,null,"New",null];


const Tabs = {
    Routes,
    Names,
    Icons,
    Badge
}


export const HeaderConst = {
    Tabs,
    ButtonStrings
}










