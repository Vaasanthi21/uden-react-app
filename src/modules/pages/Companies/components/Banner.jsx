import React from 'react'
import SliderItem from '../../../components/sliderItem/SliderItem'
import CompaniesConst from '../Companies.Const'

const CompaniesBanner = (props) => {
    const data = CompaniesConst.Banner
  return (
    <SliderItem {...props} {...data} darksubtitle={+true}></SliderItem>
  )
}

export default CompaniesBanner