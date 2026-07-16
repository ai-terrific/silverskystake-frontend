import { IconName } from '@/components/Core'

interface IconType {
  icon: IconName
  label: string
}

export const ICONS: IconType[] = [
  {
    icon: 'search',
    label: 'Search'
  },
  {
    icon: 'alarm',
    label: 'Notifications'
  },
  {
    icon: 'message',
    label: 'Messages'
  }
]
