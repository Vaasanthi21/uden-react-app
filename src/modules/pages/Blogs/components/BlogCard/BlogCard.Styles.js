import { css } from "@emotion/react";

const BlogCardStyles =css({
    '.blog-card-title':{fontWeight:'bold'},
    '.blog-card-subtitle':{textAlign:'justify',fontWeight:'bold'},
    ".hide-lines":{overflow: 'hidden',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: '2',WebkitBoxOrient: 'vertical',}
    

})

export default BlogCardStyles;