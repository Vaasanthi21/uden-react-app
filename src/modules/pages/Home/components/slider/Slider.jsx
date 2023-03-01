import React from 'react'
import Carousel from '../../../../components/carousel/Carousel'
import { HomeConst } from '../../Home.Const'
import SliderItems from './SliderItems';

const Slider = (props) => {
  const items = HomeConst.SliderItems;
  return (
    <Carousel {...props} >
        {items.map((item,i)=><SliderItems className="slider-items" key={i} {...item}/>)}
    </Carousel>
  )
}

export default Slider