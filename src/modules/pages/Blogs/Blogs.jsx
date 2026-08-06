import React from 'react';
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
        <BlogsBanner css={styles.banner} />
        <Divider/>
        <Spacer height/>  
        <BlogList  css={styles.list} />
        <Spacer height/> 
    </div>
  )
}

export default Blogs
