import React from 'react'

import FeatureAlternatingImage from '../../../components/feature/FeatureAlternatingImage'
import AboutUsConst from '../AboutUs.Const'

const AboutUsBanner = (props) => {
    const data = AboutUsConst.Banner
  return (
    <FeatureAlternatingImage {...props} sx={{display:'felx'}} data={data}  reverse='true' xstext={7} xsimage={5} />
    
  )
}

export default AboutUsBanner