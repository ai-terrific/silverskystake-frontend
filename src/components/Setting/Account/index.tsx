import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  Stack,
  Typography,
  styled,
  useColorScheme,
  useTheme
} from '@mui/material'
import { ChangeEvent, useCallback, useState } from 'react'

import { AppIcon } from '@/components/Core'
import { StyledInput, StyledSwitch } from '@/components/common.style'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const AccountContent = () => {
  const { mode } = useColorScheme()
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
      }
    },
    [previewUrl]
  )

  return (
    <Stack spacing={3} flex={1}>
      <Stack spacing={2}>
        <Typography color='secondary'>Profile Photo</Typography>
        <Stack direction='row' spacing={4} alignItems='center'>
          <Box
            component='img'
            width={100}
            height={100}
            alt='upload-avatar'
            src={(previewUrl ?? mode === 'light') ? '/avatar.png' : '/avatar-dark.png'}
          />
          <Button component='label' variant='outlined' color='inherit' startIcon={<AppIcon name='upload' size={16} />}>
            Change
            <VisuallyHiddenInput type='file' onChange={handleFileChange} multiple />
          </Button>
        </Stack>
      </Stack>
      <Grid2 container spacing={2} width='100%'>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='first-name'>
              First Name
            </InputLabel>
            <StyledInput placeholder='Type your name here' id='first-name' defaultValue='Irvan' />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='last-name'>
              Last Name
            </InputLabel>
            <StyledInput placeholder='Type your name here' id='last-name' defaultValue='Wibowo' />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='username'>
              Username
            </InputLabel>
            <StyledInput placeholder='Type your name here' id='username' defaultValue='irvan_wibowo' />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='email'>
              Email
            </InputLabel>
            <StyledInput placeholder='Type your name here' id='email' defaultValue='irvanwibowo@gmail.com' />
          </FormControl>
        </Grid2>
      </Grid2>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='subtitle1' color='secondary'>
          I want to be anonymous (so don’t show my profile)
        </Typography>
        <StyledSwitch defaultChecked />
      </Stack>
      <Divider />
      <Stack direction='row' justifyContent='flex-end'>
        <Button variant='contained'>SAVE CHANGES</Button>
      </Stack>
    </Stack>
  )
}

export default AccountContent
