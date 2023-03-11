import React from 'react'

import TrustedBrand from '../../../components/trustedBrand/TrustedBrand'
import HRServicesConst from '../HRServices.Const'

const HRServicesTrustedBrand = (props) => {
    const data = HRServicesConst.TrustedBrand
    return (
      <TrustedBrand {...props} {...data}/>
    )
}

export default HRServicesTrustedBrand