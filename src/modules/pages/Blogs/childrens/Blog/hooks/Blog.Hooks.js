import { BlogsConst } from "../../../Blogs.Const"



const useBlog = () => {
    const rawSlug = window.location.pathname.split("/")[2] || "";
    const cleanRaw = decodeURIComponent(rawSlug).trim();

    // 1. Direct exact match
    let data = BlogsConst.Blogs.find((blog) => blog.id === cleanRaw);
    let resolvedId = cleanRaw;

    if (!data && cleanRaw) {
      // 2. Match by unique hex/numeric identifier (e.g. 5943d2beb4ef, 704dbab5f0eb, 175664951461)
      const hashMatch = cleanRaw.match(/([a-f0-9]{10,14})$/i);
      if (hashMatch) {
        const hash = hashMatch[1].toLowerCase();
        data = BlogsConst.Blogs.find((blog) => blog.id.toLowerCase().includes(hash));
      }

      // 3. Match normalized alphanumeric (ignoring hyphens, underscores, spaces)
      if (!data) {
        const alphaNumRaw = cleanRaw.replace(/[^a-z0-9]/gi, '').toLowerCase();
        data = BlogsConst.Blogs.find((blog) => blog.id.replace(/[^a-z0-9]/gi, '').toLowerCase() === alphaNumRaw);
      }

      // 4. Substring keywords fallback
      if (!data) {
        const lower = cleanRaw.toLowerCase();
        if (lower.includes('cloud')) {
          data = BlogsConst.Blogs.find((blog) => blog.id.includes('cloud-computing'));
        } else if (lower.includes('onboarding') || lower.includes('delay')) {
          data = BlogsConst.Blogs.find((blog) => blog.id.includes('managing-delayed-onboarding'));
        } else if (lower.includes('startup') || lower.includes('hiring')) {
          data = BlogsConst.Blogs.find((blog) => blog.id.includes('startup-hiring'));
        } else if (lower.includes('placement') || lower.includes('tier-2') || lower.includes('report')) {
          data = BlogsConst.Blogs.find((blog) => blog.id.includes('tier-2-3-college-placement'));
        }
      }

      if (data) {
        resolvedId = data.id;
      }
    }

    return { data, id: resolvedId || cleanRaw };
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