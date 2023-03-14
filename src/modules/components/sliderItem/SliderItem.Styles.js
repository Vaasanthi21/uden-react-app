import {css} from '@emotion/react';
import { AppColors } from '../../../utils/consts/app_colors';


export const SliderItemStyles = css({
            ".main-grid":{alignItems:'center'},
                ".text-grid":{justifyContent:'center',textAlign:'start'},
                ".text-box":{textAlign:'start'},
                ".title":{color:AppColors.PRIMARY_MAIN,fontWeight:'bold'},
                ".sub-title":{color:AppColors.PRIMARY_MAIN,fontWeight:'w600'},
                ".sub-title-dark":{color:'gray',fontWeight:'bold'},
                ".chip":{backgroundColor:'transparent'},
                ".avatar":{backgroundColor:AppColors.PRIMARY_ORANGE},
                ".points":{color:AppColors.FOOTER_COLOR,fontWeight:"bold"},
                ".button":{fontWeight:'bold',textTransform:'none'},
            ".image-grid":{justifyContent:"center"},
                // ".image-box":{
                //     display:"flex",
                //     flexDirection:"column",
                //     justifyContent:'center',
                //     height:'380px',
                // },
    })


