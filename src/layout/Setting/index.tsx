import { Outlet } from 'react-router-dom'

import { CommonStack } from '@/components/common.style'

import SettingHeader from './Header'

const SettingLayout = () => {
  return (
    <CommonStack spacing={3}>
      <SettingHeader />
      <Outlet />
    </CommonStack>
  )
}

export default SettingLayout
