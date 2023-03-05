import React from 'react'
import TrustedBrand from '../../../components/trustedBrand/TrustedBrand'
import JobSeekersConst from '../JobSeekers.Const'

const JobSeekerTrustedBrand = (props) => {
    const data = JobSeekersConst.TrustedBrand
    return (
      <TrustedBrand {...props} {...data}/>
    )
}

export default JobSeekerTrustedBrand
