import React from 'react'
import { RWebShare } from "react-web-share";
import { Share as ShareIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const Share = (props) => {
  return (
    <>
    <RWebShare {...props}>
        <IconButton className='uden-share-button' children={<ShareIcon/>}/>
    </RWebShare>
        
    </>
  )
}

export default Share