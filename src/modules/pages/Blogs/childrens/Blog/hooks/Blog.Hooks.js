import { BlogsConst } from "../../../Blogs.Const"



const useBlog = () => {
    const id = window.location.pathname.split("/")[2]
    const data = BlogsConst.Blogs.filter((blog)=>blog.id===id)[0]
    return {data,id}
}

const useMoreBlogs = (props) => {
    const blogs = BlogsConst.Blogs
    const id = props;
    const data = blogs.filter((blog)=>blog.id!==id)
    return{id,data}
}


export const BlogHooks = {
    useBlog,
    useMoreBlogs
}