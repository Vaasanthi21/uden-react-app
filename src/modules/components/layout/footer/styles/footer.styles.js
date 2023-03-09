import {css} from '@emotion/react';
import {AppColors} from '../../../../../utils/consts/app_colors'


export const FooterStyles = {

    mainContainer: css({
        backgroundColor: AppColors.FOOTER_COLOR
    }),

    logoContainer: css({
        ".logo-container":{
            display:'flex',
            flexDirection: 'column',
            "@media screen and (min-width: 0px) ":{
                display:'flex',
                flexDirection: 'column',
            },
            "@media screen and (min-width: 600px) ":{
                display:'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            "@media screen and (min-width: 900px) ":{
                display:'flex',
                flexDirection: 'column',
            },
        },
    }),

    footerMenu:css({
        ".divider":{
            backgroundColor:'white'
        },
        ".menu-list":{
            display:'flex',
            flexDirection:'column',
            alignItems: 'start'
        }, 
    }),
    footerMenuItems:({...props})=>css({
        color:'white',
        ":hover":{
            color:AppColors.PRIMARY_MAIN,
            transform:"translateX(+2px) scale(1.1)",
        },
        ".title":{
            color:props?.isCurrent===true ? AppColors.PRIMARY_MAIN : 'none',
            fontWeight:'bold',
        }
    }),

    
    socialButtons:props=>css({
        display:'flex',
        flexDirection:'row',
        width:'auto',
        ".social-button":{
            border:'1px solid white',
            width:'auto',
            margin:'5px',
            color:'white',
            ":hover":{
                backgroundColor:AppColors.PRIMARY_ORANGE,
                boxShadow:`0px 15px 20px ${AppColors.PRIMARY_ORANGE}`,
                transform:"translateY(-2px) scale(1.1)",
                
            }
        }
    }),


    logo: css({
        ".child":{
            ":hover":{
                transform:"translateY(-2px) scale(1.1)", 
            }
        },
    }),

    logoGP: css({
        ".child":{
            ":hover":{
                transform:"translateY(-2px) scale(1.1)", 
            }
        }
    }),

    bottomLink:css({
        color:'white',
        ".button":{
            color:'white',
            fontWeight:'bold',
            textTransform:'none',
            
            ":hover":{
                color:AppColors.PRIMARY_MAIN,
                backgroundColor:'transparent',
            },
            "&.MuiButtonGroup-groupedText":{
                borderColor:'white',
            }
        }
    }),

    copyrightText:css({
        // ...resposiveFont(0.8),
    }),

}



