import React from 'react'
import KnowMore from '../../../components/knowMore/KnowMore'
import JobSeekersConst from '../JobSeekers.Const'

const JobSeekersKnowMore = (props) => {
    const data = JobSeekersConst.KnowMore
  return (
    <KnowMore {...props} data={data}/>
  )
}

export default JobSeekersKnowMore