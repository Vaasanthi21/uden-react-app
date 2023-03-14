import {css} from '@emotion/react';

const WorkFlowStyles = css({
    ".main-grid":{
        display: "flex",
        flexDirection:'row',
        justifyContent:'center',
    },
    ".item-grid":{
        "img":{
            userDrag: 'none',
            MozUserSelect: 'none',
            WebkitUserDrag: 'none',
        }
    }
});

export default WorkFlowStyles;

   