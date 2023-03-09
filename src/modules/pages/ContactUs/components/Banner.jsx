import React from 'react'

import SliderItem from '../../../components/sliderItem/SliderItem'
import ContactUsConst from '../ContactUs.Const'

const AboutUsBanner = (props) => {
    const data = ContactUsConst.Banner
  return (
    <SliderItem {...props} {...data} darksubtitle={+true} ></SliderItem>
    
  )
}

export default AboutUsBanner