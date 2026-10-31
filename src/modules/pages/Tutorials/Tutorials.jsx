import React, { useState, useEffect, useRef } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { 
  Play, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Video, 
  Bot, 
  Check,
  SlidersHorizontal
} from 'lucide-react';
import { TUTORIAL_HERO_DATA, TUTORIAL_MODULES } from './tutorials.data';
import { styles } from './Tutorials.style';
import SEOHead from '../../components/seo/SEOHead';
import { useFormModal } from '../../components/modal/FormModalContext';
import { openBubbleLogin } from 'utils/bubbleAuth';

const Tutorials = () => {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [openFaqIndices, setOpenFaqIndices] = useState([0]); // First FAQ open by default

  const workspaceRef = useRef(null);
  const videoPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { openModal } = useFormModal();

  useEffect(() => {
    setIsPlaying(false);
    setHasStarted(false);
  }, [activeModuleId]);

  const handlePlayVideo = () => {
    if (activeModule.videoUrl && videoPlayerRef.current) {
      setHasStarted(true);
      const playPromise = videoPlayerRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(e => {
            console.log('Video play error:', e);
          });
      }
    }
  };

  const activeModule = TUTORIAL_MODULES.find(m => m.id === activeModuleId) || TUTORIAL_MODULES[0];

  const handleSelectModule = (id) => {
    setActiveModuleId(id);
    setOpenFaqIndices([0]);
    if (window.innerWidth < 900 && workspaceRef.current) {
      workspaceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrev = () => {
    if (activeModuleId > 1) {
      handleSelectModule(activeModuleId - 1);
    }
  };

  const handleNext = () => {
    if (activeModuleId < TUTORIAL_MODULES.length) {
      handleSelectModule(activeModuleId + 1);
    }
  };

  const scrollToWorkspace = () => {
    setActiveModuleId(1);
    if (workspaceRef.current) {
      workspaceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div css={styles.pageWrapper}>
      <SEOHead 
        title="UDEN Video Tutorials — Step-by-Step Platform Guide"
        description="Explore 8 short videos and complete walkthroughs covering UDEN features: Profile, Resume Builder, Resume Analysis, AI Interview Coach, Points, Job Agent Pro, AI Job Matcher, and Career Journey."
      />

      {/* HERO SECTION */}
      <section css={styles.heroSection}>
        <div css={styles.heroContainer}>
          {/* Left Text */}
          <div css={styles.heroLeft}>
            <div css={styles.badgePill}>
              <Zap size={14} />
              {TUTORIAL_HERO_DATA.badge}
            </div>

            <h1 css={styles.heroTitle}>
              {TUTORIAL_HERO_DATA.titlePrefix}
              <span>{TUTORIAL_HERO_DATA.titleHighlight}</span>
            </h1>

            <p css={styles.heroSubtitle}>
              {TUTORIAL_HERO_DATA.subtitle}
            </p>

            <div css={styles.featuresGrid}>
              {TUTORIAL_HERO_DATA.features.map((feature, idx) => (
                <div key={idx} css={styles.featureItem}>
                  <Check size={16} className="icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div css={styles.heroCtaRow}>
              <button css={styles.startBtn} onClick={scrollToWorkspace}>
                {TUTORIAL_HERO_DATA.ctaText}
                <ArrowRight size={17} />
              </button>
              <span css={styles.heroSecondaryText}>
                {TUTORIAL_HERO_DATA.secondaryText}
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div css={styles.heroRightCard}>
            <div css={styles.heroCardBadge}>
              <Video size={14} color="#F55825" />
              {TUTORIAL_HERO_DATA.cardBadge}
            </div>
            <img 
              src={TUTORIAL_HERO_DATA.cardImage} 
              alt="UDEN Platform Career Journey" 
              css={styles.heroCardImg}
            />
            <div css={styles.heroCardCaption}>
              <span className="dot"></span>
              {TUTORIAL_HERO_DATA.cardCaption}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TUTORIAL WORKSPACE */}
      <section css={styles.mainSection} id="tutorial-workspace" ref={workspaceRef}>
        <div css={styles.mainGrid}>
          {/* LEFT COLUMN: STATIC / STICKY SIDEBAR */}
          <aside css={styles.sidebar}>
            <div css={styles.sidebarHeader}>
              <div css={styles.sidebarTitleWrap}>
                <h3>Video modules</h3>
                <p>Follow the series in order</p>
              </div>
              <span css={styles.sidebarBadge}>
                {TUTORIAL_MODULES.length} videos
              </span>
            </div>

            {/* List of 8 Video Modules */}
            <ul css={styles.moduleList}>
              {TUTORIAL_MODULES.map((module) => {
                const isActive = module.id === activeModuleId;
                return (
                  <li 
                    key={module.id} 
                    css={styles.moduleItem(isActive)}
                    onClick={() => handleSelectModule(module.id)}
                  >
                    <div css={styles.moduleThumbWrap}>
                      <img 
                        src={module.image} 
                        alt={module.title} 
                        css={styles.moduleThumb} 
                      />
                      <span css={styles.moduleNumberBadgeCorner}>
                        {module.id}
                      </span>
                    </div>

                    <div css={styles.moduleMeta}>
                      <span className={`title ${isActive ? 'activeTitle' : ''}`} title={module.title}>
                        {module.title}
                      </span>
                      <div className="tagsRow">
                        <span css={styles.durationText}>
                          {module.duration}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Bottom scroll down indicator */}
            <div css={styles.sidebarFooterIndicator}>
              <ChevronDown size={18} />
            </div>
          </aside>

          {/* RIGHT COLUMN: SCROLLABLE CONTENT CARDS */}
          <div css={styles.rightColumn}>
            {/* CARD 1: VIDEO PLAYER & CONTROLS */}
            <div css={styles.videoPlayerCard}>
              <div css={styles.topBar}>
                <div css={styles.topBarLeft}>
                  <div css={styles.moduleNumberBadge}>
                    <Play size={13} fill="#F55825" color="#F55825" />
                    {activeModule.number}
                  </div>
                </div>
              </div>

              {/* Video Player Box */}
              <div css={styles.playerWrapper}>
                {activeModule.videoUrl ? (
                  <div css={styles.videoPlayerContainer}>
                    <video
                      ref={videoPlayerRef}
                      key={`${activeModule.id}-${activeModule.videoUrl}`}
                      controls
                      playsInline
                      preload="metadata"
                      poster={activeModule.image}
                      css={styles.videoElement}
                      onPlay={() => {
                        setIsPlaying(true);
                        setHasStarted(true);
                      }}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => {
                        setIsPlaying(false);
                      }}
                    >
                      <source src={activeModule.videoUrl} type="video/mp4" />
                      {activeModule.fallbackVideoUrl && activeModule.fallbackVideoUrl !== activeModule.videoUrl && (
                        <source src={activeModule.fallbackVideoUrl} type="video/mp4" />
                      )}
                      Your browser does not support the video tag.
                    </video>

                    {!hasStarted && (
                      <div css={styles.playerOverlay} onClick={handlePlayVideo}>
                        <div className="playBtnCircle" css={styles.playBtnCircle}>
                          <Play size={28} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '4px' }} />
                        </div>
                        <div css={styles.comingSoonPill} style={{ background: '#F55825', borderColor: '#F55825', color: '#FFFFFF' }}>
                          WATCH VIDEO
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <img 
                      src={activeModule.image} 
                      alt={activeModule.title} 
                      css={styles.playerImage} 
                    />
                    <div css={styles.playerOverlay} style={{ cursor: 'default' }}>
                      <div className="playBtnCircle" css={styles.playBtnCircle} style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                        <Play size={28} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '4px' }} />
                      </div>
                      <div css={styles.comingSoonPill}>
                        VIDEO COMING SOON
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Title & Short Summary */}
              <div css={styles.titleArea}>
                <h1>{activeModule.title}</h1>
                <p>{activeModule.summary}</p>
              </div>

              {/* Navigation Controls */}
              <div css={styles.navControlsBar}>
                <span css={styles.navGuideText}>
                  Prefer reading? The full walkthrough is below.
                </span>
                <div css={styles.navButtonsGroup}>
                  <button 
                    css={styles.navPrevBtn(activeModuleId === 1)}
                    onClick={handlePrev}
                    disabled={activeModuleId === 1}
                  >
                    <ArrowLeft size={15} />
                    Previous
                  </button>
                  <button 
                    css={styles.navNextBtn}
                    onClick={handleNext}
                  >
                    {activeModuleId === TUTORIAL_MODULES.length ? 'Finish Series' : 'Next video'}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 ROW: ABOUT THIS VIDEO (LEFT) + KEY TAKEAWAYS (RIGHT) */}
            <div css={styles.aboutAndTakeawaysRow}>
              {/* About this video card */}
              <div css={styles.aboutCard}>
                <h3>About this video</h3>
                {activeModule.about.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Key takeaways card */}
              <div css={styles.takeawaysCard}>
                <h3>Key takeaways</h3>
                <ul css={styles.takeawaysList}>
                  {activeModule.takeaways.map((takeaway, idx) => (
                    <li key={idx} css={styles.takeawayItem}>
                      <span className="iconCircle">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CARD 3: WHAT THIS VIDEO COVERS */}
            <div css={styles.coversCard}>
              <div css={styles.cardHeaderWithIcon}>
                <div className="iconBox">
                  <SlidersHorizontal size={20} />
                </div>
                <div className="titleWrap">
                  <h3>What this video covers</h3>
                  <span>The walkthrough you will see on screen</span>
                </div>
              </div>

              <ol css={styles.coversList}>
                {activeModule.covers.map((step, idx) => (
                  <li key={idx} css={styles.coverStepItem}>
                    <span css={styles.stepNumberBadge}>{idx + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* CARD 4: FREQUENTLY ASKED QUESTIONS */}
            <div css={styles.faqsCard}>
              <div css={styles.cardHeaderWithIcon}>
                <div className="titleWrap">
                  <h3>Frequently asked questions</h3>
                  <span>Common queries for "{activeModule.title}"</span>
                </div>
              </div>

              {activeModule.faqs.map((faq, index) => {
                const isOpen = openFaqIndices.includes(index);
                return (
                  <div key={index} css={styles.faqItem(isOpen)}>
                    <button 
                      css={styles.faqHeader(isOpen)} 
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} color="#F55825" />
                      ) : (
                        <ChevronDown size={18} color="#64748B" />
                      )}
                    </button>
                    {isOpen && (
                      <div css={styles.faqBody}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CARD 5: AI MENTOR CARD */}
            <div css={styles.aiCard}>
              <div className="content">
                <h4>
                  <Sparkles size={18} color="#F55825" />
                  Have doubts about this module? Ask UDEN AI
                </h4>
                <p>
                  Get instant clarifications on "{activeModule.title}", point calculations, or interview advice.
                </p>
              </div>
              <button 
                css={styles.aiBtn}
                onClick={() => {
                  openBubbleLogin();
                }}
              >
                <Bot size={16} />
                Ask UDEN AI Assistant
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
