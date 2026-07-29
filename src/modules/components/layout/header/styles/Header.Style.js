import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

export const HeaderStyles = {
    appBar: ({...props}) => css({
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(75, 99, 140, 0.06)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    }),

    logoDesktop: css({
        height: "38px",
        paddingRight: "16px",
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        "&:hover": {
            transform: 'scale(1.02)'
        },
        "@media screen and (max-width:1200px)": {
            height: "30px"
        },
    }),

    logoMobile: css({
        paddingRight: "10%",
        height: "30px"
    }),
    
    logoDrawer: css({
        height: "30px"
    }),

    tabsDesktop: ({...props}) => css({
        margin: "0 6px",
        padding: "6px 12px",
        fontSize: "13px",
        fontWeight: props?.isCurrent ? '800' : '600',
        color: props?.isCurrent ? '#4B638C' : '#334155',
        borderRadius: "8px",
        textTransform: "none",
        letterSpacing: "0.1px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: "all 0.25s ease",
        background: 'transparent',
        minWidth: 'auto',

        '& .MuiButton-startIcon': {
          margin: 0,
          marginBottom: '2px',
          color: props?.isCurrent ? '#4B638C' : '#64748B',
          transition: 'color 0.25s ease',
        },

        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          transform: props?.isCurrent ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
          width: '80%',
          height: '3px',
          backgroundColor: '#4B638C',
          borderRadius: '2px',
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        },

        "&:hover": {
            backgroundColor: "transparent",
            color: "#F55825",
            '& .MuiButton-startIcon': {
              color: '#F55825',
            },
            '&::after': {
              transform: 'translateX(-50%) scaleX(1)',
              backgroundColor: '#F55825',
            }
        }
    }),

    tabsMobile: ({...props}) => css({
        color: props?.isCurrent ? '#4B638C' : '#1E293B',
        backgroundColor: props?.isCurrent ? 'rgba(75, 99, 140, 0.08)' : 'transparent',
        fontSize: "15px",
        fontWeight: "600",
        borderRadius: "8px",
        "&:hover": {
            backgroundColor: "rgba(75, 99, 140, 0.1)",
            color: "#4B638C"
        }
    }),

    drawer: css({
        '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: "60vw",
            "@media screen and (max-width:400px)": {
                width: "100vw"
            },
            "@media screen and (max-width:500px)": {
                width: "80vw"
            },
        },
    }),

    signupButtonDesktop: css({
        textTransform: 'none',
        fontSize: '14.5px',
        fontWeight: '800',
        background: '#F55825',
        color: '#FFFFFF',
        borderRadius: '24px',
        padding: '10px 24px',
        boxShadow: '0 4px 14px rgba(245, 88, 37, 0.3)',
        transition: 'all 0.25s ease',
        border: 'none',
        whiteSpace: 'nowrap',

        '&:hover': {
            background: '#D94616',
            boxShadow: '0 6px 18px rgba(245, 88, 37, 0.45)',
            transform: 'translateY(-2px)'
        }
    }),

    signupButtonMobile: css({
        textTransform: 'none',
        fontWeight: '800',
        width: '90%',
        background: '#F55825',
        color: '#FFFFFF',
        borderRadius: '24px',
        padding: '10px 20px'
    }),
};
