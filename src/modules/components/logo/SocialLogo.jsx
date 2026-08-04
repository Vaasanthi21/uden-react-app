import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, IconButton} from '@mui/material'
import { AppStrigs } from '../../../utils/consts/strings';

const SocialLogo = props => {
    
    return (
        <Box {...props} justifyContent="center">
          <IconButton className='social-button' sx={{display:props?.isFacebook===false?'none':'flex'}} href={AppStrigs.Liks.UDEN_FACEBOOK} target="_blank"><Facebook /></IconButton>
          <IconButton className='social-button' sx={{display:props?.isInstragram===false?'none':'flex'}} href={AppStrigs.Liks.UDEN_INSTAGRAM} target="_blank"><Instagram /></IconButton>
          <IconButton className='social-button' sx={{display:props?.isLinkedIn===false?'none':'flex'}} href={AppStrigs.Liks.UDEN_LINKEDIN} target="_blank"><LinkedIn /></IconButton>
    </Box>
      )
}

export default SocialLogo