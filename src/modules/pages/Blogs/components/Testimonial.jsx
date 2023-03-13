import React from 'react'
import Testimonial from '../../../components/testimonial/Testimonial'
import { BlogsConst } from '../Blogs.Const'

const HomeTestimonial = (props) => {
    const data = BlogsConst.Testimonial;
  return (
    <Testimonial data={data}/>
  )
}

export default HomeTestimonial