import React from 'react'

import SliderItem from '../../../components/sliderItem/SliderItem';
import { BlogsHooks } from '../hooks/Blogs.Hooks';

const BlogsBanner = (props) => {
  const hooks = BlogsHooks.useBannerHooks()
  const {data} = hooks;

  return (
    <SliderItem {...props} {...data} darksubtitle={+true} iscarousel='true'></SliderItem>
  )
}

export default BlogsBanner