import React from 'react'
import Testimonial from '../../../components/testimonial/Testimonial'
import UpskillingPartnersConst from '../UpskillingPartners.Const'

const UpskillingPartnersTestimonial = (props) => {
    const data = UpskillingPartnersConst.Testimonials
  return (
    <Testimonial data={data}/>
  )
}

export default UpskillingPartnersTestimonial