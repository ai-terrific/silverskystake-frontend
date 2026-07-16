import { IconName } from '@/components/Core'

export interface NavType {
  id: number
  title: string
  icon: IconName
  url: string
  notifyCount?: number
}
