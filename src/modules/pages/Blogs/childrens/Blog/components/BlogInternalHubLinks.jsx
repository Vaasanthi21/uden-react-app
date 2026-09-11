import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Building2, ArrowRight } from 'lucide-react';

const hubs = [
  {
    icon: <GraduationCap size={28} color="#F55825" />,
    title: 'For College Students',
    description: 'Practice with 24x7 AI mock interviews, optimize your resume for ATS systems, and win cash referral prizes.',
    link: '/students',
    cta: 'Explore Student Hub'
  },
  {
    icon: <Briefcase size={28} color="#2563EB" />,
    title: 'For Active Jobseekers',
    description: 'Get matched with 100,000+ verified off-campus opportunities using AI algorithmic fitment scores.',
    link: '/jobseekers',
    cta: 'Explore Jobseeker Hub'
  },
  {
    icon: <Building2 size={28} color="#059669" />,
    title: 'For Colleges & TPOs',
    description: 'Automate campus drives, generate instant NAAC/NBA audit reports, and connect with 150+ hiring partners.',
    link: '/colleges',
    cta: 'Explore College Hub'
  }
];

export const BlogInternalHubLinks = () => {
  return (
    <Box sx={{ mt: 6, mb: 4, pt: 4, borderTop: '2px solid #F1F5F9' }}>
      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 1, textAlign: 'center' }}>
        Accelerate Your Career & Placement Readiness
      </Typography>
      <Typography variant="body2" sx={{ color: '#64748B', mb: 4, textAlign: 'center', maxWidth: '650px', mx: 'auto' }}>
        Discover how UDEN's AI career infrastructure empowers students, jobseekers, colleges, and government education missions across India.
      </Typography>

      <Grid container spacing={3}>
        {hubs.map((hub, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                  borderColor: '#CBD5E1'
                }
              }}
            >
              <CardContent sx={{ p: 1.5 }}>
                <Box sx={{ mb: 1.5 }}>{hub.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E293B', mb: 1, fontSize: '1.1rem' }}>
                  {hub.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
                  {hub.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 1.5, pt: 0 }}>
                <Button
                  component={Link}
                  to={hub.link}
                  endIcon={<ArrowRight size={16} />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 700,
                    color: '#0F172A',
                    p: 0,
                    '&:hover': { background: 'transparent', color: '#F55825' }
                  }}
                >
                  {hub.cta}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogInternalHubLinks;
