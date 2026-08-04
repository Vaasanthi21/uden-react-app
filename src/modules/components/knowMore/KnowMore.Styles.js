import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";


export const KnowMoreStyles = css({
    elevation:0,
    borderRadius:0,
    height:"250px",
    backgroundColor:AppColors.PRIMARY_MAIN,
    ".main-grid":{
        justifyContent:'space-evenly',
        justifyItems:'center',
        height:'100%' },
    ".title":{
        color:'white',
        fontWeight:'bold',
    },
    ".button":{
        color:AppColors.PRIMARY_MAIN,
        backgroundColor:'white',
        fontWeight:'bold',
        ":hover":{
            color:AppColors.PRIMARY_MAIN,
            backgroundColor:'white',
        }
    }


    })