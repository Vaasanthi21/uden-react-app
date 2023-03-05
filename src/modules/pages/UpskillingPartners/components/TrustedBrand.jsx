import React from 'react'

import TrustedBrand from '../../../components/trustedBrand/TrustedBrand'
import UpskillingPartnersConst from '../UpskillingPartners.Const'

const UpskillingPartnersTrustedBrand = (props) => {
    const data = UpskillingPartnersConst.TrustedBrand
    return (
      <TrustedBrand {...props} {...data}/>
    )
}

export default UpskillingPartnersTrustedBrand