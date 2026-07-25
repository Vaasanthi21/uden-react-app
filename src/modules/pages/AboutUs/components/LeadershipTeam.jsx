import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Linkedin, Award, Users } from 'lucide-react';
import AboutUsConst from '../AboutUs.Const';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 32px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 8px;
    }

    p {
      color: #64748B;
      font-size: 15px;
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
  `,
  card: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    text-align: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  avatarRing: css`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, #DA532C 0%, #FFB020 100%);
    margin-bottom: 18px;
    box-shadow: 0 8px 20px rgba(218, 83, 44, 0.25);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      background: #FFFFFF;
    }
  `,
  name: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 4px;
  `,
  designation: css`
    font-size: 13.5px;
    color: #DA532C;
    font-weight: 700;
    margin-bottom: 16px;
  `,
  linkedinBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #F8FAFC;
    color: #0A66C2;
    border: 1px solid #CBD5E1;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: #0A66C2;
      color: #FFFFFF;
      border-color: #0A66C2;
    }
  `
};

const LeadershipTeam = () => {
  const leaders = AboutUsConst?.LeadershipTeam?.leaders || [];

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <h2>The Leadership Team</h2>
        <p>A passionate leadership team dedicated to connecting talent with global opportunities.</p>
      </div>

      <div css={styles.grid}>
        {leaders.map((leader) => (
          <div key={leader.id} css={styles.card}>
            <div css={styles.avatarRing}>
              <img src={leader.image} alt={leader.name} />
            </div>
            <h3 css={styles.name}>{leader.name}</h3>
            <div css={styles.designation}>{leader.designation}</div>

            {leader.linkedinUrl && (
              <a 
                href={leader.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                css={styles.linkedinBtn}
              >
                <Linkedin size={14} />
                Connect on LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
