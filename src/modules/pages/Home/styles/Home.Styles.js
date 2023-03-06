import {css} from '@emotion/react';
import { AppColors } from '../../../../utils/consts/app_colors';


export const HomeStyles = {
    
    slider: css({
        
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

    trustedBy:css({
    }),

    testimonial:css({
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
        ".testimonial-item-name":{fontWeight:'bolder',color:AppColors.FOOTER_COLOR,opacity:'0.8'},
        ".testimonial-item-message-container":{textAlign:'center',},
        ".testimonial-item-message":{fontWeight:'bold'}

    }),

    studentPlaced:css({
        height:'200px',
        borderRadius:'0',
        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZHVhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position:'relative',
        color: 'white',
        ".dark-bg":{
            borderRadius:'0',
            backgroundColor:AppColors.FOOTER_COLOR,
            opacity: '0.9',
            height:'100%',
            width:'100%',
            position: 'absolute',

        },
        ".student-placed-content":{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom:'0'
        },
        ".student-placed-number-box":{padding: '20px', backgroundColor:AppColors.FOOTER_COLOR },
        ".student-placed-number":{
            fontWeight: 'bold',
        }
        

    })
}



