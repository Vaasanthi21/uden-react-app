import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, AlertCircle, RefreshCw, Compass, Target, Award, UserCheck, Star } from 'lucide-react';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

let FindOpportunityImage;
try {
  FindOpportunityImage = require('assets/images/find-opportunity.png');
} catch (e) {
  FindOpportunityImage = process.env.PUBLIC_URL + '/images/find-opportunity.png';
}

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #FFFDF7 0%, #FFFFFF 100%);
    padding: 60px 16px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;

    @media (max-width: 640px) {
      padding: 24px 10px;
    }
  `,
  container: css`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
  `,
  card: css`
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #4B638C;
    border-radius: 28px;
    box-shadow: 0 25px 50px -10px rgba(75, 99, 140, 0.18);
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    overflow: hidden;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      border-radius: 20px;
    }
  `,
  leftCol: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 48px 36px;
    color: #1E293B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1.5px solid rgba(247, 188, 8, 0.4);

    @media (max-width: 900px) {
      padding: 28px 20px;
      border-right: none;
      border-bottom: 1.5px solid rgba(247, 188, 8, 0.4);
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(75, 99, 140, 0.25);
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  heroHeading: css`
    font-size: 34px;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 14px;
    color: #1E293B;
    letter-spacing: -0.5px;

    span {
      color: #F55825;
    }

    @media (max-width: 640px) {
      font-size: 26px;
    }
  `,
  heroSub: css`
    font-size: 15px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  storyStepsList: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 28px;
    background: #FFFFFF;
    border-radius: 20px;
    padding: 20px;
    border: 1.5px solid #FEF5D8;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  `,
  storyStepItem: css`
    display: flex;
    align-items: flex-start;
    gap: 14px;
  `,
  stepNumBox: css`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  stepTitle: css`
    font-size: 14px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 2px 0;
  `,
  stepDesc: css`
    font-size: 12.5px;
    color: #64748B;
    line-height: 1.45;
    margin: 0;
  `,
  illustrationImg: css`
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    margin-bottom: 24px;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.05));

    @media (max-width: 640px) {
      max-height: 160px;
    }
  `,
  testimonialSnippet: css`
    background: #FEF5D8;
    border-radius: 16px;
    padding: 16px 20px;
    border: 1px dashed #F7BC08;
    margin-bottom: 24px;
    font-size: 13px;
    color: #1E293B;
    font-style: italic;
    line-height: 1.5;

    .author {
      font-style: normal;
      font-weight: 800;
      color: #F55825;
      margin-top: 6px;
      display: block;
      font-size: 12px;
    }
  `,
  leftFooter: css`
    font-size: 12.5px;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    border-top: 1px solid rgba(75, 99, 140, 0.15);
    padding-top: 18px;
  `,
  rightCol: css`
    padding: 44px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 900px) {
      padding: 28px 20px;
    }
  `,
  logoContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6px;
    text-align: center;
  `,
  subtitleText: css`
    font-size: 13.5px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
    text-align: center;

    span {
      color: #F55825;
    }
  `,
  formGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  `,
  formFieldHalf: (hasError) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 8px;

    label {
      font-size: 11.5px;
      font-weight: 800;
      color: #1E293B;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    input, select {
      width: 100%;
      box-sizing: border-box;
      padding: 11px 14px;
      border-radius: 12px;
      border: 1.5px solid ${hasError ? '#EF4444' : '#CBD5E1'};
      font-size: 13.5px;
      color: #1E293B;
      outline: none;
      font-weight: 600;
      background: ${hasError ? '#FEF2F2' : '#FFFFFF'};
      transition: all 0.2s ease;

      &:focus {
        border-color: ${hasError ? '#EF4444' : '#F55825'};
        box-shadow: 0 4px 12px rgba(245, 88, 37, 0.12);
      }
    }
  `,
  errorText: css`
    font-size: 11.5px;
    color: #EF4444;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 2px;
  `,
  checkboxRow: css`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
    font-size: 12px;
    color: #475569;
    font-weight: 600;

    input {
      accent-color: #F55825;
      margin-top: 2px;
    }

    a {
      color: #F55825;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
  submitBtn: css`
    width: 100%;
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 16px;
    border-radius: 30px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(245, 88, 37, 0.28);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(245, 88, 37, 0.38);
    }
  `,
  resetBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFFFFF;
    border: 1.5px solid #10B981;
    color: #10B981;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    margin-top: 16px;
    transition: all 0.2s ease;

    &:hover {
      background: #ECFDF5;
    }
  `
};

export default function FindOpportunityPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    country: 'India',
    state: '',
    city: '',
    zipCode: '',
    primarySkill: '',
    experience: 'Fresher (0 Years)',
    referralSource: 'Social Media',
    agreeTerms: true,
    agreePrivacy: true
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full Name must be at least 2 characters';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim() || !emailRegex.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid email address';
    }
    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 8) {
      errs.phone = 'Please enter a valid contact phone number';
    }
    if (!formData.state.trim()) {
      errs.state = 'State is required';
    }
    if (!formData.city.trim()) {
      errs.city = 'City is required';
    }
    if (!formData.primarySkill.trim()) {
      errs.primarySkill = 'Primary skill is required (e.g. React, Java, Python)';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must agree to Terms & Conditions';
    }
    if (!formData.agreePrivacy) {
      errs.agreePrivacy = 'You must agree to Privacy Policy';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // HubSpot Lead & Contact Integration Tracking
      try {
        if (window._hsq) {
          window._hsq.push(["identify", {
            email: formData.workEmail,
            firstname: formData.fullName.split(' ')[0] || formData.fullName,
            lastname: formData.fullName.split(' ').slice(1).join(' ') || '',
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            primary_skill: formData.primarySkill,
            experience: formData.experience
          }]);
          window._hsq.push(["trackEvent", { id: "Candidate Blueprint Opportunity Submission" }]);
        }
      } catch (err) {
        console.log("HubSpot tracking:", err);
      }
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      workEmail: '',
      phone: '',
      country: 'India',
      state: '',
      city: '',
      zipCode: '',
      primarySkill: '',
      experience: 'Fresher (0 Years)',
      referralSource: 'Social Media',
      agreeTerms: true,
      agreePrivacy: true
    });
    setErrors({});
  };

  return (
    <div css={styles.outer} className="uden-fade-in">
      <div css={styles.container}>
        <div css={styles.card} className="uden-card-hover">
          {/* Left Column Storytelling Narrative + Illustration */}
          <div css={styles.leftCol}>
            <div>
              <div css={styles.badgeTag} className="uden-float-anim">
                <Sparkles size={13} color="#F7BC08" />
                CAREER BLUEPRINT &amp; OPPORTUNITY ACCELERATOR
              </div>

              <h2 css={styles.heroHeading}>
                Architect Your <span>Career Evolution</span>
              </h2>

              <p css={styles.heroSub}>
                Tell us where you are in your career journey. Our AI Matching Engine analyzes your profile to unlock 100,000+ pre-vetted job openings, curated upskilling paths, and direct corporate interview drives.
              </p>

              {/* 3-Step Guided Storytelling Journey */}
              <div css={styles.storyStepsList}>
                <div css={styles.storyStepItem}>
                  <div css={styles.stepNumBox}>1</div>
                  <div>
                    <h4 css={styles.stepTitle}>Tell Us Your Story</h4>
                    <p css={styles.stepDesc}>Share your contact and location background for regional &amp; global job matching.</p>
                  </div>
                </div>

                <div css={styles.storyStepItem}>
                  <div css={styles.stepNumBox}>2</div>
                  <div>
                    <h4 css={styles.stepTitle}>Define Your Tech Footprint</h4>
                    <p css={styles.stepDesc}>Highlight your core skill stack to trigger immediate AI profile fitment scoring.</p>
                  </div>
                </div>

                <div css={styles.storyStepItem}>
                  <div css={styles.stepNumBox}>3</div>
                  <div>
                    <h4 css={styles.stepTitle}>Get Fast-Tracked to Recruiters</h4>
                    <p css={styles.stepDesc}>Get matched with 150+ direct corporate hiring partners with 48-hour shortlist SLAs.</p>
                  </div>
                </div>
              </div>

              {FindOpportunityImage && (
                <img 
                  src={FindOpportunityImage} 
                  alt="Career Growth & AI Matching" 
                  css={styles.illustrationImg}
                />
              )}

              <div css={styles.testimonialSnippet}>
                "UDEN's AI profile matching helped me land my dream role at Deloitte Digital within 14 days!"
                <span className="author">— Palak Jain, Senior Engineer</span>
              </div>
            </div>

            <div css={styles.leftFooter}>
              <ShieldCheck size={16} color="#4B638C" />
              100% Verified Privacy &amp; Secure Candidate Matching
            </div>
          </div>

          {/* Right Column Guided Storytelling Opportunity Registration Form */}
          <div css={styles.rightCol}>
            <div css={styles.logoContainer}>
              <Logo style={{ height: '42px' }} />
            </div>

            <div css={styles.subtitleText}>
              Assess <span>•</span> Upskill <span>•</span> Recruit
            </div>

            {submitted ? (
              <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '20px', padding: '32px 24px', color: '#047857', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '22px', fontWeight: 900, margin: '0 0 8px 0' }}>Career Profile Successfully Created!</h3>
                <p style={{ fontSize: '14.5px', color: '#065F46', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                  Thank you <strong>{formData.fullName}</strong>. Your profile has been registered in the UDEN AI Matching Engine. Our career counselors will reach out to you at <strong>{formData.workEmail}</strong> with personalized job matches.
                </p>
                <button css={styles.resetBtn} onClick={handleReset}>
                  <RefreshCw size={14} /> Register Another Candidate Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div css={styles.formGrid}>
                  <div css={styles.formFieldHalf(Boolean(errors.fullName))}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Alex Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div css={styles.errorText}>
                        <AlertCircle size={12} /> {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div css={styles.formFieldHalf(Boolean(errors.workEmail))}>
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="workEmail"
                      placeholder="name@domain.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                    />
                    {errors.workEmail && (
                      <div css={styles.errorText}>
                        <AlertCircle size={12} /> {errors.workEmail}
                      </div>
                    )}
                  </div>

                  <div css={styles.formFieldHalf(Boolean(errors.phone))}>
                    <label>Contact Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div css={styles.errorText}>
                        <AlertCircle size={12} /> {errors.phone}
                      </div>
                    )}
                  </div>

                  <div css={styles.formFieldHalf(false)}>
                    <label>Country *</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div css={styles.formFieldHalf(Boolean(errors.state))}>
                    <label>State *</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="e.g. Karnataka"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {errors.state && (
                      <div css={styles.errorText}>
                        <AlertCircle size={12} /> {errors.state}
                      </div>
                    )}
                  </div>

                  <div css={styles.formFieldHalf(Boolean(errors.city))}>
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Bengaluru"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <div css={styles.errorText}>
                        <AlertCircle size={12} /> {errors.city}
                      </div>
                    )}
                  </div>

                  <div css={styles.formFieldHalf(false)}>
                    <label>Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="e.g. 560001"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div css={styles.formFieldHalf(Boolean(errors.primarySkill))}>
                    <label>Primary Skill *</label>
                    <input
                      type="text"
                      name="primarySkill"
                      placeholder="e.g. React / Java / Python"
                      value={formData.primarySkill}
                      onChange={handleChange}
                    />
                    {errors.primarySkill && (
                      <div css={styles.errorText}>
                        <AlertCircle size={12} /> {errors.primarySkill}
                      </div>
                    )}
                  </div>

                  <div css={styles.formFieldHalf(false)}>
                    <label>Experience (Years)</label>
                    <select name="experience" value={formData.experience} onChange={handleChange}>
                      <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <div css={styles.formFieldHalf(false)}>
                    <label>How learned about UDEN?</label>
                    <select name="referralSource" value={formData.referralSource} onChange={handleChange}>
                      <option value="Social Media">Social Media</option>
                      <option value="College / Campus">College / Campus</option>
                      <option value="Friend / Referral">Friend / Referral</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div css={styles.checkboxRow}>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>I agree to UDEN's <Link to={AppRoutes.TERMS}>Terms &amp; Conditions</Link></span>
                </div>
                {errors.agreeTerms && (
                  <div css={styles.errorText} style={{ marginLeft: '24px' }}>
                    <AlertCircle size={12} /> {errors.agreeTerms}
                  </div>
                )}

                <div css={styles.checkboxRow}>
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                  />
                  <span>I understand UDEN will process my info as per <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link></span>
                </div>
                {errors.agreePrivacy && (
                  <div css={styles.errorText} style={{ marginLeft: '24px' }}>
                    <AlertCircle size={12} /> {errors.agreePrivacy}
                  </div>
                )}

                <button type="submit" css={styles.submitBtn} className="uden-pulse-btn">
                  Launch My Career Blueprint
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
