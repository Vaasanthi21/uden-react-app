import { AppRoutes } from "../../../../utils/consts/routes";
import { BlogsConst } from "../Blogs.Const";


const useBannerHooks = ()=>{
    const items = BlogsConst.Blogs;
    const randIndex = Math.floor(Math.random() * items.length);
    const data={
      title:items[randIndex].title,
      subtitle:items[randIndex].body[0].paragraphs[0].substring(0,80)+"...",
      image:BlogsConst.Banner,
      action:{
          name:"Read More",
          href: AppRoutes.BLOG(items[randIndex].id),
      },
    }
    return{data}
}



export const BlogsHooks = {
    useBannerHooks
}