import { Divider, Stack, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { StyledSwitch } from '@/components/common.style'
import { authService } from '@/services'
import { useSelector } from '@/store'
import { handleError } from '@/util'

import VerifyForm from './VerifyForm'

const SecurityContent = () => {
  const { user } = useSelector(store => store.auth)
  const [enable, setEnable] = useState<boolean>(user?.twoFARequired!)
  const [secret, setSecret] = useState<string>('')
  const [qrCode, setQRCode] = useState<string>('')

  const handleEnable = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setEnable(event.target.checked)
      const response = await authService.get2FAAuthentication({ enable: event.target.checked })
      setSecret(response.secret)
      setQRCode(response.qrCode)
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <Stack spacing={3} flex={1}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='subtitle1' color='secondary'>
          Enable Two factor authentication for extra security.
        </Typography>
        <StyledSwitch checked={enable} onChange={handleEnable} />
      </Stack>
      {enable ? (
        user?.twoFARequired ? (
          <Typography variant='h6'>You are verified user.</Typography>
        ) : (
          <>
            <Divider />
            <VerifyForm secret={secret} qrCode={qrCode} />
          </>
        )
      ) : (
        <></>
      )}
    </Stack>
  )
}

export default SecurityContent
