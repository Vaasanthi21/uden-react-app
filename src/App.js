import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

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
import AuthSignupPortal from './modules/pages/KnowMoreForm/components/AuthSignupPortal';
import FindOpportunityPage from './modules/pages/KnowMoreForm/components/FindOpportunityPage';
import PrivacyPolicy from './modules/pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './modules/pages/TermsAndConditions/TermsAndConditions';
import HRServices from './modules/pages/HRServices/HRServices';
import Blogs from './modules/pages/Blogs/Blogs';
import { Blog } from './modules/pages/Blogs/childrens/Blog/Blog';
import FlutterApp from './modules/pages/FlutterApp/FlutterApp';
import Error404 from './modules/pages/404/404';
import Campus from './modules/pages/CampusPlacement/campus';
import Benefits from './modules/pages/CampusPlacement/benefits';
import GovernmentPartnership from './modules/pages/Government/GovernmentPartnership';
import FaqPage from './modules/pages/Faq/Faq';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: '#DA532C' }}>UDEN.tech — Component Loading Error</h2>
          <p style={{ color: '#64748B' }}>{this.state.error && this.state.error.toString()}</p>
          <button 
            style={{ background: '#DA532C', color: '#FFF', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />

            <Route path={AppRoutes.APP+"/*"} element={<FlutterApp />} />

            <Route path={AppRoutes.COMPANIES} element={<Companies />} />
            <Route path={AppRoutes.JOB_SEEKERS} element={<JobSeekers />} />
            <Route path={AppRoutes.UPSKILLING_PARTNERS} element={<UpskillingPartners />} />
            <Route path={AppRoutes.HR_SERVICES} element={<HRServices />} />
            <Route path={AppRoutes.GOVERNMENT} element={<GovernmentPartnership />} />
            <Route path={AppRoutes.FAQ} element={<FaqPage />} />

            <Route path={AppRoutes.BLOGS} element={<Blogs/>}/>
            <Route path={AppRoutes.BLOGS+"/:id"}  element={<Blog/>} />
          
            <Route path={AppRoutes.ABOUT_US} element={<AboutUs />} />
            <Route path={AppRoutes.CAMPUS_PLACEMENTS} element={<Campus />} />
            <Route path={AppRoutes.FOR_CAMPUS} element={<Campus />} />
            <Route path={AppRoutes.FOR_STUDENTS} element={<JobSeekers />} />
            <Route path={AppRoutes.COTACT_US} element={<ContactUs />} />
            <Route path={AppRoutes.PRIVACY} element={<PrivacyPolicy />} />
            <Route path={AppRoutes.TERMS} element={<TermsAndConditions />} />

            {/* Persona Lead Generation Forms */}
            <Route path={AppRoutes.FIND_TALENT} element={<FindTalentPage />} />
            <Route path="/campus-partner-form" element={<CampusPartnerFormPage />} />
            <Route path={AppRoutes.HR_SERVICE_JOIN} element={<HRServicesJoinPage />} />
            <Route path="/government-partner-form" element={<GovernmentPartnerFormPage />} />

            {/* Auth / Login / Signup Unified Routes */}
            <Route path="/login" element={<AuthSignupPortal />} />
            <Route path="/log_in" element={<AuthSignupPortal />} />
            <Route path="/signin" element={<AuthSignupPortal />} />
            
            <Route path="/signup" element={<AuthSignupPortal />} />
            <Route path="/sign_up" element={<AuthSignupPortal />} />
            <Route path="/register" element={<AuthSignupPortal />} />

            <Route path={AppRoutes.BECOME_PARTNER} element={<CampusPartnerFormPage />} />
            <Route path={AppRoutes.FIND_OPPORTUNITY} element={<FindOpportunityPage />} />
            <Route path="/find_opportunity" element={<FindOpportunityPage />} />
            <Route path="/lead-generation" element={<FindOpportunityPage />} />
            <Route path="/lead_generation" element={<FindOpportunityPage />} />
            <Route path="/leadgeneration" element={<FindOpportunityPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;
