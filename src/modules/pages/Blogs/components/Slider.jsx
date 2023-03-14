import React from 'react'
import { AppRoutes } from '../../../../utils/consts/routes';
import SliderItem from '../../../components/sliderItem/SliderItem';
import { BlogsConst } from '../Blogs.Const'

const BlogsBanner = (props) => {
  const items = BlogsConst.Blogs;
  const randIndex = Math.floor(Math.random() * items.length);
  const data={
    title:items[randIndex].title,
    subtitle:items[randIndex].body[0].paragraphs[0].substring(0,80)+"...",
    image:BlogsConst.Banner,
    action:{
        name:"Read More",
        href: AppRoutes.BLOG(items[randIndex].id),
    },
  }

  return (
    <SliderItem {...props} {...data} darksubtitle={+true} iscarousel='true'></SliderItem>
  )
}

export default BlogsBanner