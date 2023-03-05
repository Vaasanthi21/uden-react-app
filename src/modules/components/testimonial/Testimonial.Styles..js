import { css } from "@emotion/react";
import { AppColors } from "../../../utils/consts/app_colors";


export const TestimonialStyles = css({
    paddingBottom:'20px',
        ".title":{
            color:AppColors.PRIMARY_MAIN,
            fontWeight:'bolder',
            paddingLeft:"20%",
            paddingRight:"20%",
            "@media screen and (max-width:600px)":{
                paddingLeft:"10%",
                paddingRight:"10%",
            }
        },
        ".testimonial-item":{
            justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',alignContent:'space-evenly',
            ".name":{fontWeight:'bolder',color:AppColors.FOOTER_COLOR,opacity:'0.8'},
            ".designation":{fontWeight:'bolder',color:AppColors.FOOTER_COLOR,opacity:'0.8',marginLeft:'10px'},
            ".company":{fontWeight:'bolder',color:AppColors.PRIMARY_MAIN},
            ".message-container":{textAlign:'center',},
            ".message":{fontWeight:'bold'},
        },
        
        

    })