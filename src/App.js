import React from 'react';
import { Routes, Route, /*Outlet, Link*/ } from "react-router-dom";


import './App.css';
import { AppRoutes } from './utils/consts/routes';
import Layout from './modules/components/layout/Layout';
import Home from './modules/pages/Home/Home';
import Companies from './modules/pages/Companies/Companies';
import JobSeekers from './modules/pages/JobSeekers/JobSeekers';
import UpskillingPartners from './modules/pages/UpskillingPartners/UpskillingPartners';
import AboutUs from './modules/pages/AboutUs/AboutUs';
import ContactUs from './modules/pages/ContactUs/ContactUs';
import KnowMoreForm from './modules/pages/KnowMoreForm/KnowMoreForm';
import PrivacyPolicy from './modules/pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './modules/pages/TermsAndConditions/TermsAndConditions';
import HRServices from './modules/pages/HRServices/HRServices';
import Blogs from './modules/pages/Blogs/Blogs';
import { Blog } from './modules/pages/Blogs/childrens/Blog/Blog';
import FlutterApp from './modules/pages/FlutterApp/FlutterApp';
import Error404 from './modules/pages/404/404';



function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />

          <Route path={AppRoutes.APP+"/*"} element={<FlutterApp />} />

          <Route path={AppRoutes.COMPANIES} element={<Companies />} />
          <Route path={AppRoutes.JOB_SEEKERS} element={<JobSeekers />} />
          <Route path={AppRoutes.UPSKILLING_PARTNERS} element={<UpskillingPartners />} />
          <Route path={AppRoutes.HR_SERVICES} element={<HRServices />} />

            <Route path={AppRoutes.BLOGS} element={<Blogs/>}/>
            <Route path={AppRoutes.BLOGS+"/:id"}  element={<Blog/>} />

          <Route path={AppRoutes.ABOUT_US} element={<AboutUs />} />
          <Route path={AppRoutes.COTACT_US} element={<ContactUs />} />
          <Route path={AppRoutes.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={AppRoutes.TERMS} element={<TermsAndConditions />} />

          <Route path={AppRoutes.FIND_TALENT} element={<KnowMoreForm />} />
          <Route path={AppRoutes.BECOME_PARTNER} element={<KnowMoreForm />} />
          <Route path={AppRoutes.FIND_OPPORTUNITY} element={<KnowMoreForm />} />
          <Route path={AppRoutes.HR_SERVICE_JOIN} element={<KnowMoreForm />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
