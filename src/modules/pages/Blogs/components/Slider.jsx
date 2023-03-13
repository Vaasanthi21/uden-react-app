import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import SliderItem from '../../../components/sliderItem/SliderItem';
import { BlogsConst } from '../Blogs.Const'

const Slider = (props) => {
  const items = BlogsConst.SliderItems;
  return (
    <Carousel {...props} autoplay={true} >
        {items.map((item,i)=><SliderItem  key={i} {...item} iscarousel='true'/>)}
    </Carousel>
  )
}

export default Slider