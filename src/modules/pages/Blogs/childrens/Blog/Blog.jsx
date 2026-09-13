/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'
import { Box, Divider, Grid, Button, Typography } from '@mui/material'

import Spacer from '../../../../components/Spacer'
import BlogBody from './components/BlogBody'
import BlogTitle from './components/BlogTitle'
import MoreBlogs from './components/MoreBlogs'
import BlogInternalHubLinks from './components/BlogInternalHubLinks'
import BlogStyles from './styles/Blog.Styles'
import { BlogHooks } from './hooks/Blog.Hooks';

export const Blog = () => {
  const hooks = BlogHooks.useBlog();
  const {id,data} = hooks;

  React.useEffect(() => {
    if (!data || !data.title) {
      document.title = 'UDEN Career Insights | Article';
      return;
    }
    
    const blogMetaOverrides = {
      'managing-delayed-onboarding-strategies-for-students-704dbab5f0eb': {
        title: 'Managing Campus Onboarding Delays [2026 Guide] | UDEN',
        description: 'Facing a delayed job offer? Focus on AWS/AI certifications, freelance projects, and AI mock interview readiness while you wait to onboard.'
      },
      'build-a-career-in-cloud-computing-5943d2beb4ef': {
        title: 'How to Build a Career in Cloud Computing & GenAI | UDEN',
        description: 'Master AWS, GCP, Azure, Docker, Kubernetes and generative AI model hosting to access 150,000+ cloud computing jobs.'
      },
      'builda-career-in-cloud-computing-5943d2beb4ef': {
        title: 'How to Build a Career in Cloud Computing & GenAI | UDEN',
        description: 'Master AWS, GCP, Azure, Docker, Kubernetes and generative AI model hosting to access 150,000+ cloud computing jobs.'
      },
      'builda-career-in-cloud-computing5943d2beb4ef': {
        title: 'How to Build a Career in Cloud Computing & GenAI | UDEN',
        description: 'Master AWS, GCP, Azure, Docker, Kubernetes and generative AI model hosting to access 150,000+ cloud computing jobs.'
      },
      'startup-hiring-trend-in-2022-175664951461': {
        title: 'AI-Driven Startup Hiring Trends 2026: Top Skills | UDEN',
        description: 'Startups in Tier 2/3 cities are hiring AI/ML, full-stack and DevOps engineers with 45%+ growth. See which skills are in demand.'
      }
    };

    const override = blogMetaOverrides[id];
    const postTitle = override ? override.title : `${data.title} | UDEN Career Insights`;
    const postDescription = override ? override.description : (data.summary || data.title);
    const postImage = data.image ? `https://uden.tech${data.image}` : "https://uden.tech/og-banner.png";
    const postCanonical = `https://uden.tech/blogs/${id}`;

    document.title = postTitle;

    const setMeta = (nameAttr, nameVal, content) => {
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameAttr, nameVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", postDescription);
    setMeta("property", "og:title", postTitle);
    setMeta("property", "og:description", postDescription);
    setMeta("property", "og:url", postCanonical);
    setMeta("property", "og:image", postImage);
    setMeta("property", "twitter:title", postTitle);
    setMeta("property", "twitter:description", postDescription);
    setMeta("property", "twitter:url", postCanonical);
    setMeta("property", "twitter:image", postImage);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", postCanonical);

    let schemaScript = document.getElementById("blogposting-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "blogposting-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      "headline": postTitle,
      "image": postImage,
      "author": {
        "@type": "Organization",
        "name": data.publisher || "UDEN",
        "url": "https://uden.tech"
      },
      "publisher": {
        "@type": "Organization",
        "name": "UDEN",
        "url": "https://uden.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://uden.tech/og-banner.png"
        }
      },
      "datePublished": data.published || "2026-08-01",
      "dateModified": data.published || "2026-08-01",
      "description": postDescription,
      "articleBody": (data.sections && data.sections[0] ? data.sections[0].paragraphs?.join(' ') : '') || data.summary || postDescription
    };
    schemaScript.text = JSON.stringify(schemaData);
  }, [id, data]);

  if (!data) {
    return (
      <Box css={BlogStyles.main} sx={{ py: 10, textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1E293B', mb: 2 }}>
          Article Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748B', mb: 4, maxWidth: '500px', mx: 'auto' }}>
          The article you are looking for does not exist or may have been moved.
        </Typography>
        <Button 
          variant="contained" 
          href="/blogs" 
          sx={{ background: '#F55825', borderRadius: '12px', px: 4, py: 1.5, fontWeight: 700, textTransform: 'none', '&:hover': { background: '#D94616' } }}
        >
          Browse All Articles
        </Button>
      </Box>
    );
  }

  return (
    <Box css={BlogStyles.main} >
      <Spacer height />
      <Grid container className='blog-main-grid'>
        <Grid item xs={11} sm={10} md={8} lg={7} xl={6} className='blog-sub-grid1'>
          <BlogTitle css={BlogStyles.blogTitle} data={data} />
          <BlogBody css={BlogStyles.blogBody} data={data}/>
          <BlogInternalHubLinks />
        </Grid>
        <Grid container item pl={2} display={{xs:'none',md:'block'}}  xs={11} sm={10} rowGap={4}  md={3} lg={4} xl={4} ml={2} className='blog-sub-grid2' >
            <MoreBlogs css={BlogStyles.moreBlogs} id={id}/>
        </Grid>
      </Grid>
      <Divider/>
      <MoreBlogs css={BlogStyles.moreBlogs} id={id} fixed={+true} width={{xs:'90%'}}/>
      <Spacer height />
    </Box>
  )
}

export default Blog;
