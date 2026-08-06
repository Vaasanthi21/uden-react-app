import {css} from '@emotion/react';
import { AppColors } from 'utils/consts/app_colors';


export const FeatureStyles = {
    featureCard:(props)=>css({
            justifyContent:'center',
            paddingBottom:'10px',
            paddingTop:"10px",
            ".stack-image":{
                position:'absolute',
                left:'50%',
                top:'0',
                zIndex:'0',
                verticalAlign:'middle',
                boxSizing:'border-box',
                transform: "translate(-50%, -50%)",
                borderRadius:'100%',
                backgroundColor:'white',
                padding:"10px",
                width:'max-width',
                height:'max-content',
            },
            ".card":{
                borderRadius:'20px',
                boxShadow:props?.stacked===true?null:`10px 10px ${AppColors.PRIMARY_MAIN}`,
            },
            ".title":{
                color:AppColors.PRIMARY_MAIN,
                fontWeight:'bolder',
                paddingLeft:"10%",
                paddingRight:"10%",
                "@media screen and (max-width:600px)":{
                    paddingLeft:"10%",
                    paddingRight:"10%",
                }
            },
            ".description-container":{
                fontWeight:'bold',
                textAlign:"justify",
                paddingLeft:"10%",
                paddingRight:"10%",
            },
            ".description":{
                fontWeight:'bold',
                color:AppColors.FOOTER_COLOR,
            },
    }),
    alternatingImage:(props)=>css({
        ".main-grid":{alignItems:'center'},
            ".text-grid":{justifyContent:'center',textAlign:'start'},
            // ".text-box":{textAlign:'start'},
            ".feature-title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold',textAlign:props?.reverse?'left':'right',"@media (max-width:900px)":{textAlign:'center'}},
            ".feature-description":{color:AppColors.FOOTER_COLOR,fontWeight:'600',textAlign:'justify'},
            ".image-grid":{justifyContent:"center"},
        })
}


