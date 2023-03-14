import { css } from "@emotion/react";
import { AppColors } from "../../../utils/consts/app_colors";


const ParagraphStyles = css({
    ".paragraph-title":{
        marginBottom:'30px',
        fontWeight: "bold",
        color: AppColors.FOOTER_COLOR,

    },
    ".paragraph":{
        textAlign:'justify',
        color: '#505050',
        fontWeight: "600",
        marginBottom:'30px'
    },
    ".sub-paragraph":{
        textAlign:'justify',
        color: '#505050',
        fontWeight: "600",
        marginBottom:'20px'
    },
    ".sub-paragraph-title":{
        textAlign:'justify',
        color: AppColors.FOOTER_COLOR,
        fontWeight: "bold",
        marginTop:'40px',
        marginBottom:'20px'
    },
    ".sub-paragraph-items":{
        textAlign:'justify',
        color: '#505050',
        fontWeight: "bold",
        marginBottom:'20px'
    },
})


export default ParagraphStyles