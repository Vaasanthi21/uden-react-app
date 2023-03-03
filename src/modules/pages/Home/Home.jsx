/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider} from '@mui/material'


import Slider from './components/Slider'
import HomeTrustedBrand from './components/TrustedBrand';
import { HomeStyles as styles } from './styles/Home.Styles'
import Spacer from '../../components/Spacer'
import HomeWorkFlow from './components/WorkFlow';
import HomeFeatures from './components/Features';
import TrustedBy from './components/TrustedBy';
import HomeTestimonial from './components/testimonial/Testimonial';
import StudentPlaced from './components/StudentPlaced';




const Home = () => {
  return (
    <div>
        <Slider autoplay={false} css={styles.slider}/>
        <Divider/>
        <HomeTrustedBrand css={styles.trustedBrand} />
        <Divider/>
        <Spacer height multiplier={2}/>
        <HomeWorkFlow css={styles.workFlow}/>
        <Spacer height multiplier={4}/>
        <HomeFeatures css={styles.features}/>
        <Divider/>
        <Spacer height/>
        <TrustedBy css={styles.trustedBy}/>
        <Divider/>
        <Spacer height/>
        <HomeTestimonial css={styles.testimonial} />
        <Spacer height/>
        <Divider/>
        <StudentPlaced css={styles.studentPlaced} />
    </div>
  )
}

export default Home
