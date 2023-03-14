import { css } from "@emotion/react";
import { AppColors } from "../../../../utils/consts/app_colors";

export const Error404Styles = {
    error:css({
        justifyContent:'center',
        textAlign:'left',
        ".error-title":{
            fontWeight: "bold",
            color: AppColors.PRIMARY_MAIN,
        },
        ".error-subtitle":{
            marginBottom:'8px',
            fontWeight: "bold",
            color: AppColors.FOOTER_COLOR,

        },
    }),
}