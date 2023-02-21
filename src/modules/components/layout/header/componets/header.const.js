import { AppRoutes } from "../../../../../utils/consts/routes";
import { AppStrigs } from "../../../../../utils/consts/strings";
import { Home,CorporateFare,Work,Upgrade,Groups } from '@mui/icons-material';


const tabNames = AppStrigs.HeaderStrings;
const Routes = [AppRoutes.HOME,AppRoutes.COMPANIES, AppRoutes.JOB_SEEKERS, AppRoutes.UPSKILLING_PARTNERS, AppRoutes.ABOUT_US];
const Names = [tabNames.HOME,tabNames.COMPANIES, tabNames.JOB_SEEKERS, tabNames.UPSKILLING_PARTNERS, tabNames.ABOUT_US];
const Icons = [<Home/>,<CorporateFare/>, <Work/>, <Upgrade/>, <Groups/>];

const Tabs = {
    Routes,
    Names,
    Icons
}


export const HeaderConst = {
    Tabs
}