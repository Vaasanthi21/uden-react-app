import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";

export const PrivacyPolicyStyles = {
    form:css({
        paddingTop:'30px',
        paddingBottom:'30px',
        ".form-title":{
            fontWeight: "bold",
            color: AppColors.PRIMARY_MAIN,
        },
        ".form-subtitle":{
            fontWeight: "bold",
            color: AppColors.FOOTER_COLOR,
        },
        ".form-link":{
            fontWeight: "bold",
            textTransform: "none",
            textDecoration:'none'
        }


    }),
}