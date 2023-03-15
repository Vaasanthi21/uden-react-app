import { css } from "@emotion/react";
import { AppColors } from "../../../../../../utils/consts/app_colors";


const BlogStyles = {
    main:css({
        display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',
        ".blog-main-grid":{justifyContent:'center',overflow:'auto',height:'100%'},
        ".blog-sub-grid2":{justifyContent:'center',alignContent:'start' ,overflow:'auto',height:'100%'}
    }),
    blogTitle:css({
        justifyContent:'center',
        ".blogtitle-image-container":{justifyContent:'center'},
        ".blogtitle-title":{fontWeight:'bold',color:AppColors.PRIMARY_MAIN},
        ".blogtitle-publish":{color:AppColors.FOOTER_COLOR},
        ".uden-share-button":{color:AppColors.PRIMARY_MAIN}
    },),
    blogBody:css({},),
    moreBlogs:css({
        ".moreblogs-title":{fontWeight:'bold',color:AppColors.PRIMARY_MAIN}
    }),

}

export default BlogStyles