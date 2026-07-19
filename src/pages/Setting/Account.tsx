import { Typography } from '@mui/material'

import AccountContent from '@/components/Setting/Account'
import { Setting } from '@/components/Setting/setting.style'

const AccountSetting = () => {
  return (
    <Setting>
      <Typography variant='h6' sx={{ minWidth: 350 }}>
        Account Setting
      </Typography>
      <AccountContent />
    </Setting>
  )
}

export default AccountSetting
