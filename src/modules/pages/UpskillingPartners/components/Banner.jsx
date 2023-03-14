import React from 'react'

import UpskillingPartnersConst from '../UpskillingPartners.Const'
import SliderItem from '../../../components/sliderItem/SliderItem'

const UpskillingPartnersBanner = (props) => {
    const data = UpskillingPartnersConst.Banner
  return (
    <SliderItem {...props} {...data} darksubtitle={+true} iscarousel='true'></SliderItem>
  )
}

export default UpskillingPartnersBanner