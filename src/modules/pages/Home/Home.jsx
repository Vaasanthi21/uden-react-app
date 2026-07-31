import React from 'react';
import { HomeStyles as styles } from './styles/Home.Styles';
import Slider from './components/Slider';
import HeroSearchWidget from './components/HeroSearchWidget';
import MultiJobSearch from './components/MultiJobSearch';
import FeatureOdyssey from '../../components/feature/FeatureOdyssey';
import RecruiterVettedHub from './components/RecruiterVettedHub';
import ReferralCommunityHub from './components/ReferralCommunityHub';
import MetricsTicker from './components/MetricsTicker';
import CareerCalculator from './components/CareerCalculator';
import HomeTrustedBrand from './components/TrustedBrand';
import HomeTestimonial from './components/Testimonial';
import StudentPlaced from './components/StudentPlaced';
import FaqPage from '../Faq/Faq';
import ScrollReveal from '../../components/layout/ScrollReveal';
import HeroArchitectured from '../../components/feature/HeroArchitectured';
import MatchingEngine from '../../components/feature/MatchingEngine';
import SuccessTerminal from '../../components/feature/SuccessTerminal';

const Home = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      
      {/* ========================================================================= */}
      {/* FOLD 1: THE HOOK & VISION — Hero Slides & Architecture                     */}
      {/* ========================================================================= */}
      <Slider autoplay={true} css={styles.slider} />
      <HeroArchitectured />
      <ScrollReveal delay={150}>
        <HeroSearchWidget />
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 2: THE OPPORTUNITY EXPLORER — 100,000+ Aggregated Jobs Engine       */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFDF7', borderBottom: '1px solid #FEF5D8' }}>
          <MultiJobSearch />
        </div>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 3: THE CAPABILITY SUITE — One Platform, Nine Superpowers            */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.1}>
        <FeatureOdyssey />
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 4: THE INTELLIGENT MATCH — AI Matching Engine & Skill Scorecards    */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.1}>
        <MatchingEngine />
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 5: THE PROVEN OUTCOME — Recent Hires Ticker & Platform Metrics       */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.1}>
        <SuccessTerminal />
      </ScrollReveal>
      <ScrollReveal threshold={0.15}>
        <MetricsTicker />
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 6: THE ECOSYSTEM & COMMUNITY — Employer Pool & Peer Referral Hub    */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFDF7', borderTop: '1px solid #FEF5D8' }}>
          <RecruiterVettedHub />
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <ReferralCommunityHub />
        </div>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 7: PROOF & VALIDATION — Partners, Calculator, Stories & FAQ        */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.15}>
        <div style={{ padding: '50px 0', background: '#FFFFFF' }}>
          <HomeTrustedBrand css={styles.trustedBrand} />
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#F8FAFC' }}>
          <CareerCalculator />
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FEF5D8' }}>
          <HomeTestimonial css={styles.testimonial} />
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.1}>
        <div style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <FaqPage />
        </div>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* FOLD 8: THE GATEWAY — Final Placement Drive Call-to-Action                */}
      {/* ========================================================================= */}
      <ScrollReveal threshold={0.1}>
        <StudentPlaced css={styles.studentPlaced} />
      </ScrollReveal>

    </div>
  );
};

export default Home;
