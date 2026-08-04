import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = (props) => {
  const childrenArray = React.Children.toArray(props.children);

  return (
    <div style={{ width: '100%', minHeight: '300px' }}>
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
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={props.pagination ?? { clickable: true, dynamicBullets: true }}
        navigation={props?.navigation}
        modules={[Pagination, Autoplay, EffectCreative, Navigation]}
      >
        {childrenArray.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;