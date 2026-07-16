import { TabType } from '@/types'

import { routers } from './routers'

interface SettingTabsType {
  label: TabType
  link: string
}

export const TABS: SettingTabsType[] = [
  {
    label: 'Account',
    link: routers.ACCOUNT_SETTING
  },
  {
    label: 'Security',
    link: routers.SECURITY_SETTING
  },
  {
    label: 'Preferences',
    link: routers.PREFERENCE_SETTING
  },
  {
    label: 'Sessions',
    link: routers.SESSION_SETTING
  },
  {
    label: 'Ignored Users',
    link: routers.IGNORE_USER_SETTING
  },
  {
    label: 'Verify',
    link: routers.VERIFY_SETTING
  },
  {
    label: 'Offers',
    link: routers.OFFER_SETTING
  }
]
