import React from 'react'
import KnowMore from '../../../components/knowMore/KnowMore'
import CompaniesConst from '../Companies.Const'

const CompaniesKnowMore = (props) => {
    const data = CompaniesConst.KnowMore
  return (
    <KnowMore {...props} data={data}/>
  )
}   

export default CompaniesKnowMore