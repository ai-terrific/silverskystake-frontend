import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
  styled
} from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { AppIcon } from '@/components/Core'
import { StyledInput } from '@/components/common.style'
import { useDeviceType } from '@/hooks'
import { authService, userService } from '@/services'
import { useSelector } from '@/store'
import { color } from '@/theme'
import { handleError } from '@/util'

const GoogleVerifyButton = styled(Button)({
  width: 'fit-content',
  height: 'fit-content',
  padding: '10px 24px',
  gap: '8px',
  border: 'none',
  backgroundColor: color.layer2Dark,
  backgroundImage: 'none'
})

const QRCode = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
  paddingRight: 40,
  paddingLeft: 40,
  borderRadius: 8,
  backgroundColor: theme.palette.background.default,
  height: '100%'
}))

const VerifyForm = ({ secret, qrCode }: { secret: string; qrCode: string }) => {
  const { isMobile } = useDeviceType()
  const { user } = useSelector(store => store.auth)
  const [code, setCode] = useState<string>(user?.secret ?? '')

  const handleVerify = async () => {
    try {
      const response = await authService.verify2FAAuthentication({ code })
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <Stack spacing={3} direction={isMobile ? 'column-reverse' : 'row'}>
      <Stack spacing={4} flex={1}>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='auth-code'>
            Authentication Code
          </InputLabel>
          <StyledInput
            placeholder='Type authentication code here'
            id='auth-code'
            sx={{
              '& .MuiOutlinedInput-input': {
                color: color.prime
              }
            }}
            value={secret}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton>
                  <AppIcon name='capture' size={20} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='two-factor-code' required>
            Two Factor Code
          </InputLabel>
          <StyledInput
            placeholder='Type Code here'
            id='two-factor-code'
            value={code}
            onChange={e => setCode(e.target.value)}
          />
        </FormControl>
        <GoogleVerifyButton variant='contained' startIcon={<AppIcon name='google' size={16} />} onClick={handleVerify}>
          Re-verify with Google
        </GoogleVerifyButton>
      </Stack>
      <QRCode>
        <Box component='img' src={qrCode} width={150} height={150} alt='qr code' />
        <Typography variant='body2'>QR Code (don't show anyone)</Typography>
      </QRCode>
    </Stack>
  )
}

export default VerifyForm
