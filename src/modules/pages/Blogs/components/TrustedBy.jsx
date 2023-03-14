import React from 'react'
import TrustedBy from '../../../components/trustedBy/TrustedBy'
import { BlogsConst } from '../Blogs.Const'

const HomeTrustedBy = (props) => {
    const data = BlogsConst.TrustedBy
  return (
    <TrustedBy {...props} data={data}/>
  )
}

export default HomeTrustedBy