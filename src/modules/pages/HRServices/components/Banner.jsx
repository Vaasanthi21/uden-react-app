import React from 'react';
import SliderItem from '../../../components/sliderItem/SliderItem';
import HRServicesConst from '../HRServices.Const';

const HRServicesBanner = (props) => {
  const data = HRServicesConst.Banner;
  return (
    <SliderItem {...props} {...data} darksubtitle={+true} iscarousel='true' />
  );
};

export default HRServicesBanner;