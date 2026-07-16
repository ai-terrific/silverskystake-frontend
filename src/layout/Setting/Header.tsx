import { Typography } from '@mui/material'

import SettingSelect from '@/components/Setting/SettingSelect'
import SettingTabs from '@/components/Setting/SettingTabs'
import { useDeviceType } from '@/hooks'

const SettingHeader = () => {
  const { isMobile } = useDeviceType()

  return (
    <>
      <Typography variant='h5'>Settings</Typography>
      {isMobile ? <SettingSelect /> : <SettingTabs />}
    </>
  )
}

export default SettingHeader
