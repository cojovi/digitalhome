import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import siteConfig from 'data/config'

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title, description, ...props }: SEOProps) => {
  // Strategic SEO keywords list
  const seoKeywords = [
    'custom web development', 
    'SEO optimization services', 
    'workflow automation', 
    'AI integration solutions', 
    'sales funnel design', 
    'digital marketing strategies', 
    'bespoke web solutions', 
    'brand elevation', 
    'business process automation', 
    'artificial intelligence in business'
  ].join(', ');

  return (
    <NextSeo
      title={title || 'Cojovi Digital Webworx'} // Default site title
      description={description || 'Leading provider of custom web development, bespoke sales funnels, and comprehensive digital marketing services tailored to elevate your brand.'} // Default site description
      additionalMetaTags={[
        {
          name: 'keywords',
          content: seoKeywords,
        },
        {
          name: 'publisher',
          content: 'cojovi', // Site publisher
        },
        // ... other meta tags you might need
      ]}
      openGraph={{ 
        ...siteConfig.seo.openGraph, 
        title: title || 'Cojovi Digital Webworx', // Use provided title or default
        description: description || 'Leading provider of custom web development, bespoke sales funnels, and comprehensive digital marketing services tailored to elevate your brand.', // Use provided description or default
      }}
      titleTemplate={siteConfig.seo.titleTemplate}
      twitter={siteConfig.seo.twitter}
      {...props}
    />
  );
}
