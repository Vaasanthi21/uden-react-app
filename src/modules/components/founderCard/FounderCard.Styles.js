import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";

const AboutUsStyles = css({
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'16px',
    backgroundColor:'#F1F3F4',
  ".founder-card-image": {
    height: '100px',
    width: '100px',
    borderRadius:'50%' // 16:9
  },
  ".founder-card-name": {
    fontWeight: 'bold'
  },
  ".founder-card-designation": {
    marginBottom: 8,
    fontWeight: 'bold',
    color:AppColors.FOOTER_COLOR
  },
  ".founder-card-message": {
    fontStyle: 'italic',
    marginTop: 2,
  },
  ".founder-card-linkedin": {
    marginLeft: 'auto',
    color: '#0A66C2',
    padding:0
  },
    })

export default AboutUsStyles