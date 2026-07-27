import React from 'react';
import { HomeStyles as styles } from './styles/Home.Styles';
import Slider from './components/Slider';
import HeroSearchWidget from './components/HeroSearchWidget';
import MultiJobSearch from './components/MultiJobSearch';
import CompanyPrepExplorer from './components/CompanyPrepExplorer';
import RecruiterVettedHub from './components/RecruiterVettedHub';
import MetricsTicker from './components/MetricsTicker';
import CareerCalculator from './components/CareerCalculator';
import HomeTrustedBrand from './components/TrustedBrand';
import HomeTestimonial from './components/Testimonial';
import StudentPlaced from './components/StudentPlaced';
import FaqPage from '../Faq/Faq';

const Home = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Slider & Quick Search Widget */}
      <Slider autoplay={false} css={styles.slider} />
      <HeroSearchWidget />

      {/* 2. Multi-Job Board Search Engine (100,000+ Jobs Aggregated) */}
      <div style={{ padding: '80px 0', background: '#FFFDF7', borderBottom: '1px solid #FEF5D8' }}>
        <MultiJobSearch />
      </div>

      {/* 3. Company-Specific Round-by-Round Prep, PYQs & AI Video Interview Simulator */}
      <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <CompanyPrepExplorer />
      </div>

      {/* 4. Key Live Platform Metrics */}
      <MetricsTicker />

      {/* 5. Enterprise Recruiter Pre-Vetted AI Video Talent Hub */}
      <div style={{ padding: '80px 0', background: '#FFFDF7', borderTop: '1px solid #FEF5D8' }}>
        <RecruiterVettedHub />
      </div>

      {/* 6. Trust Logos Bar */}
      <div style={{ padding: '50px 0', background: '#FFFFFF' }}>
        <HomeTrustedBrand css={styles.trustedBrand} />
      </div>

      {/* 7. Interactive Career & Salary Growth Calculator */}
      <div style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <CareerCalculator />
      </div>

      {/* 8. Success Stories & Testimonials */}
      <div style={{ padding: '80px 0', background: '#FEF5D8' }}>
        <HomeTestimonial css={styles.testimonial} />
      </div>

      {/* 9. Tailored Solutions & Stakeholder FAQ Section (Matching Screenshot 1) */}
      <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <FaqPage />
      </div>

      {/* 10. Bottom CTA Banner */}
      <StudentPlaced css={styles.studentPlaced} />
    </div>
  );
};

export default Home;
