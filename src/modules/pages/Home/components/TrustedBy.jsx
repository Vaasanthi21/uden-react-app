import React from 'react'
import TrustedBy from '../../../components/trustedBy/TrustedBy'
import { HomeConst } from '../Home.Const'

const HomeTrustedBy = (props) => {
    const data = HomeConst.TrustedBy
  return (
    <TrustedBy {...props} data={data}/>
  )
}

export default HomeTrustedBy