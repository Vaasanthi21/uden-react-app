import React from 'react'
import TrustedBrand from '../../../components/trustedBrand/TrustedBrand'
import { BlogsConst } from '../Blogs.Const'

const HomeTrustedBrand = (props) => {
  const data = BlogsConst.TrustedBrand
  return (
    <TrustedBrand {...props} {...data}/>
  )
}

export default HomeTrustedBrand