import React from 'react'

import Testimonial from '../../../components/testimonial/Testimonial'
import HRServicesConst from '../HRServices.Const';

const HRServicesTestimonial = (props) => {
    const data = HRServicesConst.Testimonials;
  return (
    <Testimonial data={data}/>
  )
}

export default HRServicesTestimonial