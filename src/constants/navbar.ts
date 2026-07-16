import { IconName } from '@/components/Core'

interface NavbarType {
  id: number
  title: string
  icon: IconName
  url: string
}

export const NAVBAR: NavbarType[] = [
  {
    id: 0,
    title: 'Promotion',
    icon: 'promotion',
    url: '/promotion'
  },
  {
    id: 1,
    title: 'Affiliate',
    icon: 'affiliate',
    url: '/affiliate'
  },
  {
    id: 2,
    title: 'VIP Club',
    icon: 'vip',
    url: '/vip'
  },
  {
    id: 3,
    title: 'Blogs',
    icon: 'blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'Forum',
    icon: 'forum',
    url: '/forum'
  },
  {
    id: 5,
    title: 'Sponsorship',
    icon: 'sponsorship',
    url: '/sponsorship'
  },
  {
    id: 6,
    title: 'Live Support',
    icon: 'support',
    url: '/support'
  }
]
