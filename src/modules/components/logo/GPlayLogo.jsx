import { Link } from '@mui/material'
import React from 'react'
import GPLogo from '../../../assets/images/g-play.png'
import { AppStrigs } from '../../../utils/consts/strings'

const GPlayLogo = (props) => {
    return (
        <Link href={AppStrigs.Liks.PLAY_STORE_APP} target="_blank" {...props}>
            <img src={GPLogo} alt="logo" />
        </Link>
        
      )
}

export default GPlayLogo