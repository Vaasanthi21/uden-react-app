/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import {Swiper,SwiperSlide} from 'swiper/react'
import {  Pagination,Autoplay,EffectCreative,Navigation } from 'swiper';

import 'swiper/css';
import "swiper/css/effect-creative";
import 'swiper/css/pagination';
import "swiper/css/navigation";

import { CarouselStyles } from './styles/carousel.styles';

const Carousel = (props) => {
  return (
    <Swiper
      {...props}
      effect='creative'
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      rewind
      autoplay={props?.autoplay??{delay:5000}}
      pagination={props.pagination??{clickable:true,dynamicBullets: true}}
      navigation={props?.navigation}
      modules={[Pagination,Autoplay,EffectCreative,Navigation]}
      css={CarouselStyles.carousel}
    >
      {props.children.map((item,index)=><SwiperSlide key={index}>{item}</SwiperSlide> )}
    </Swiper>
  )
}

export default Carousel