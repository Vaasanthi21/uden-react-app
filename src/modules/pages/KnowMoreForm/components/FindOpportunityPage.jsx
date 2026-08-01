import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let FindOpportunityImage;
try {
  FindOpportunityImage = require('../../../../assets/images/find-opportunity.png');
} catch (e) {
  FindOpportunityImage = process.env.PUBLIC_URL + '/images/find-opportunity.png';
}

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
    padding: 50px 16px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  card: css`
    width: 100%;
    max-width: 1100px;
    background: #FFFFFF;
    border: 2px solid #4B638C;
    border-radius: 28px;
    box-shadow: 0 25px 50px -10px rgba(75, 99, 140, 0.18);
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    overflow: hidden;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  leftCol: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 48px 40px;
    color: #1E293B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1.5px solid rgba(247, 188, 8, 0.4);

    @media (max-width: 900px) {
      padding: 36px 24px;
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
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid rgba(75, 99, 140, 0.25);
    align-self: flex-start;
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
  `,
  heroSub: css`
    font-size: 15px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 28px;
    font-weight: 600;
  `,
  illustrationImg: css`
    width: 100%;
    max-height: 240px;
    object-fit: contain;
    margin-bottom: 28px;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.05));
  `,
  featuresList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  `,
  featureItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    font-weight: 700;
    color: #1E293B;
  `,
  leftFooter: css`
    font-size: 12.5px;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    border-top: 1px solid rgba(75, 99, 140, 0.15);
    padding-top: 18px;
  `,
  rightCol: css`
    padding: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 900px) {
      padding: 36px 24px;
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
    font-size: 14px;
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

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `,
  formFieldHalf: (hasError) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;

    label {
      font-size: 12px;
      font-weight: 800;
      color: #1E293B;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    input, select {
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
    margin-top: 8px;
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
    padding: 15px;
    border-radius: 30px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 18px;
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
      <div css={styles.card} className="uden-card-hover">
        {/* Left Column Brand Value Proposition + Illustration */}
        <div css={styles.leftCol}>
          <div>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Sparkles size={13} color="#F7BC08" />
              JOIN THE UDEN NETWORK
            </div>

            <h2 css={styles.heroHeading}>
              Find <span>Opportunity</span>
            </h2>

            <p css={styles.heroSub}>
              Get access to global companies for opportunities and get upskilled to stay relevant.
            </p>

            {FindOpportunityImage && (
              <img 
                src={FindOpportunityImage} 
                alt="Find Opportunity & Career Growth" 
                css={styles.illustrationImg}
              />
            )}

            <div css={styles.featuresList}>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#4B638C" />
                <span>Free Profile Setup &amp; Skill Assessment</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#4B638C" />
                <span>Direct Access to 150+ Corporate Hiring Partners</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#4B638C" />
                <span>1-on-1 Mentorship &amp; Dedicated Resume Support</span>
              </div>
            </div>
          </div>

          <div css={styles.leftFooter}>
            <ShieldCheck size={14} color="#4B638C" />
            100% Free Registration &amp; Secure Data
          </div>
        </div>

        {/* Right Column Opportunity Inquiry Registration Form with Validations */}
        <div css={styles.rightCol}>
          <div css={styles.logoContainer}>
            <Logo style={{ height: '42px' }} />
          </div>

          <div css={styles.subtitleText}>
            Assess <span>•</span> Upskill <span>•</span> Recruit
          </div>

          {submitted ? (
            <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '20px', padding: '32px 24px', color: '#047857', textAlign: 'center' }}>
              <CheckCircle2 size={44} color="#10B981" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '22px', fontWeight: 900, margin: '0 0 8px 0' }}>Registration Successful!</h3>
              <p style={{ fontSize: '14.5px', color: '#065F46', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                Thank you <strong>{formData.fullName}</strong>. Your profile has been registered in the UDEN Talent Database. Our placement team will reach out at <strong>{formData.workEmail}</strong>.
              </p>
              <button css={styles.resetBtn} onClick={handleReset}>
                <RefreshCw size={14} /> Submit Another Application
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
                Submit Opportunity Application
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
