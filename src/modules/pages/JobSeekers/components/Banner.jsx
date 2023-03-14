import React from 'react'
import SliderItem from '../../../components/sliderItem/SliderItem'
import JobSeekersConst from '../JobSeekers.Const'

const JobSeekerBanner = (props) => {
    const data = JobSeekersConst.Banner
  return (
    <SliderItem {...props} {...data} darksubtitle={+true} iscarousel='true'></SliderItem>
  )
}

export default JobSeekerBanner