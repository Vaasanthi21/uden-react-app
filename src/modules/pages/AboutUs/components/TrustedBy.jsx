import React from 'react'

import TrustedBy from '../../../components/trustedBy/TrustedBy'
import AboutUsConst from '../AboutUs.Const'

const AboutUsTrustedBy = (props) => {
    const data = AboutUsConst.TrustedBy
    return (
      <TrustedBy {...props} data={data}/>
    )
}

export default AboutUsTrustedBy