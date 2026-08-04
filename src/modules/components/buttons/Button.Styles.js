import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {css} from '@emotion/react';
import {AppColors} from 'utils/consts/app_colors'
import { resposiveFont } from 'utils/responsive_text';



export const ButtonStyle = {
    primary:({...props})=>css({
        backgroundColor: (props?.isPrimary??false)?'white':'black',
        height:"100px",
        justifyContent: 'center',
    }),
    logoDesktop: css({
    }),
    logoMobile: css({
        paddingRight:"10%"
    }),
    logoDrawer: css({
    }),
    secodary:({...props})=> css({
        margin:"0.2vw",
        color: 'black',
        ...resposiveFont(),
        // fontSize: "1.2vw",
        // "@media (max-width:900px)":{
        //     fontSize: "10px",
        // },
        // "@media (min-width:1440px)":{
        //     fontSize: "16px",
        // },
    
        backgroundColor: (props?.isCurrent??false)?AppColors.PRIMARY_ORANGE:'none',
        fontWeight:500,
        ":hover":{
            backgroundColor: AppColors.PRIMARY_ORANGE,
            color: "white"
        }
    }),
}

