/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Avatar, Box, Button, Card, Chip, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { AppAssets } from '../../../utils/consts/app_assets'
import { AppColors } from '../../../utils/consts/app_colors'
import Carousel from '../../components/carousel/Carousel'
import Slider from './components/slider/Slider'
import TrustedBrand from './components/TrustedBrand';

import { HomeStyles as styles } from './styles/Home.Styles'
import Spacer from '../../components/Spacer'
import WorkFlow from './components/WorkFlow';
import Features from './components/features/Features';
import TrustedBy from './components/TrustedBy';




const Home = () => {
  return (
    <div>
        <Slider autoplay={false} css={styles.slider}/>
        <Divider/>
        <TrustedBrand css={styles.trustedBrand} />
        <Spacer height multiplier={2}/>
        <WorkFlow css={styles.workFlow}/>
        <Spacer height multiplier={4}/>
        <Features css={styles.features}/>
        <Spacer height multiplier={2}/>
        <TrustedBy css={styles.trustedBy}/>

    </div>
  )
}

export default Home
