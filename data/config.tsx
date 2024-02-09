import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Cojovi Digital Webworx',
    description: 'Leading provider of custom web development, bespoke sales funnels, and comprehensive digital marketing services tailored to elevate your brand.',
    keywords: 'web development, digital marketing, sales funnels, custom web design, SEO, branding', // Add your keywords here
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://twitter.com/">CojoviDigital</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:cody@cojovi.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/cojovi',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building your empire',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
