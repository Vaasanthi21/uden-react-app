import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { AppRoutes } from '../../../../../../utils/consts/routes'
import Spacer from '../../../../../components/Spacer'
import { BlogsConst } from '../../../Blogs.Const'
import BlogCard from '../../../components/BlogCard/BlogCard'

const MoreBlogs = (props) => {
    const blogs = BlogsConst.Blogs
    const id = props.id;
    const data = blogs.filter((blog)=>blog.id!==id)
    

  return (
    <Box {...props} textAlign={props.fixed?'left':null}>
        <Typography variant='h4' >More Blogs by UDEN</Typography>
        <Divider/>
        <Spacer height/>
        <Box display='flex' gap={4}  flexDirection={props.fixed?'row':{xs:'row',md:'column'}} height={{xs:'300px',md:'auto'}} overflow='scroll' alignItems='center' justifyContent={{xs:'start',md:'center'}}>
            {data.map((blog,i)=><Box key={i}> <BlogCard  data={blog} hidepara={+true} imageheight='150px' height={{xs:'250px',md:'280px'}} width={props.fixed?'250px':{xs:"250px",md:'auto',lg:'380px'}}/></Box>)}
        </Box>
        <Divider/>
        <Spacer height/>
        <Box display='flex' justifyContent={props.fixed?'end':'center'}>
            <Button href={AppRoutes.BLOGS} size='large' variant='contained' >{BlogsConst.ViewMoreButton}</Button>
        </Box>
        
    </Box>
  )
}

export default MoreBlogs