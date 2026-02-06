import type { HrefItem, JsonLdItemListSchema, FAQItem, JsonLdBlogListSchema } from '~/types';
import { getPermalink } from '~/utils/permalinks';
import { SITE } from 'astrowind:config';

export const faqSchemaBuilder = (faqs: Array<FAQItem>) => {
    return {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.title,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.description
            }
        }))
    }
};

export const itemListSchemaBuilder = (items: Array<JsonLdItemListSchema>, name: string, description: string) => {
    return {
        "@type": "ItemList",
        "name": name,
        "description": description,
        "itemListElement": items.map((item, index) => {
            return {
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE.site}${item.href}`,
                "name": item.title,
                "description": item.description
            }
        })
    }
}

export const breadcrumbSchemaBuilder = (breadcrumbs: Array<HrefItem>) => {
    return {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.label,
            "item": `${SITE.site}${getPermalink(crumb.href)}`
        }))
    }
};


export const blogListSchemaBuilder = (blogs: Array<JsonLdBlogListSchema>, description: string) => {
    return {
        "@type": "Blog",
        "name": `${SITE.name} Blog`,
        "description": description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SITE.site}${getPermalink("", "blog")}`
        },
        "blogPost": blogs.map((blog, index) => {
            return {
                "@type": "BlogPosting",
                "headline": blog.title,
                "description": blog.description,
                "url": `${SITE.site}${blog.href}`,
                "datePublished": blog.lastmod,
                "author": {
                    "@type": "Person",
                    "name": `${SITE.name} Staff`
                }
            }
        })
    }
}

export const blogArticleSchemaBuilder = (blog: JsonLdBlogListSchema) => {
    return {
        "@type": "Article",
        "headline": blog.title,
        "description": blog.description,
        "author": {
            "@type": "Person",
            "name": `${SITE.name} Staff`
        },
        "datePublished": blog.lastmod,
        "dateModified": blog.lastmod,
        "mainEntityOfPage": `${SITE.site}${blog.href}`
    }
};