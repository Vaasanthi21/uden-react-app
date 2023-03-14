/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import { Typography } from '@mui/material'
import { Box } from '@mui/system'
// eslint-disable-next-line
import React from 'react'
import ParagraphStyles from './Paragraph.Styles'



const Paragraph = (props) => {
  return (
    <>
    {props.data.map((item,itemIndex)=>
    <Box {...props} css={ParagraphStyles} key={"item"+itemIndex.toString()}>
      <Typography key={itemIndex} variant='h6' className='paragraph-title' >{item.title}</Typography>
      {item.paragraphs.map((para, paraIndex) =>
          <Box mb={4} key={"para"+paraIndex.toString()}>
            {typeof para==='string'?
            <Typography key={paraIndex} variant='body1' className='paragraph' >{para}</Typography>
            :para?.link && <Typography key={"paraLink"+paraIndex.toString()} variant='body1' className='paragraph' >{para?.link()}</Typography>}
            {para?.bullets && <Box>
              {para?.bullets?.title && <Typography variant='body1' className='sub-paragraph-title' >{para?.bullets?.title}</Typography>}
              {para?.bullets?.paragraphs && para?.bullets?.paragraphs.map((bulletPara,bulletParaIndex) => 
              <Box key={"bullet"+bulletParaIndex.toString()} ml={2}>
                {typeof bulletPara==='string'
                ?<Typography variant='body1' className='sub-paragraph' >{`${bulletParaIndex+1}. ${bulletPara}`}</Typography>
                :bulletPara?.link && <Typography key={paraIndex} variant='body1' className='sub-paragraph-items' >{bulletPara?.link(bulletParaIndex+1)}</Typography>}
                {bulletPara?.title && <Typography key={paraIndex} id={bulletPara?.id} variant='body1' className='sub-paragraph-title' >{`${bulletParaIndex+1}. ${bulletPara.title}`}</Typography>}
                {bulletPara?.paragraphs && bulletPara?.paragraphs.map((subBulletPara,subBulletParaIndex) =>
                <Box key={"subBulletPara"+subBulletParaIndex.toString()} ml={4}>
                  {typeof subBulletPara==='string'
                  ?<Typography variant='body1' className='sub-paragraph-items' >{`${subBulletParaIndex+1}. ${subBulletPara}`}</Typography>
                  :<Typography variant='body1' className='sub-paragraph-items' >{subBulletPara?.link(subBulletParaIndex+1)}</Typography>}
                </Box>
                )}
              </Box>
              
              )}
              </Box>}
              {para?.subtitle && <Box>
              {para?.subtitle?.title && <Typography variant='body1' className='sub-paragraph-title' >{para?.subtitle?.title}</Typography>}
              {para?.subtitle?.paragraphs!==null && para?.subtitle?.paragraphs.map((subTitlePara,subTitleIndex) => 
              <Box key={"subTitlePara"+subTitleIndex.toString()} ml={2}>
                {typeof subTitlePara==='string'
                ?<Typography variant='body1' className='sub-paragraph' >{para?.subtitle?.bullets?`${subTitleIndex+1}. ${subTitlePara}`:subTitlePara}</Typography>
                :subTitlePara.link && <Typography variant='body1' className='sub-paragraph' >{para?.subtitle?.bullets?subTitlePara.link(subTitleIndex+1):subTitlePara.link()}</Typography>}
                {subTitlePara?.title && <Typography key={paraIndex} variant='body1' className='sub-paragraph-title' >{para?.subtitle?.bullets?`${subTitleIndex+1}. ${subTitlePara?.title}`:subTitlePara?.title}</Typography>}
                {subTitlePara?.paragraphs && subTitlePara?.paragraphs.map((subTitleSubPara,subTitleSubParaIndex) =>
                <Box key={"subTitleSubPara"+subTitleSubParaIndex.toString()} ml={4}>
                  {typeof subTitleSubPara==='string'
                  ?<Typography variant='body2' className='sub-paragraph-items' >{subTitleSubParaIndex}</Typography>
                  :subTitleSubPara?.link && <Typography  variant='body2' className='sub-paragraph-items' >{subTitleSubPara?.link(subTitleSubParaIndex+1)}</Typography>}
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

export default Paragraph