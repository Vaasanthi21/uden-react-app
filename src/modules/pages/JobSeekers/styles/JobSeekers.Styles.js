import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";

export const JobSeekersStyles = {
    workFlow: css({
        ".title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold'},
    }),

    features: css({
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
    }),
}