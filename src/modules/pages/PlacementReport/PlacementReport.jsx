import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Container, Chip, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Award,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Download,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const PlacementReport = () => {
  const stats = [
    { label: 'Students Placed', val: '2,500+', desc: 'Across Tier 2 & Tier 3 campuses', icon: <Users size={24} color="#F55825" /> },
    { label: 'AI Cohort Placement Rate', val: '91.4%', desc: 'Vs 48.2% unassisted baseline', icon: <TrendingUp size={24} color="#10B981" /> },
    { label: 'Average Engineering CTC', val: '₹6.8 LPA', desc: 'Top 10% received ₹12.4 LPA', icon: <Award size={24} color="#6366F1" /> },
    { label: 'Corporate Hiring Partners', val: '150+', desc: 'IT services, startups, and GCCs', icon: <Building2 size={24} color="#EC4899" /> }
  ];

  const skillData = [
    { role: 'Full-Stack Web (React / Node / TS)', share: '34%', avgCtc: '₹7.2 LPA', growth: '+42% YoY' },
    { role: 'Cloud & Generative AI Ops (AWS / Docker)', share: '28%', avgCtc: '₹8.5 LPA', growth: '+62% YoY' },
    { role: 'Data Engineering & Analytics (Python / SQL)', share: '21%', avgCtc: '₹6.9 LPA', growth: '+35% YoY' },
    { role: 'Core Java / Spring Boot Microservices', share: '17%', avgCtc: '₹6.4 LPA', growth: '+18% YoY' }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Tier 2 & 3 College Placement Report 2026 | UDEN',
        text: 'Benchmark report on campus placements and AI career readiness across 2,500+ placed students.',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Report link copied to clipboard!');
    }
  };

  return (
    <Box sx={{ bgcolor: '#FAFAFA', py: 6, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Badges */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          <Chip label="Annual Research Report" color="primary" sx={{ bgcolor: '#F55825', color: '#fff', fontWeight: 700 }} />
          <Chip label="UDEN Employability Index 2026" variant="outlined" sx={{ borderColor: '#CBD5E1', color: '#475569' }} />
          <Chip label="DPIIT & Microsoft for Startups Backed" variant="outlined" sx={{ borderColor: '#CBD5E1', color: '#475569' }} />
        </Box>

        {/* Title & Subtitle */}
        <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: '#0F172A', mb: 2, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
          Tier 2 & Tier 3 College Placement Report 2026
        </Typography>
        <Typography variant="h6" sx={{ color: '#475569', mb: 4, fontWeight: 400, maxWidth: '850px', lineHeight: 1.6 }}>
          An empirical analysis of 2,500+ engineering graduates, 21+ university partners, and 150+ corporate employers benchmarking AI placement readiness, interview clearance rates, and compensation packages across India.
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
          <Button
            variant="contained"
            onClick={handleShare}
            startIcon={<Share2 size={18} />}
            sx={{ bgcolor: '#F55825', '&:hover': { bgcolor: '#D94514' }, borderRadius: '10px', textTransform: 'none', fontWeight: 700, px: 3 }}
          >
            Share / Cite Report
          </Button>
          <Button
            component={Link}
            to="/colleges"
            variant="outlined"
            startIcon={<Building2 size={18} />}
            sx={{ borderColor: '#CBD5E1', color: '#1E293B', '&:hover': { borderColor: '#94A3B8' }, borderRadius: '10px', textTransform: 'none', fontWeight: 700 }}
          >
            Deploy for Your Campus
          </Button>
        </Box>

        {/* Key Benchmark Metrics Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: '100%', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ p: 1, bgcolor: '#F8FAFC', borderRadius: '10px' }}>{item.icon}</Box>
                    <Chip label="Verified 2026" size="small" sx={{ bgcolor: '#ECFDF5', color: '#065F46', fontWeight: 600, fontSize: '0.75rem' }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                    {item.val}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155', mb: 0.5 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748B' }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Core Finding 1: The AI Multiplier */}
        <Card sx={{ borderRadius: '20px', border: '1px solid #E2E8F0', p: { xs: 3, md: 5 }, mb: 6, bgcolor: '#FFFFFF', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
            Key Finding 1: The 2.4x AI Readiness Multiplier
          </Typography>
          <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 3 }}>
            Engineering students from Tier 2 & Tier 3 institutions frequently encounter resume rejection at the automated applicant screening stage or struggle with real-time technical articulation. Students in our 2026 tracked cohort who practiced with at least five 24x7 AI mock interviews demonstrated an interview clearance rate of <strong>91.4%</strong>, compared to <strong>48.2%</strong> among peers without AI preparation.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, bgcolor: '#FEF2F2', borderRadius: '12px', border: '1px solid #FEE2E2' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#991B1B', mb: 1 }}>
                  Without AI Prep (Standard Baseline)
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#DC2626', mb: 1 }}>
                  48.2%
                </Typography>
                <Typography variant="body2" sx={{ color: '#7F1D1D' }}>
                  Traditional campus drives hampered by first-round nervousness, generic resumes, and uncalibrated answers.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, bgcolor: '#ECFDF5', borderRadius: '12px', border: '1px solid #D1FAE5' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#065F46', mb: 1 }}>
                  With UDEN AI Career Prep (Active Cohort)
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#059669', mb: 1 }}>
                  91.4%
                </Typography>
                <Typography variant="body2" sx={{ color: '#064E3B' }}>
                  24x7 mock interviews, 8-axis skill radar scoring, and real-time behavioral guidance prior to corporate interview rounds.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* Skill In-Demand Table */}
        <Card sx={{ borderRadius: '20px', border: '1px solid #E2E8F0', p: { xs: 3, md: 5 }, mb: 6, bgcolor: '#FFFFFF' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
            Recruiter Demand & CTC Breakdown by Domain (2026)
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', mb: 4 }}>
            Aggregated from 150+ corporate recruiters hiring freshers through UDEN.tech
          </Typography>

          <Box sx={{ overflowX: 'auto' }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <Box component="thead">
                <Box component="tr" sx={{ borderBottom: '2px solid #E2E8F0', pb: 2 }}>
                  <Box component="th" sx={{ py: 1.5, color: '#475569', fontWeight: 700 }}>Domain & Tech Stack</Box>
                  <Box component="th" sx={{ py: 1.5, color: '#475569', fontWeight: 700 }}>Hiring Share</Box>
                  <Box component="th" sx={{ py: 1.5, color: '#475569', fontWeight: 700 }}>Average CTC</Box>
                  <Box component="th" sx={{ py: 1.5, color: '#475569', fontWeight: 700 }}>YoY Demand</Box>
                </Box>
              </Box>
              <Box component="tbody">
                {skillData.map((row, idx) => (
                  <Box component="tr" key={idx} sx={{ borderBottom: '1px solid #F1F5F9' }}>
                    <Box component="td" sx={{ py: 2, fontWeight: 600, color: '#1E293B' }}>{row.role}</Box>
                    <Box component="td" sx={{ py: 2, color: '#64748B' }}>{row.share}</Box>
                    <Box component="td" sx={{ py: 2, fontWeight: 700, color: '#0F172A' }}>{row.avgCtc}</Box>
                    <Box component="td" sx={{ py: 2 }}>
                      <Chip label={row.growth} size="small" sx={{ bgcolor: '#EFF6FF', color: '#1D4ED8', fontWeight: 700 }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Card>

        {/* Money Pages Internal Authority Links */}
        <Box sx={{ my: 6, p: 4, bgcolor: '#1E293B', borderRadius: '20px', color: '#FFFFFF' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
            Put the 2026 Employability Index into Practice
          </Typography>
          <Typography variant="body1" sx={{ color: '#94A3B8', mb: 3, maxWidth: '750px' }}>
            Whether you are a college student striving for top-tier placement, a fresher seeking off-campus roles, an institution TPO automating campus drives, or an enterprise recruiter:
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                component={Link}
                to="/students"
                variant="contained"
                fullWidth
                endIcon={<ArrowRight size={16} />}
                sx={{ bgcolor: '#F55825', '&:hover': { bgcolor: '#D94514' }, py: 1.5, fontWeight: 700, textTransform: 'none' }}
              >
                For Students
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                component={Link}
                to="/jobseekers"
                variant="contained"
                fullWidth
                endIcon={<ArrowRight size={16} />}
                sx={{ bgcolor: '#2563EB', '&:hover': { bgcolor: '#1D4ED8' }, py: 1.5, fontWeight: 700, textTransform: 'none' }}
              >
                For Jobseekers
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                component={Link}
                to="/colleges"
                variant="contained"
                fullWidth
                endIcon={<ArrowRight size={16} />}
                sx={{ bgcolor: '#059669', '&:hover': { bgcolor: '#047857' }, py: 1.5, fontWeight: 700, textTransform: 'none' }}
              >
                For Colleges / TPOs
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                component={Link}
                to="/recruiters"
                variant="contained"
                fullWidth
                endIcon={<ArrowRight size={16} />}
                sx={{ bgcolor: '#7C3AED', '&:hover': { bgcolor: '#6D28D9' }, py: 1.5, fontWeight: 700, textTransform: 'none' }}
              >
                For Recruiters
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Citation & Methodology Box */}
        <Box sx={{ p: 3, bgcolor: '#F1F5F9', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#334155', mb: 1 }}>
            Methodology & Citation Notice for Press & Researchers
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
            <strong>Citation:</strong> Digverve Solutions Pvt. Ltd. (2026). <em>Tier 2 & Tier 3 College Placement Report & Employability Index 2026</em>. UDEN Research Institute. Available at: <a href="https://uden.tech/reports/tier-2-3-placement-report-2026" style={{ color: '#F55825' }}>https://uden.tech/reports/tier-2-3-placement-report-2026</a>.<br />
            <strong>Inquiries & Media Access:</strong> Reach our communications lead at <code>contact@uden.tech</code> for complete regional datasets, college breakdowns, or executive interviews.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PlacementReport;
