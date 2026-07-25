import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

export const HeaderStyles = {
    appBar: ({...props}) => css({
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
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
        margin: "0 4px",
        padding: "8px 14px",
        fontSize: "13.5px",
        fontWeight: props?.isCurrent ? '700' : '600',
        color: props?.isCurrent ? '#DA532C' : '#1E293B',
        borderRadius: "8px",
        textTransform: "capitalize",
        letterSpacing: "0.2px",
        transition: "all 0.2s ease",
        background: props?.isCurrent ? 'rgba(218, 83, 44, 0.08)' : 'transparent',
        
        "&:hover": {
            backgroundColor: "rgba(218, 83, 44, 0.1)",
            color: "#DA532C",
            transform: "translateY(-1px)"
        }
    }),

    tabsMobile: ({...props}) => css({
        color: props?.isCurrent ? '#DA532C' : '#1E293B',
        backgroundColor: props?.isCurrent ? 'rgba(218, 83, 44, 0.08)' : 'transparent',
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "8px",
        "&:hover": {
            backgroundColor: "rgba(218, 83, 44, 0.1)",
            color: "#DA532C"
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
        fontSize: '14px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #DA532C 0%, #C0392B 100%)',
        color: '#FFFFFF',
        borderRadius: '24px',
        padding: '8px 24px',
        boxShadow: '0 4px 14px rgba(218, 83, 44, 0.3)',
        transition: 'all 0.25s ease',
        border: 'none',

        '&:hover': {
            background: 'linear-gradient(135deg, #C0392B 0%, #A93226 100%)',
            boxShadow: '0 6px 18px rgba(218, 83, 44, 0.45)',
            transform: 'translateY(-2px)'
        }
    }),

    signupButtonMobile: css({
        textTransform: 'none',
        fontWeight: '700',
        width: '90%',
        background: 'linear-gradient(135deg, #DA532C 0%, #C0392B 100%)',
        color: '#FFFFFF',
        borderRadius: '24px',
        padding: '10px 20px'
    }),
};
