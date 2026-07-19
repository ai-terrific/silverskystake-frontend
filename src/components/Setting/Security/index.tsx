import { Divider, Stack, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { StyledSwitch } from '@/components/common.style'

import VerifyForm from './VerifyForm'

const SecurityContent = () => {
  const [enable, setEnable] = useState<boolean>(true)

  const handleEnable = (event: ChangeEvent<HTMLInputElement>) => {
    setEnable(event.target.checked)
  }

  return (
    <Stack spacing={3} flex={1}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='subtitle1' color='secondary'>
          Enable Two factor authentication for extra security.
        </Typography>
        <StyledSwitch checked={enable} onChange={handleEnable} />
      </Stack>
      {enable && <Divider />}
      {enable && <VerifyForm />}
    </Stack>
  )
}

export default SecurityContent
