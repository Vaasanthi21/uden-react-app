import React from 'react';
import { HomeStyles as styles } from './styles/Home.Styles';
import Slider from './components/Slider';
import HeroSearchWidget from './components/HeroSearchWidget';
import MetricsTicker from './components/MetricsTicker';
import PersonaSwitcher from './components/PersonaSwitcher';
import CareerCalculator from './components/CareerCalculator';
import HomeTrustedBrand from './components/TrustedBrand';
import HomeTestimonial from './components/Testimonial';
import StudentPlaced from './components/StudentPlaced';
import FaqPage from '../Faq/Faq';

const Home = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Slider & Search Widget */}
      <Slider autoplay={false} css={styles.slider} />
      <HeroSearchWidget />

      {/* 2. Key Live Platform Metrics */}
      <MetricsTicker />

      {/* 3. Trust Logos Bar */}
      <div style={{ padding: '40px 0' }}>
        <HomeTrustedBrand css={styles.trustedBrand} />
      </div>

      {/* 4. Dual Persona Switcher (Candidates, Employers, Colleges, Government) */}
      <div style={{ padding: '60px 0', background: '#F8FAFC' }}>
        <PersonaSwitcher />
      </div>

      {/* 5. Interactive Career & Salary Growth Calculator */}
      <div style={{ padding: '60px 0' }}>
        <CareerCalculator />
      </div>

      {/* 6. Success Stories & Testimonials */}
      <div style={{ padding: '60px 0', background: '#FEF5D8' }}>
        <HomeTestimonial css={styles.testimonial} />
      </div>

      {/* 7. Frequently Asked Questions Section */}
      <FaqPage />

      {/* 8. Bottom CTA Banner */}
      <StudentPlaced css={styles.studentPlaced} />
    </div>
  );
};

export default Home;
