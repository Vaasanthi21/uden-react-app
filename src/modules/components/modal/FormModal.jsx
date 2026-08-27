import React, { useState, useEffect, useRef } from 'react';
import { useFormModal } from './FormModalContext';
import './FormModal.css';

const FORM_CONFIGS = {
  demo: {
    badge: '📋 BOOK A DEMO',
    title: 'Book a Free Demo with UDEN',
    subtitle: 'Get your college placement transformation started today with zero risk.',
    submitLabel: 'Book My Free Demo →',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. Rajesh Sharma', required: true },
      { name: 'college', label: 'College / University Name', type: 'text', placeholder: 'IIT Delhi / VIT Vellore', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rajesh@college.edu.in', required: true },
      { name: 'studentStrength', label: 'Student Strength', type: 'text', placeholder: 'e.g. 500 Students', required: true },
      { 
        name: 'role', 
        label: 'Your Role', 
        type: 'select', 
        required: true,
        options: ['TPO / Placement Head', 'Placement Officer / Team', 'Principal / Dean', 'Management / Trustee', 'Other'] 
      }
    ]
  },
  getStarted: {
    badge: '🚀 GET STARTED',
    title: 'Get Started with UDEN',
    subtitle: 'Access 10,000+ pre-assessed candidates or start your campus AI prep.',
    submitLabel: 'Get Started Now →',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Rahul Verma', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { name: 'college', label: 'College / Organization Name', type: 'text', placeholder: 'Your College or Company', required: true },
      { 
        name: 'role', 
        label: 'I am a...', 
        type: 'select', 
        required: true,
        options: ['Student / Job Seeker', 'Placement Officer (TPO)', 'Corporate Recruiter', 'Other'] 
      }
    ]
  },
  contact: {
    badge: '💬 TALK TO US',
    title: 'Talk to Our Team',
    subtitle: 'Have questions? Our campus & recruiter team responds within 2 hours.',
    submitLabel: 'Send Message →',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Priya Sundaram', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'priya@company.com', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { name: 'message', label: 'Message / Inquiry', type: 'textarea', placeholder: 'How can UDEN assist your hiring or placement needs?', required: true }
    ]
  },
  apply: {
    badge: '🎓 STUDENT JOIN',
    title: 'Start Your Placement Journey',
    subtitle: 'Claim your 100 free AI interview points & unlock top campus drives.',
    submitLabel: 'Apply Now →',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Ananya Roy', required: true },
      { name: 'email', label: 'College Email Address', type: 'email', placeholder: 'ananya@student.edu.in', required: true },
      { name: 'mobile', label: 'WhatsApp Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { name: 'college', label: 'College Name', type: 'text', placeholder: 'Anna University', required: true },
      { 
        name: 'year', 
        label: 'Graduation Year', 
        type: 'select', 
        required: true,
        options: ['2026', '2025', '2024', '2027+'] 
      },
      { name: 'branch', label: 'Branch / Stream', type: 'text', placeholder: 'CSE / ECE / IT / MBA', required: true }
    ]
  }
};

const FormModal = () => {
  const { isOpen, formType, closeModal } = useFormModal();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef(null);

  const config = FORM_CONFIGS[formType] || FORM_CONFIGS.demo;

  // Lock body scroll & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData({});
      setErrors({});
      setIsSuccess(false);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    config.fields.forEach(field => {
      if (field.required && (!formData[field.name] || !String(formData[field.name]).trim())) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email address';
        }
      }
      if (field.type === 'tel' && formData[field.name]) {
        const phoneRegex = /^[0-9+\s-]{8,15}$/;
        if (!phoneRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid mobile number';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // HubSpot Lead & Contact Integration Tracking
    try {
      if (window._hsq) {
        const identifyData = {};
        if (formData.email) identifyData.email = formData.email;
        if (formData.name) {
          const parts = formData.name.trim().split(' ');
          identifyData.firstname = parts[0] || formData.name;
          identifyData.lastname = parts.slice(1).join(' ') || '';
        }
        if (formData.mobile) identifyData.phone = formData.mobile;
        if (formData.college) identifyData.company = formData.college;
        if (formData.role) identifyData.jobtitle = formData.role;
        if (formData.message) identifyData.message = formData.message;

        window._hsq.push(["identify", identifyData]);

        const eventNames = {
          demo: "Book a Demo Request Submission",
          getStarted: "Get Started Request Submission",
          contact: "Talk to Team / HR Solution Inquiry Submission",
          apply: "Student Placement Application Submission"
        };
        const eventId = eventNames[formType] || "Quick Form Submission";

        window._hsq.push(["trackEvent", { id: eventId }]);
      }
    } catch (err) {
      console.log("HubSpot modal tracking error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 600);
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="form-modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="form-modal-container" ref={modalRef}>
        
        {/* Close Button */}
        <button className="form-modal-close-btn" onClick={closeModal} aria-label="Close Modal">
          ✕
        </button>

        {isSuccess ? (
          <div className="form-modal-success">
            <div className="form-modal-success-icon">✓</div>
            <h3 className="form-modal-success-title">Submission Received! 🎉</h3>
            <p className="form-modal-success-text">
              Thank you! We'll be in touch within 24 hours to get your UDEN placement transformation started.
            </p>
            <div className="form-modal-footer-note">
              🔒 Auto-closing in 3 seconds...
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="form-modal-header">
              <span className="form-modal-badge">{config.badge}</span>
              <h2 className="form-modal-title">{config.title}</h2>
              <p className="form-modal-subtitle">{config.subtitle}</p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="form-modal-body">
              {config.fields.map(field => (
                <div className="form-modal-field" key={field.name}>
                  <label className="form-modal-label">
                    {field.label}
                    {field.required && <span className="required">*</span>}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      className={`form-modal-select ${errors[field.name] ? 'error' : ''}`}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    >
                      <option value="">Select {field.label}...</option>
                      {field.options.map(opt => (
                        <option value={opt} key={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      rows={3}
                      className={`form-modal-textarea ${errors[field.name] ? 'error' : ''}`}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className={`form-modal-input ${errors[field.name] ? 'error' : ''}`}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  )}

                  {errors[field.name] && (
                    <span className="form-modal-error-msg">{errors[field.name]}</span>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="form-modal-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : config.submitLabel}
              </button>

              <div className="form-modal-footer-note">
                🔒 No spam. We respect your privacy &amp; data security.
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default FormModal;
