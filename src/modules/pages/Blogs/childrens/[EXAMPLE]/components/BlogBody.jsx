import React from 'react'

import Paragraph from '../../../../../components/paragraph/Paragraph'

const BlogBody = (props) => {
    const data = props.data
  return (
    <>
    <Paragraph data={data.body}/>
    </>
  )
}

export default BlogBody