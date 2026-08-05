import { Box, Button, CircularProgress, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';

import ContactUsConst from '../ContactUs.Const';
import { ContactUsHooks } from '../hooks/ContactUs.Hooks';

const ContactUsForm = (props) => {
  const data = ContactUsConst.ContactForm;
  const hooks = ContactUsHooks.useFormHooks({ data: data });
  const { fields, formResult, handleInputChange, validate } = hooks;

  return (
    <Box
      {...props}
      sx={{
        maxWidth: '1100px',
        margin: '40px auto',
        padding: { xs: '20px 16px', md: '0 24px' },
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
      }}
    >
      <Box
        sx={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid #FEF5D8',
          boxShadow: '0 16px 40px rgba(75, 99, 140, 0.08)',
          padding: { xs: '28px 20px', md: '44px 40px' },
          overflow: 'hidden'
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {/* Left Column: Info & Links */}
          <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: '#1E293B',
                fontSize: { xs: '28px', md: '36px' },
                marginBottom: '10px',
                letterSpacing: '-0.5px'
              }}
            >
              {data?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#64748B',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: '28px',
                fontWeight: 500
              }}
            >
              {data?.subtitle}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {data?.actions?.map((value, i) => (
                <Box
                  key={i}
                  sx={{
                    background: '#FFFDF7',
                    border: '1px solid #FEF5D8',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#F55825',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: '#334155' }}>
                    {value?.title}
                  </Typography>
                  <Link
                    href={value?.link}
                    target="_blank"
                    underline="none"
                    sx={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#F55825',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {value?.action} →
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column: Contact Input Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={validate}
              sx={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: { xs: '24px 18px', md: '32px 28px' },
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <Typography sx={{ fontSize: '18px', fontWeight: 800, color: '#1E293B', marginBottom: '4px' }}>
                Send us a message
              </Typography>

              {fields?.map((value, i) => (
                <TextField
                  key={i}
                  {...value}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      background: '#FFFFFF',
                      '& fieldset': { borderColor: '#CBD5E1' },
                      '&:hover fieldset': { borderColor: '#F55825' },
                      '&.Mui-focused fieldset': { borderColor: '#F55825' }
                    },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#F55825' }
                  }}
                />
              ))}

              <Button
                disabled={formResult.isLoading}
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginTop: '12px',
                  padding: '14px 0',
                  borderRadius: '14px',
                  background: '#F55825',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '15px',
                  textTransform: 'none',
                  boxShadow: '0 6px 20px rgba(245, 88, 37, 0.3)',
                  '&:hover': {
                    background: '#E04818',
                    boxShadow: '0 8px 24px rgba(245, 88, 37, 0.4)'
                  }
                }}
              >
                {data?.form?.action}
                {formResult.isLoading && (
                  <CircularProgress size={20} thickness={6} sx={{ ml: 1, color: '#FFFFFF' }} />
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUsForm;