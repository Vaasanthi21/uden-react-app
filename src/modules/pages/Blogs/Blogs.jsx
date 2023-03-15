/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import { BlogsStyles as styles } from './styles/Blogs.Styles'
import BlogsBanner from './components/BlogsBanner'
import BlogList from './components/BlogsList';
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
    </div>
  )
}

export default Blogs
