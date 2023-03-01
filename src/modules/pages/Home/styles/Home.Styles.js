import {css} from '@emotion/react';
import { AppColors } from '../../../../utils/consts/app_colors';


export const HomeStyles = {
    
    slider: css({
        ".slider-items":{
            ".main-grid":{alignItems:'center'},
                ".text-grid":{justifyContent:'center',textAlign:'start'},
                ".text-box":{textAlign:'start'},
                ".title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold'},
                ".sub-title":{color:AppColors.PRIMARY_MAIN,fontWeight:'w600'},
                ".chip":{backgroundColor:'transparent'},
                ".avatar":{backgroundColor:AppColors.PRIMARY_ORANGE},
                ".points":{color:AppColors.FOOTER_COLOR,fontWeight:"bold"},
                ".button":{fontWeight:'bold',textTransform:'none'},
            ".image-grid":{justifyContent:"center"},
                ".image-box":{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:'center',
                    height:'380px',
                },
        }
    }),

    trustedBrand: css({
        ".desktop":{userDrag: 'none',MozUserSelect: 'none',WebkitUserDrag: 'none',},
        ".mobile":{paddingLeft:"20%",paddingRight:"20%",userDrag: 'none',MozUserSelect: 'none',WebkitUserDrag: 'none',},

    }),

    workFlow: css({
        ".title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold'},
        ".button-row":{
            display: 'flex',
            justifyContent: 'center'
        },
        ".button-common":{
            
        },
        ".button":{
            textTransform:'none',
            fontWeight:'bold',
            borderRadius:'16px',
            padding: '8px',
            marginLeft:'16px',
            marginRight:'16px',
            backgroundColor:AppColors.SECONDARY_GREY
        },
        ".button-selected":{
            backgroundColor:AppColors.PRIMARY_MAIN,
        },
        ".work-flow-image-holder":{
            display: 'felx',
            justifyContent: 'center',
            justifyItems:'center',
            paddingLeft:'10%',
            paddingRight:'10%'

        },
        ".work-flow-image":{
            "img":{
                userDrag: 'none',
                MozUserSelect: 'none',
                WebkitUserDrag: 'none',
            }
        }

    }),

    features:css({
        backgroundColor:AppColors.SECONDARY_YELLOW,
        paddingBottom:'40px',
        paddingTop:'20px',

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
        ".divider":{
            backgroundColor:AppColors.PRIMARY_ORANGE,
            height:"8px",
            borderRadius:"5px",

        },
        ".feature-main-grid":{
            justifyContent:'center',
            paddingBottom:'10px',
            paddingTop:"10px",
        },
        ".feature-card":{
            borderRadius:'20px',
            boxShadow:`10px 10px ${AppColors.PRIMARY_MAIN}`,
            ":hover":{
                transform:"translateX(+2px) scale(1.1)",
                boxShadow:`10px 10px ${AppColors.PRIMARY_ORANGE}`,
            }
        },
        ".feature-title":{
            color:AppColors.PRIMARY_MAIN,
            fontWeight:'bolder',
            paddingLeft:"10%",
            paddingRight:"10%",
            "@media screen and (max-width:600px)":{
                paddingLeft:"10%",
                paddingRight:"10%",
            }
        },
        ".feature-description-container":{
            fontWeight:'bold',
            textAlign:"justify",
            paddingLeft:"10%",
            paddingRight:"10%",
        },
        ".feature-description":{
            fontWeight:'bold',
            color:AppColors.FOOTER_COLOR,
        },
        ".indemand-card":{
            borderRadius:'20px',
            boxShadow:`0px 10px ${AppColors.PRIMARY_MAIN}`
        },
        ".indemand-title":{
            color:AppColors.PRIMARY_MAIN,
            fontWeight:'bolder',
        },
        ".indemand-description-container":{
            fontWeight:'bolder',
            textAlign:"center",
            paddingLeft:"10%",
            paddingRight:"10%",
        },
        ".indemand-description":{
            fontWeight:'bold',
            color:AppColors.FOOTER_COLOR,
        },
    }),

    trustedBy:css({})
}



