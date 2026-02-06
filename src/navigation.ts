import { getPermalink, getBlogPermalink, getAsset, getAppLoginPermalink, FAVICON_URL } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
  ],
  actions: [{ text: 'Log In', href: getAppLoginPermalink(), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Support', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help Center', href: getPermalink('/help')},
        { text: 'Blog', href: getBlogPermalink()},
      ],
    },
    {
      title: 'Get to Know Us',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact Sales', href: '#' },
        { text: 'Join Discord', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="size-5 md:size-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-xs" src="${FAVICON_URL}" alt="Brand logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Brand</a> · All rights reserved.
  `,
};
