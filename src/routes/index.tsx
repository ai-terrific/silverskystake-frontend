import { createBrowserRouter } from 'react-router-dom'

import NotFound from '@/components/NotFound'
import Promotion from '@/components/Setting/Promotion'
import { routers } from '@/constants/routers'
import Layout from '@/layout'
import SettingLayout from '@/layout/Setting'
import AccountSetting from '@/pages/Setting/Account'
import IgnoredUsersSetting from '@/pages/Setting/IgnoredUser'
import OfferSetting from '@/pages/Setting/Offers'
import PreferenceSetting from '@/pages/Setting/Preference'
import SecuritySetting from '@/pages/Setting/Security'
import SessionSetting from '@/pages/Setting/Session'
import VerifySetting from '@/pages/Setting/Verify'

const routes = createBrowserRouter([
  {
    path: routers.LANDING,
    element: <Layout />,
    children: [
      {
        path: routers.SETTING,
        element: <SettingLayout />,
        children: [
          {
            path: routers.ACCOUNT_SETTING,
            element: <AccountSetting />
          },
          {
            path: routers.SECURITY_SETTING,
            element: <SecuritySetting />
          },
          {
            path: routers.PREFERENCE_SETTING,
            element: <PreferenceSetting />
          },
          {
            path: routers.SESSION_SETTING,
            element: <SessionSetting />
          },
          {
            path: routers.IGNORE_USER_SETTING,
            element: <IgnoredUsersSetting />
          },
          {
            path: routers.VERIFY_SETTING,
            element: <VerifySetting />
          },
          {
            path: routers.OFFER_SETTING,
            element: <OfferSetting />
          }
        ]
      },
      {
        path: routers.PROMOTION,
        element: <Promotion />
      },
      {
        path: routers.AFFILIATE,
        element: <Promotion />
      },
      {
        path: routers.VIP,
        element: <Promotion />
      },
      {
        path: routers.BLOG,
        element: <Promotion />
      },
      {
        path: routers.FORUM,
        element: <Promotion />
      },
      {
        path: routers.SPONSORSHIP,
        element: <Promotion />
      },
      {
        path: routers.SUPPORT,
        element: <Promotion />
      },
      {
        path: routers.NOT_FOUND,
        element: <NotFound />
      }
    ]
  }
])

export default routes
