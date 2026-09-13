import React from 'react'

import Paragraph from '../../../../../components/paragraph/Paragraph'

const BlogBody = (props) => {
    const data = props.data;
    if (!data || !data.body) return null;
    return (
      <>
        <Paragraph data={data.body}/>
      </>
    );
}

export default BlogBody