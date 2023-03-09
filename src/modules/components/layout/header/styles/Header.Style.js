/** @jsxRuntime classic */
/** @jsx jsx */
import {css} from '@emotion/react';
import {AppColors} from '../../../../../utils/consts/app_colors'
import { resposiveFont } from '../../../../../utils/responsive_text';


export const HeaderStyles = {
    
    appBar:({...props})=>css({
        backgroundColor: (props?.isPrimary??false)?'white':'black',
        justifyContent: 'center',
    }),

    logoDesktop: css({
        height:"40px",
        paddingRight:"10px",
    }),

    logoMobile: css({
        paddingRight:"10%",
        height:"30px"
    }),
    
    logoDrawer: css({
        height:"30px"
    }),

    tabsDesktop:({...props})=> css({
        margin:"0.2vw",
        ...resposiveFont(0.8),
        color: (props?.isCurrent??false)?AppColors.PRIMARY_MAIN:'black',
        fontWeight:'400',
        ":hover":{
            backgroundColor: AppColors.PRIMARY_ORANGE,
            color: "white"
        }
    }),

    tabsMobile:({...props})=> css({
        color: 'black',
        backgroundColor: (props?.isCurrent??false)?AppColors.PRIMARY_ORANGE:'none',
        // ...resposiveFont(),
        fontSize:"40px",
        ":hover":{
            backgroundColor: AppColors.PRIMARY_ORANGE,
            color: "white"
        }
        
    }),

    drawer:css({
        '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width:"60vw",
            "@media screen and (max-width:400px)":{
                width:"100vw"
            },
            "@media screen and (max-width:500px)":{
                width:"80vw"
            },
            
        },
    }),

    signupButtonDesktop: css({
        textTransform:'none',
        ...resposiveFont(),
        fontWeight:'bold',
    }),

    signupButtonMobile: css({
        textTransform:'none',
        fontWeight:'bold',
        width:'90%',
    }),
}



