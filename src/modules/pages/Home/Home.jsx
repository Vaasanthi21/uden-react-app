/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider} from '@mui/material'


import Slider from './components/Slider'
import HomeTrustedBrand from './components/TrustedBrand';
import { HomeStyles as styles } from './styles/Home.Styles'
import Spacer from '../../components/Spacer'
import WorkFlow from './components/WorkFlow';
import Features from './components/features/Features';
import TrustedBy from './components/TrustedBy';
import Testimonial from './components/testimonial/Testimonial';
import StudentPlaced from './components/StudentPlaced';




const Home = () => {
  return (
    <div>
        <Slider autoplay={false} css={styles.slider}/>
        <Divider/>
        <HomeTrustedBrand css={styles.trustedBrand} />
        <Divider/>
        <Spacer height multiplier={2}/>
        <WorkFlow css={styles.workFlow}/>
        <Spacer height multiplier={4}/>
        <Features css={styles.features}/>
        <Divider/>
        <Spacer height/>
        <TrustedBy css={styles.trustedBy}/>
        <Divider/>
        <Testimonial css={styles.testimonial} />
        <Divider/>
        <StudentPlaced css={styles.studentPlaced} />
    </div>
  )
}

export default Home
