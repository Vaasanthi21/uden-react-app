import React from 'react';
import { Routes, Route, /*Outlet, Link*/ } from "react-router-dom";


import './App.css';
import { AppRoutes } from './utils/consts/routes';
import Layout from './modules/components/layout/Layout';
import Home from './modules/pages/Home/Home';
import Companies from './modules/pages/Companies/Companies';
import JobSeekers from './modules/pages/JobSeekers/JobSeekers';
import UpskillingPartners from './modules/pages/UpskillingPartners/UpskillingPartners';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path={AppRoutes.COMPANIES} element={<Companies />} />
          <Route path={AppRoutes.JOB_SEEKERS} element={<JobSeekers />} />
          <Route path={AppRoutes.UPSKILLING_PARTNERS} element={<UpskillingPartners />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
