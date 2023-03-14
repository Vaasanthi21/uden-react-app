import React from 'react'
import TrustedBrand from '../../../components/trustedBrand/TrustedBrand'
import { HomeConst } from '../Home.Const'

const HomeTrustedBrand = (props) => {
  const data = HomeConst.TrustedBrand
  return (
    <TrustedBrand {...props} {...data}/>
  )
}

export default HomeTrustedBrand