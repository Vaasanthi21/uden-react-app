import React from 'react'
import Testimonial from '../../../components/testimonial/Testimonial'
import { HomeConst } from '../Home.Const'

const HomeTestimonial = (props) => {
    const data = HomeConst.Testimonial;
  return (
    <Testimonial data={data}/>
  )
}

export default HomeTestimonial