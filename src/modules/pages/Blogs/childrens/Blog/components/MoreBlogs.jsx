import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { AppRoutes } from '../../../../../../utils/consts/routes'
import Spacer from '../../../../../components/Spacer'
import { BlogsConst } from '../../../Blogs.Const'
import BlogCard from '../../../components/BlogCard/BlogCard'
import { BlogHooks } from '../hooks/Blog.Hooks'

const MoreBlogs = (props) => {
  const hooks = BlogHooks.useMoreBlogs(props.id)
    const {data} = hooks
    
  return (
    <Box {...props} textAlign={props.fixed?'left':null}>
        <Typography variant='h4' className='moreblogs-title' >More Blogs by UDEN</Typography>
        <Divider/>
        <Spacer height/>
        <Box display='flex' gap={2}  flexDirection={props.fixed?'row':{xs:'row',md:'column'}} height={{xs:'320px',md:'auto'}}  overflow='auto' alignItems='center' justifyContent='start'>
            {data.map((blog,i)=><Box key={i}> <BlogCard  data={blog} hidepara={+true}  height={{xs:'300px',md:'340px'}} width={props?.fixed?'250px':{xs:"250px",md:'auto',lg:'380px'}}/></Box>)}
        </Box>
        <Divider/>
        <Spacer height/>
        <Box display='flex'  justifyContent={props.fixed?'end':'center'}>
            <Button href={AppRoutes.BLOGS} size='large' variant='contained' >{BlogsConst.ViewMoreButton}</Button>
        </Box>
        
    </Box>
  )
}

export default MoreBlogs