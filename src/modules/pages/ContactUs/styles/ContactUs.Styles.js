import { css } from "@emotion/react";
import { AppColors } from "../../../../utils/consts/app_colors";

export const AboutUsStyles = {
    banner: css({
        
    }),
    form:css({
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
    globalOffices: css({
        backgroundColor: AppColors.SECONDARY_YELLOW,
        ".global-offices-title":{
            fontWeight: "bold",
            color: AppColors.PRIMARY_MAIN,
        }
    }),
}