import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { MessageSquare, X, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/consts/routes';

const styles = {
  floatingBtn: css`
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    box-shadow: 0 10px 25px rgba(218, 83, 44, 0.45);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    transition: transform 0.3s ease, background 0.2s ease;

    &:hover {
      transform: scale(1.08);
      background: #C0392B;
    }
  `,
  chatModal: css`
    position: fixed;
    bottom: 96px;
    right: 24px;
    width: 360px;
    max-width: calc(100vw - 48px);
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border: 1px solid #E2E8F0;
    z-index: 99999;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: slideUp 0.3s ease-out;

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
  header: css`
    background: #DA532C;
    color: #FFFFFF;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  headerInfo: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  avatar: css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #FFFFFF;
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 16px;
  `,
  headerTitle: css`
    font-size: 16px;
    font-weight: 800;
    line-height: 1.2;
  `,
  headerSub: css`
    font-size: 11px;
    opacity: 0.9;
  `,
  headerActions: css`
    display: flex;
    align-items: center;
    gap: 10px;
    
    button {
      background: transparent;
      border: none;
      color: #FFFFFF;
      cursor: pointer;
      opacity: 0.85;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  `,
  body: css`
    padding: 20px;
    background: #F8FAFC;
    max-height: 420px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  bubble: css`
    background: #FFFFFF;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
    font-size: 13px;
    color: #334155;
    line-height: 1.5;
    box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  `,
  optionsContainer: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  `,
  optionBtn: css`
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    color: #1E293B;
    cursor: pointer;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #DA532C;
      background: #FFF5F5;
      color: #DA532C;
      transform: translateX(4px);
    }
  `,
  consentFooter: css`
    padding: 12px 16px;
    background: #F1F5F9;
    border-top: 1px solid #E2E8F0;
    font-size: 11px;
    color: #64748B;
    text-align: center;
  `,
  agreeBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;

    &:hover {
      background: #C0392B;
    }
  `
};

const KidiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSelectOption = (route) => {
    setIsOpen(false);
    navigate(route);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        css={styles.floatingBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="KIDI Assistant"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

      {/* KIDI Assistant Window */}
      {isOpen && (
        <div css={styles.chatModal}>
          {/* Header */}
          <div css={styles.header}>
            <div css={styles.headerInfo}>
              <div css={styles.avatar}>K</div>
              <div>
                <div css={styles.headerTitle}>KIDI</div>
                <div css={styles.headerSub}>We typically reply in a few minutes</div>
              </div>
            </div>
            <div css={styles.headerActions}>
              <button type="button"><Maximize2 size={16} /></button>
              <button type="button" onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>
          </div>

          {/* Chat Content Body */}
          <div css={styles.body}>
            <div css={styles.bubble}>
              👋 <b>Welcome to Uden.tech!</b> We're here to connect talent, opportunities, and ideas.
              <br /><br />
              How can I best assist you today? Please select which best describes you:

              <div css={styles.optionsContainer}>
                <button 
                  css={styles.optionBtn}
                  onClick={() => handleSelectOption(AppRoutes.FIND_TALENT)}
                >
                  🏢 Company looking to hire talent
                </button>
                <button 
                  css={styles.optionBtn}
                  onClick={() => handleSelectOption(AppRoutes.FOR_CAMPUS)}
                >
                  🎓 College/institute
                </button>
                <button 
                  css={styles.optionBtn}
                  onClick={() => handleSelectOption(AppRoutes.FIND_OPPORTUNITY)}
                >
                  👔 Jobseeker
                </button>
                <button 
                  css={styles.optionBtn}
                  onClick={() => handleSelectOption(AppRoutes.HR_SERVICES)}
                >
                  💡 An entrepreneur
                </button>
              </div>
            </div>
          </div>

          {/* Footer Consent Notice */}
          {!agreed && (
            <div css={styles.consentFooter}>
              This chat service uses cookies to interact with you and maintain your chat history.
              <br />
              <button 
                css={styles.agreeBtn}
                onClick={() => setAgreed(true)}
              >
                I agree
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default KidiChatbot;
