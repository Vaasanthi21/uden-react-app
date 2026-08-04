import { Box, Link } from '@mui/material'
import GPLogo from 'assets/images/g-play.png'
import { AppStrigs } from '../../../utils/consts/strings';

const GPlayLogo = props => {
    return (
        <Box {...props}>
            <Link href={AppStrigs.Liks.PLAY_STORE_APP} target="_blank" >
                <img className='child' src={GPLogo} alt="logo" />
            </Link>
        </Box>
        )
}

export default GPlayLogo