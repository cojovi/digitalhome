import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Princing structure coming soon, for now, email for quotes',
  plans: [
    {
      id: 'oss',
      title: 'Basic Web Presence Package',
      description: 'Basic components, perfect to get started.',
      price: '$500 - $1,000 setup fee + $125 per month',
      features: [
        {
          title: 'Custom website development (up to 5 pages)',
        },
        {
          title: 'Basic maintenance and security updates',
        },
        {
          title: 'Hosting services',
        },
        {
          title: 'Basic SEO setup',
        },
        {
          title: 'Facebook Messenger Integration',
        },
        {
          title: 'Social media integration',
        },
        {
          title: 'Ideal for: Small businesses or startups needing an online presence',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Advanced Business Growth',
      description: 'For the Business looking to grow.',
      price: '$1,500 - $3,000 setup fee + $150 - $300 per month',
      isRecommended: true,
      features: [
        {
          title: 'Custom website development (up to 10 pages)',
        },
        {
          title: 'Option for e-commerce functionality',
        },
        {
          title: 'Premium hosting services',
        },
        {
          title: 'SEO optimization and Google Analytics integration',
        },
        {
          title: 'Social Media Integration & future posting',
        },
        {
          title: 'Email marketing setup and integration',
        },
        {
          title: 'CRM integration',
        },
        null,
        {
          title: 'Private one on one training',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://www.cojovi.com',
      },
    },
    {
      id: 'startup',
      title: 'Premium Enterprise Solutions',
      description: 'Tailored for comprehensive automation solutions.',
      price: $5,000 - $10,000 setup fee + $500 - $1,000 per month
      ),
      features: [
        {
          title: 'Advanced custom website and web app development',
        },
        {
          title: 'Custom AI solutions for workflow and productivity',
        },
        {
          title: 'Comprehensive SEO strategy and analytics',
        },
        {
          title: 'Complete social media suite and future posting automation',
        },
        {
          title: 'Automation and integration services for internal processes',
        },
        null,
        {
          title: 'Unlimited access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://www.cojovi.com',
      },
    },
  ],
}
