import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'

import TermsAndConditionsConst from '../TermsAndConditions.Const'

const TermsAndConditionsComponent = (props) => {
    const data = TermsAndConditionsConst
  return (
    <Grid {...props} container>
      <Grid item xs={11} md={10} lg={8}>
        <Typography variant='h4' className='terms-title' >{data.title}</Typography>
        <Spacer height/>
        <Items data={data.items}/>
        
      </Grid>
    </Grid>
    
  )
}

export default TermsAndConditionsComponent


const Items = (props) => {
  return (
    <>
    {props.data.map((item,itemIndex)=>
    <Box key={"item"+itemIndex.toString()}>
      <Typography key={itemIndex} variant='h6' className='terms-paragraph-title' >{item.title}</Typography>
      {item.paragraphs.map((para, paraIndex) =>
          <Box mb={4} key={"para"+paraIndex.toString()}>
            {typeof para==='string'?
            <Typography key={paraIndex} variant='body1' className='terms-paragraph' >{para}</Typography>
            :para?.link && <Typography key={"paraLink"+paraIndex.toString()} variant='body1' className='terms-paragraph' >{para?.link()}</Typography>}
            {para?.bullets && <Box>
              {para?.bullets?.title && <Typography variant='body1' className='terms-sub-paragraph-title' >{para?.bullets?.title}</Typography>}
              {para?.bullets?.paragraphs && para?.bullets?.paragraphs.map((bulletPara,bulletParaIndex) => 
              <Box key={"bullet"+bulletParaIndex.toString()} ml={2}>
                {typeof bulletPara==='string'
                ?<Typography variant='body1' className='terms-sub-paragraph' >{`${bulletParaIndex+1}. ${bulletPara}`}</Typography>
                :bulletPara?.link && <Typography key={paraIndex} variant='body1' className='terms-sub-paragraph-items' >{bulletPara?.link(bulletParaIndex+1)}</Typography>}
                {bulletPara?.title && <Typography key={paraIndex} id={bulletPara?.id} variant='body1' className='terms-sub-paragraph-title' >{`${bulletParaIndex+1}. ${bulletPara.title}`}</Typography>}
                {bulletPara?.paragraphs && bulletPara?.paragraphs.map((subBulletPara,subBulletParaIndex) =>
                <Box key={"subBulletPara"+subBulletParaIndex.toString()} ml={4}>
                  {typeof subBulletPara==='string'
                  ?<Typography variant='body1' className='terms-sub-paragraph-items' >{`${subBulletParaIndex+1}. ${subBulletPara}`}</Typography>
                  :<Typography variant='body1' className='terms-sub-paragraph-items' >{subBulletPara?.link(subBulletParaIndex+1)}</Typography>}
                </Box>
                )}
              </Box>
              
              )}
              </Box>}
              {para?.subtitle && <Box>
              {para?.subtitle?.title && <Typography variant='body1' className='terms-sub-paragraph-title' >{para?.subtitle?.title}</Typography>}
              {para?.subtitle?.paragraphs!==null && para?.subtitle?.paragraphs.map((subTitlePara,subTitleIndex) => 
              <Box key={"subTitlePara"+subTitleIndex.toString()} ml={2}>
                {typeof subTitlePara==='string'
                ?<Typography variant='body1' className='terms-sub-paragraph' >{para?.subtitle?.bullets?`${subTitleIndex+1}. ${subTitlePara}`:subTitlePara}</Typography>
                :subTitlePara.link && <Typography variant='body1' className='terms-sub-paragraph' >{para?.subtitle?.bullets?subTitlePara.link(subTitleIndex+1):subTitlePara.link()}</Typography>}
                {subTitlePara?.title && <Typography key={paraIndex} variant='body1' className='terms-sub-paragraph-title' >{para?.subtitle?.bullets?`${subTitleIndex+1}. ${subTitlePara?.title}`:subTitlePara?.title}</Typography>}
                {subTitlePara?.paragraphs && subTitlePara?.paragraphs.map((subTitleSubPara,subTitleSubParaIndex) =>
                <Box key={"subTitleSubPara"+subTitleSubParaIndex.toString()} ml={4}>
                  {typeof subTitleSubPara==='string'
                  ?<Typography variant='body2' className='terms-sub-paragraph-items' >{subTitleSubParaIndex}</Typography>
                  :subTitleSubPara?.link && <Typography  variant='body2' className='terms-sub-paragraph-items' >{subTitleSubPara?.link(subTitleSubParaIndex+1)}</Typography>}
                </Box>
                )}
              </Box>
              
              )}
              </Box>}
          </Box>)}
    </Box>

      )}
    </>
  )
}

