import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ArrowRight, Building2, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HomeConst } from '../Home.Const';
import { AppRoutes } from 'utils/consts/routes';
import { useFormModal } from '../../../components/modal/FormModalContext';

const styles = {
  section: css`
    max-width: 1000px;
    margin: 30px auto;
    padding: 0 16px;
  `,
  fluidBar: css`
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
    border-top: 3px solid #DA532C;
    border-bottom: 1px solid #E2E8F0;
    padding: 28px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 860px) {
      flex-direction: column;
      text-align: center;
      gap: 16px;
    }
  `,
  leftCol: css`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 540px) {
      flex-direction: column;
      gap: 8px;
    }
  `,
  bigNumber: css`
    font-size: 52px;
    font-weight: 900;
    background: linear-gradient(135deg, #DA532C 0%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    letter-spacing: -1px;
  `,
  counterMeta: css`
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      font-weight: 800;
      color: #1E293B;
      margin: 0 0 2px 0;
    }

    p {
      font-size: 13px;
      color: #64748B;
      margin: 0;
    }
  `,
  pillRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 860px) {
      justify-content: center;
    }
  `,
  pillChip: css`
    display: flex;
    align-items: center;
    gap: 6px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 600;
    color: #1E293B;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

    b {
      color: #DA532C;
      font-size: 13px;
    }
  `,
  ctaLink: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 10px 22px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
      background: #C0392B;
      transform: translateX(3px);
      box-shadow: 0 4px 12px rgba(218, 83, 44, 0.35);
    }
  `
};

const StudentPlaced = () => {
  const data = HomeConst.StudentPlaced;
  const navigate = useNavigate();
  const { openModal } = useFormModal();

  return (
    <div css={styles.section}>
      <div css={styles.fluidBar}>
        <div css={styles.leftCol}>
          <div css={styles.bigNumber}>
            {data.count || "2,500"}+
          </div>
          <div css={styles.counterMeta}>
            <h3>{data.title || "Student Placed"}</h3>
            <p>Empowered by UDEN AI assessment & upskilling</p>
          </div>
        </div>

        <div css={styles.pillRow}>
          <div css={styles.pillChip}>
            <Building2 size={14} color="#DA532C" />
            <span><b>150+</b> Corporate Partners</span>
          </div>
          <div css={styles.pillChip}>
            <Zap size={14} color="#DA532C" />
            <span><b>98%</b> Success Rate</span>
          </div>
          <div css={styles.pillChip}>
            <Award size={14} color="#F59E0B" />
            <span><b>₹14L</b> Highest CTC</span>
          </div>
        </div>

        <button 
          css={styles.ctaLink}
          onClick={() => openModal('apply')}
        >
          View Success Stories
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default StudentPlaced;