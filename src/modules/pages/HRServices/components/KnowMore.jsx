import React from 'react'
import KnowMore from '../../../components/knowMore/KnowMore'
import HRServicesConst from '../HRServices.Const'

const HRServicesKnowMore = (props) => {
    const data = HRServicesConst.KnowMore
  return (
    <KnowMore {...props} data={data}/>
  )
}   

export default HRServicesKnowMore