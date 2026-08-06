import { css } from '@emotion/react';

export const FooterStyles = {
    mainContainer: css({
        backgroundColor: '#231F20',
        borderTop: '4px solid #DA532C',
        color: '#FFFFFF',
        paddingTop: '32px',
        paddingBottom: '20px'
    }),

    logoContainer: css({
        '.logo-container': {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            '@media screen and (min-width: 0px)': {
                display: 'flex',
                flexDirection: 'column'
            },
            '@media screen and (min-width: 600px)': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            },
            '@media screen and (min-width: 900px)': {
                display: 'flex',
                flexDirection: 'column'
            }
        }
    }),

    footerMenu: css({
        '.divider': {
            backgroundColor: '#DA532C',
            height: '2px',
            borderRadius: '1px'
        },
        '.menu-list': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
        }
    }),

    footerMenuItems: ({ ...props }) => css({
        color: '#CBD5E1',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        '&:hover': {
            color: '#DA532C',
            transform: 'translateX(4px)'
        },
        '.title': {
            color: props?.isCurrent === true ? '#DA532C' : '#FFFFFF',
            fontWeight: '700'
        }
    }),

    socialButtons: (props) => css({
        display: 'flex',
        flexDirection: 'row',
        width: 'auto',
        gap: '8px',
        '.social-button': {
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease',
            '&:hover': {
                backgroundColor: '#DA532C',
                borderColor: '#DA532C',
                boxShadow: '0px 6px 16px rgba(218, 83, 44, 0.4)',
                transform: 'translateY(-2px) scale(1.08)'
            }
        }
    }),

    logo: css({
        '.child': {
            transition: 'transform 0.2s ease',
            '&:hover': {
                transform: 'translateY(-2px) scale(1.05)'
            }
        }
    }),

    logoGP: css({
        '.child': {
            transition: 'transform 0.2s ease',
            '&:hover': {
                transform: 'translateY(-2px) scale(1.05)'
            }
        }
    }),

    bottomLink: css({
        color: '#CBD5E1',
        '.button': {
            color: '#CBD5E1',
            fontWeight: '600',
            fontSize: '13px',
            textTransform: 'none',
            transition: 'color 0.2s ease',
            '&:hover': {
                color: '#DA532C',
                backgroundColor: 'transparent'
            },
            '&.MuiButtonGroup-groupedText': {
                borderColor: 'rgba(255, 255, 255, 0.2)'
            }
        }
    }),

    copyrightText: css({
        color: '#94A3B8',
        fontSize: '13px'
    })
};
