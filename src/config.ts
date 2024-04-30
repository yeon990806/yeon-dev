import { DefaultSeoProps } from 'next-seo';

export const siteConfig = {
  url: 'https://yeon990806.github.io',
  title: 'yeon.dev',
  description: '삶의 하나하나를 기록합니다.',
  copyright: 'yeon990806 © All rights reserved.',
  since: 2024,
  googleAnalyticsId: '',
  author: {
    name: 'YeON990806',
    photo: '',
    bio: '',
    contacts: {
      email: 'bepyan@naver.com',
      github: 'bepyan',
      twitter: '__pyungan',
      velog: '@bepyan',
      linkedin: '',
      youtube: '',
      instagram: '',
    },
  },
  menus: [
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Snippets',
      path: '/snippets',
    },
    {
      label: 'Diary',
      path: '/diary',
    },
  ],
};

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: siteConfig.url,
    siteName: siteConfig.title,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteConfig.author.name,
    },
  ],
};