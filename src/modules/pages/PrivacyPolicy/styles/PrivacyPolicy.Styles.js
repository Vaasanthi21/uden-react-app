import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";

export const PrivacyPolicyStyles = {
    privacy:css({
        justifyContent:'center',
        textAlign:'left',
        ".privacy-title":{
            fontWeight: "bold",
            color: AppColors.PRIMARY_MAIN,
        },
        ".privacy-paragraph-title":{
            marginBottom:'8px',
            fontWeight: "bold",
            color: AppColors.FOOTER_COLOR,

        },
        ".privacy-paragraph":{
            textAlign:'justify',
            color: '#505050',
            fontWeight: "600",
        }
        


    }),
}