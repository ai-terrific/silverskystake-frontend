import { Divider, Stack, Typography } from '@mui/material'

import { StyledSwitch } from '@/components/common.style'

import { PreferenceContent } from './preference.style'

const Marketing = () => {
  return (
    <PreferenceContent>
      <Typography variant='h6' sx={{ minWidth: 350 }}>
        Marketing
      </Typography>
      <Stack spacing={4} flex={1}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack spacing={1}>
            <Typography>Receive email offers from us</Typography>
            <Typography color='secondary'>Choose if you want to get update via email</Typography>
          </Stack>
          <StyledSwitch defaultChecked />
        </Stack>
        <Divider />
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack spacing={1}>
            <Typography>Receive email offers from us</Typography>
            <Typography color='secondary'>Choose if you want to get update via email</Typography>
          </Stack>
          <StyledSwitch defaultChecked />
        </Stack>
      </Stack>
    </PreferenceContent>
  )
}

export default Marketing
