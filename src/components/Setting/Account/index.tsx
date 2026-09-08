import { Box, Button, Divider, FormControl, Grid2, InputLabel, Stack, Typography, useColorScheme } from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { AppIcon } from '@/components/Core'
import { StyledInput, StyledSwitch, VisuallyHiddenInput } from '@/components/common.style'
import { BASE_URL } from '@/configs'
import { userService } from '@/services'
import { useSelector } from '@/store'
import { AccountType } from '@/types'
import { handleError } from '@/util'

const AccountContent = () => {
  const { mode } = useColorScheme()
  const { isLoggedIn, user } = useSelector(store => store.auth)

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [avatar, setAvatar] = useState<File | null>(null)
  const [formData, setFormData] = useState<Partial<AccountType>>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    avatar: ''
  })

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        setAvatar(file)
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
      }
    },
    [previewUrl]
  )

  const handleSubmit = async () => {
    try {
      const data = new FormData()
      if (avatar) data.append('avatar', avatar)
      if (formData.firstName) data.append('firstName', formData.firstName)
      if (formData.lastName) data.append('lastName', formData.lastName)
      if (formData.username) data.append('username', formData.username)
      const response = await userService.updateAccountInformation(data)
      getAccountInfo()
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }

  const getAccountInfo = useCallback(async () => {
    try {
      console.log(user)
      const response = await userService.getAccountInformation()
      setFormData(response)
      setPreviewUrl(`${BASE_URL}/uploads/${response.avatar}`)
    } catch (err) {
      handleError(err)
    }
  }, [])

  useEffect(() => {
    getAccountInfo()
  }, [])

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
            borderRadius={1.5}
            src={previewUrl ? previewUrl : mode === 'light' ? '/avatar.png' : '/avatar-dark.png'}
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
            <StyledInput
              placeholder='Type your name here'
              id='first-name'
              defaultValue='Irvan'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='last-name'>
              Last Name
            </InputLabel>
            <StyledInput
              placeholder='Type your name here'
              id='last-name'
              defaultValue='Wibowo'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='username'>
              Username
            </InputLabel>
            <StyledInput
              placeholder='Type your name here'
              id='username'
              defaultValue='irvan_wibowo'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl variant='standard' fullWidth>
            <InputLabel shrink htmlFor='email'>
              Email
            </InputLabel>
            <StyledInput
              placeholder='Type your name here'
              id='email'
              defaultValue='irvanwibowo@gmail.com'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
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
        <Button variant='contained' onClick={handleSubmit} disabled={!isLoggedIn}>
          SAVE CHANGES
        </Button>
      </Stack>
    </Stack>
  )
}

export default AccountContent
