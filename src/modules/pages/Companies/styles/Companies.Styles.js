import { css } from "@emotion/react";
import { AppColors } from "../../../../utils/consts/app_colors";

export const CompaniesStyles = {
    workFlow: css({
        ".title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold'},
    }),

    features: css({
        ".title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold',padding:'0 10%'},
    })
}
