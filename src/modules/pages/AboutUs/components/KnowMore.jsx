import React from 'react'
import KnowMore from '../../../components/knowMore/KnowMore'
import UpskillingPartnersConst from '../AboutUs.Const'

const UpskillingPartnersKnowMore = (props) => {
    const data = UpskillingPartnersConst.KnowMore
  return (
    <KnowMore {...props} data={data}/>
  )
}

export default UpskillingPartnersKnowMore