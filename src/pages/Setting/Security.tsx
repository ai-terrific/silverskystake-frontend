import { Typography } from '@mui/material'

import SecurityContent from '@/components/Setting/Security'
import { Setting } from '@/components/Setting/setting.style'
import { useDeviceType } from '@/hooks'

const SecuritySetting = () => {
  return (
    <Setting>
      <Typography variant='h6' sx={{ minWidth: 350 }}>
        Two Factor Authentication
      </Typography>
      <SecurityContent />
    </Setting>
  )
}

export default SecuritySetting
