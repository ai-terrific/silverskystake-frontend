import { IconName } from '@/components/Core'

interface ItemType {
  icon: IconName
  link: string
  label: string
}

export const PROFILE_ITEMS: ItemType[] = [
  {
    icon: 'wallet',
    link: '/wallet',
    label: 'Wallet'
  },
  {
    icon: 'vault',
    link: '/vault',
    label: 'Vault'
  },
  {
    icon: 'user',
    link: '/vip',
    label: 'VIP'
  },
  {
    icon: 'add-user',
    link: '/affiliate',
    label: 'Affiliate'
  },
  {
    icon: 'chart',
    link: '/statistics',
    label: 'Statistics'
  },
  {
    icon: 'note',
    link: '/transactions',
    label: 'Transactions'
  },
  {
    icon: 'bet',
    link: '/bet',
    label: 'My Bets'
  },
  {
    icon: 'setting',
    link: '/setting/account',
    label: 'Setting'
  },
  {
    icon: 'world',
    link: '/stake',
    label: 'Stake Smart'
  },
  {
    icon: 'headphone',
    link: '/support',
    label: 'Live Support'
  },
  {
    icon: 'log-out',
    link: '/',
    label: 'Log out'
  }
]
