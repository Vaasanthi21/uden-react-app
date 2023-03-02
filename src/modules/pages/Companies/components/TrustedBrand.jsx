import React from 'react'

import TrustedBrand from '../../../components/trustedBrand/TrustedBrand'
import CompaniesConst from '../Companies.Const'

const CompaniesTrustedBrand = (props) => {
    const data = CompaniesConst.TrustedBrand
    return (
      <TrustedBrand {...props} {...data}/>
    )
}

export default CompaniesTrustedBrand