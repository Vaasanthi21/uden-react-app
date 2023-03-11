import { css } from "@emotion/react";
import { AppColors } from "../../../../utils/consts/app_colors";

export const TermsAndConditionStyles = {

    terms:css({
        scrollBehavior:'smooth',
        justifyContent:'center',
        textAlign:'left',
        ".terms-title":{
            scrollBehavior:'smooth',
            fontWeight: "bold",
            color: AppColors.PRIMARY_MAIN,
        },
        ".terms-paragraph-title":{
            marginBottom:'30px',
            fontWeight: "bold",
            color: AppColors.FOOTER_COLOR,

        },
        ".terms-paragraph":{
            textAlign:'justify',
            color: '#505050',
            fontWeight: "600",
            marginBottom:'30px'
        },
        ".terms-sub-paragraph":{
            textAlign:'justify',
            color: '#505050',
            fontWeight: "600",
            marginBottom:'20px'
        },
        ".terms-sub-paragraph-title":{
            textAlign:'justify',
            color: AppColors.FOOTER_COLOR,
            fontWeight: "bold",
            marginTop:'40px',
            marginBottom:'20px'
        },
        ".terms-sub-paragraph-items":{
            textAlign:'justify',
            color: '#505050',
            fontWeight: "bold",
            marginBottom:'20px'
        },
    }),
}