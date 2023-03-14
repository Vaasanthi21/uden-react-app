import { Box } from '@mui/material'
import React from 'react'

const Spacer = (props) => {
    const baseSize = 10;
    const multiplier = props.multiplier??1;
    const size = (multiplier)*baseSize;
  return (
    <Box sx={{height:props?.height===true?{
            xs:`${size+baseSize}px`,
            sm:`${size+baseSize}px`,
            md:`${size+(baseSize*2)}px`,
            lg:`${size+(baseSize*3)}px`,
            xl:`${size+(baseSize*4)}px`
        }:null,
        width:props?.width===true?{
            xs:`${size}px`,
            sm:`${size+baseSize}px`,
            md:`${size+(baseSize*2)}px`,
            lg:`${size+(baseSize*3)}px`,
            xl:`${size+(baseSize*4)}px`
        }:null
    }}/>
  )
}

export default Spacer