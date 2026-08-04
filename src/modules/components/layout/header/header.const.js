import React from 'react';
import { AppRoutes } from "../../../../utils/consts/routes";
import { CorporateFare, Work, Upgrade, Groups, ContactPage, People, AccountBalance } from '@mui/icons-material';

const HeaderTabs = {
    HOME: "Home",
    COMPANIES: "Hire from us",
    JOB_SEEKERS: "Career Aspirants",
    HR_SERVICES: "HR Services",
    CAMPUS_PLACEMENTS: "Campus Placements",
    GOVERNMENT: "Government",
    ABOUT_US: "About Us",
};

const ButtonStrings = {
    SIGNUP_SIGNIN: "SignUp / SignIn",
};

const Routes = [
    AppRoutes.COMPANIES, 
    AppRoutes.JOB_SEEKERS, 
    AppRoutes.HR_SERVICES,
    AppRoutes.CAMPUS_PLACEMENTS,
    AppRoutes.GOVERNMENT,
    AppRoutes.ABOUT_US
];

const Names = [
    HeaderTabs.COMPANIES, 
    HeaderTabs.JOB_SEEKERS, 
    HeaderTabs.HR_SERVICES,
    HeaderTabs.CAMPUS_PLACEMENTS,
    HeaderTabs.GOVERNMENT,
    HeaderTabs.ABOUT_US
];

const Icons = [
    <CorporateFare key="comp" />, 
    <Work key="work" />, 
    <Diversity3 key="hr" />, 
    <Groups key="campus" />,
    <AccountBalance key="gov" />,
    <ContactPage key="about" />
];

const Badge = [null, null, "New", null, null, null];

const Tabs = {
    Routes,
    Names,
    Icons,
    Badge
};

export const HeaderConst = {
    Tabs,
    ButtonStrings
};