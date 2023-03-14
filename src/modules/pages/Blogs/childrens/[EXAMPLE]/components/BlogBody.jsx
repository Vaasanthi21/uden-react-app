import React from 'react'
import { BlogsConst } from '../../../Blogs.Const'

import Paragraph from '../../../../../components/paragraph/Paragraph'

const BlogBody = () => {
    const id = window.location.pathname.split("/")[2]
    const data = BlogsConst.Blogs.filter((blog)=>blog.id===id)[0]
  return (
    <>
    <Paragraph data={data.body}/>
    </>
  )
}

export default BlogBody