import React from 'react'

import Testimonial from '../../../components/testimonial/Testimonial'
import CompaniesConst from '../Companies.Const';

const CompaniesTestimonial = (props) => {
    const data = CompaniesConst.Testimonials;
  return (
    <Testimonial data={data}/>
  )
}

export default CompaniesTestimonial