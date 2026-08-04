import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";

export const TermsAndConditionStyles = {

    terms:css({
        scrollBehavior:'smooth',
        justifyContent:'center',
        textAlign:'left',
        ".terms-title":{
            scrollBehavior:'smooth',
            fontWeight: "bold",
            color: AppColors.PRIMARY_MAIN,
        }
    }),
}