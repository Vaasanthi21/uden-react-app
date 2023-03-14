import React from 'react'
import Testimonial from '../../../components/testimonial/Testimonial'
import JobSeekersConst from '../JobSeekers.Const'

const JobSeekersTestimonial = (props) => {
    const data = JobSeekersConst.Testimonials
  return (
    <Testimonial data={data}/>
  )
}

export default JobSeekersTestimonial