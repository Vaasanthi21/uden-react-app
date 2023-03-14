/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import { BlogsStyles as styles } from './styles/Blogs.Styles'
import Slider from './components/Slider'
import HomeTrustedBrand from './components/TrustedBrand';
import Spacer from '../../components/Spacer'
import HomeWorkFlow from './components/WorkFlow';
import HomeFeatures from './components/features/Features';
import HomeTrustedBy from './components/TrustedBy';
import HomeTestimonial from './components/Testimonial';
import StudentPlaced from './components/StudentPlaced';




const Blogs = () => {
  return (
    <div>
      BLOG PAGE 
        {/* <Slider autoplay={false} css={styles.slider}/>
        <HomeTrustedBrand css={styles.trustedBrand} />
        <Spacer height multiplier={2}/>
        <HomeWorkFlow css={styles.workFlow}/>
        <Spacer height multiplier={4}/>
        <HomeFeatures css={styles.features}/>
        <Spacer height/>
        <HomeTrustedBy/>
        <Spacer height/>
        <HomeTestimonial css={styles.testimonial} />
        <Spacer height/>
        <StudentPlaced css={styles.studentPlaced} /> */}
    </div>
  )
}

export default Blogs
