import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';
import Home from './modules/pages/Home/Home';
import Layout from './modules/components/layout/Layout';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
