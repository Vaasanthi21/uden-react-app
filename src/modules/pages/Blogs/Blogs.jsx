/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import { BlogsStyles as styles } from './styles/Blogs.Styles'
import BlogsBanner from './components/Slider'
import BlogList from './components/TrustedBrand';
import Spacer from '../../components/Spacer'
import { Divider } from '@mui/material';




const Blogs = () => {
  return (
    <div>
        <BlogsBanner />
        <Divider/>
        <Spacer height/>  
        <BlogList  />
        <Spacer height/> 
        {/* <Spacer height multiplier={2}/> */}
        {/* <HomeWorkFlow css={styles.workFlow}/> */}
        {/* <Spacer height multiplier={4}/> */}
        {/* <HomeFeatures css={styles.features}/> */}
        {/* <Spacer height/> */}
        {/* <HomeTrustedBy/> */}
        {/* <Spacer height/> */}
        {/* <HomeTestimonial css={styles.testimonial} /> */}
        {/* <Spacer height/> */}
        {/* <StudentPlaced css={styles.studentPlaced} /> */}
    </div>
  )
}

export default Blogs
