import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button, Box, Container, Typography, Divider } from '@mui/material';
import { Sparkles, ExternalLink } from 'lucide-react';

import { BlogsStyles as styles } from './styles/Blogs.Styles';
import BlogsBanner from './components/BlogsBanner';
import BlogList from './components/BlogsList';
import Spacer from '../../components/Spacer';

const Blogs = () => {
  return (
    <div>
      <BlogsBanner css={styles.banner} />

      {/* AI Creative Studio Callout Bar (UDEN Brand Theme) */}
      <Container maxWidth="lg" style={{ marginTop: '24px', marginBottom: '24px' }}>
        <Box
          style={{
            background: 'linear-gradient(135deg, #FFFDF9 0%, #FFF3EC 100%)',
            borderRadius: '16px',
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(245, 88, 37, 0.08)',
            border: '1.5px solid #FDE4D8'
          }}
        >
          <Box display="flex" alignItems="center" gap="14px">
            <Box
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(245, 88, 37, 0.12)',
                border: '1px solid rgba(245, 88, 37, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F55825'
              }}
            >
              <Sparkles size={22} />
            </Box>
            <Box>
              <Typography style={{ color: '#1E293B', fontWeight: 800, fontSize: '18px' }}>
                UDEN Creative Studio OS
              </Typography>
              <Typography style={{ color: '#64748B', fontWeight: 600, fontSize: '13.5px' }}>
                Generate SEO &amp; GEO optimized blog articles using AI
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            href="https://www.udenai.com/blog-studio"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Sparkles size={18} />}
            endIcon={<ExternalLink size={16} />}
            style={{
              background: '#F55825',
              color: '#FFFFFF',
              fontWeight: 800,
              borderRadius: '24px',
              padding: '10px 24px',
              textTransform: 'none',
              fontSize: '14px',
              boxShadow: '0 4px 14px rgba(245, 88, 37, 0.4)'
            }}
          >
            Create Blog with AI
          </Button>
        </Box>
      </Container>

      <Divider />
      <Spacer height />
      <BlogList css={styles.list} />
      <Spacer height />
    </div>
  );
};

export default Blogs;
