import React from 'react';
import { HomeStyles as styles } from './styles/Home.Styles';
import Slider from './components/Slider';
import HeroSearchWidget from './components/HeroSearchWidget';
import MultiJobSearch from './components/MultiJobSearch';
import CompanyPrepExplorer from './components/CompanyPrepExplorer';
import RecruiterVettedHub from './components/RecruiterVettedHub';
import ReferralCommunityHub from './components/ReferralCommunityHub';
import MetricsTicker from './components/MetricsTicker';
import CareerCalculator from './components/CareerCalculator';
import HomeTrustedBrand from './components/TrustedBrand';
import HomeTestimonial from './components/Testimonial';
import StudentPlaced from './components/StudentPlaced';
import FaqPage from '../Faq/Faq';
import ScrollReveal from '../../components/layout/ScrollReveal';

const Home = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Slider */}
      <Slider autoplay={false} css={styles.slider} />
      <ScrollReveal delay={150}>
        <HeroSearchWidget />
      </ScrollReveal>

      {/* 2. Multi-Job Board Search Engine (100,000+ Jobs Aggregated) */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFDF7', borderBottom: '1px solid #FEF5D8' }}>
          <MultiJobSearch />
        </div>
      </ScrollReveal>

      {/* 3. Company-Specific Round-by-Round Prep, PYQs & AI Video Interview Simulator */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <CompanyPrepExplorer />
        </div>
      </ScrollReveal>

      {/* 4. Key Live Platform Metrics */}
      <ScrollReveal threshold={0.15}>
        <MetricsTicker />
      </ScrollReveal>

      {/* 5. Enterprise Recruiter Pre-Vetted AI Video Talent Hub */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFDF7', borderTop: '1px solid #FEF5D8' }}>
          <RecruiterVettedHub />
        </div>
      </ScrollReveal>

      {/* 6. Referral & Peer Learning Community Hub (Get Paid While Job Searching) */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <ReferralCommunityHub />
        </div>
      </ScrollReveal>

      {/* 7. Trust Logos Bar */}
      <ScrollReveal threshold={0.15}>
        <div style={{ padding: '50px 0', background: '#FFFFFF' }}>
          <HomeTrustedBrand css={styles.trustedBrand} />
        </div>
      </ScrollReveal>

      {/* 8. Interactive Career & Salary Growth Calculator */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#F8FAFC' }}>
          <CareerCalculator />
        </div>
      </ScrollReveal>

      {/* 9. Success Stories & Testimonials */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FEF5D8' }}>
          <HomeTestimonial css={styles.testimonial} />
        </div>
      </ScrollReveal>

      {/* 10. Tailored Solutions & Stakeholder FAQ Section */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <FaqPage />
        </div>
      </ScrollReveal>

      {/* 11. Bottom CTA Banner */}
      <ScrollReveal threshold={0.1}>
        <StudentPlaced css={styles.studentPlaced} />
      </ScrollReveal>
    </div>
  );
};

export default Home;
