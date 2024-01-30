import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Princing structure coming soon, for now, email for quotes',
  plans: [
    {
      id: 'oss',
      title: 'Standard Package:Enchanters Essential',
      description: 'Basic compoents, perfect to get started.',
      price: 'TBD',
      features: [
        {
          title: '2 Way Text & Email Conversation',
        },
        {
          title: 'GMB Messaging',
        },
        {
          title: 'Web Chat',
        },
        {
          title: 'Reputation Management',
        },
        {
          title: 'Facebook Messenger',
        },
        {
          title: 'GMB Call Tracking',
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Professional Package:Technomancers Tools',
      description: 'Complete for small teams.',
      price: 'TBD',
      isRecommended: true,
      features: [
        {
          title: 'Calender / Planner',
        },
        {
          title: 'CRM',
        },
        {
          title: 'Opportunities Webapp',
        },
        {
          title: 'Email Marketing',
        },
        {
          title: 'Social Media future posting',
        },
        {
          title: 'Private discord community',
        },
        {
          title: '1 year of updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://www.cojovi.com',
      },
    },
    {
      id: 'startup',
      title: 'Premium Package:Archmages Arsenal',
      description: 'Unlimited add-ons and support for growing teams.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            TBD
          </Text>
          <Text>TBD-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited projects',
        },
        {
          title: 'Campaigns, Blogs, Triggers',
        },
        {
          title: 'Social Planner',
        },
        {
          title: 'Forms, Surveys, Memberships, & Funnels',
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
