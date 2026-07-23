import { InfoOutlined } from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  Button,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Stack,
  Typography
} from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { AppIcon } from '@/components/Core'
import { StyledSelect, UploadImage, VisuallyHiddenInput } from '@/components/common.style'
import { BASE_URL } from '@/configs'
import { userService } from '@/services'
import { handleError } from '@/util'

interface PreviewUrlType {
  front: string | null
  back: string | null
}

const IdentificationContent = () => {
  const [front, setFront] = useState<File | null>(null)
  const [back, setBack] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<PreviewUrlType>({
    front: null,
    back: null
  })

  const handleFileChange = useCallback(
    (side: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        if (side === 'front') setFront(file)
        else setBack(file)

        const url = URL.createObjectURL(file)
        if (previewUrl.front && side === 'front') {
          URL.revokeObjectURL(previewUrl.front)
        }
        if (previewUrl.back && side === 'back') {
          URL.revokeObjectURL(previewUrl.back)
        }
        setPreviewUrl({ ...previewUrl, [side]: url })
      }
    },
    [front, back]
  )

  const getIdentification = useCallback(async () => {
    try {
      const response = await userService.getIdentificationInfo()

      setPreviewUrl({
        ...previewUrl,
        front: `${BASE_URL}/uploads/${response.front}`,
        back: `${BASE_URL}/uploads/${response.back}`
      })
    } catch (err) {
      handleError(err)
    }
  }, [])

  const handleSubmit = async () => {
    try {
      const data = new FormData()
      if (front) data.append('front', front)
      if (back) data.append('back', back)
      const response = await userService.uploadIdentification(data)
      getIdentification()
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    getIdentification()
  }, [])

  return (
    <Stack spacing={3}>
      <Divider />
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant='subtitle1'>Upload Identification</Typography>
          <Typography color='secondary'>Upload you identification.</Typography>
        </Stack>
        <Grid2 container spacing={4}>
          <Grid2 size={12}>
            <Alert severity='warning' icon={<InfoOutlined />}>
              <AlertTitle>Your verification requires attention</AlertTitle>
              Upload you identification.
            </Alert>
          </Grid2>
          <Grid2 size={12}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='last-name'>
                Residential Address
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>Drivers license</MenuItem>
                <MenuItem value={1}>Drivers license</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={12} display='flex' flexDirection='column' gap={1}>
            <InputLabel shrink htmlFor='first-name'>
              Upload
            </InputLabel>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <UploadImage sx={{ backgroundImage: `url(${previewUrl.front})` }}>
                  <AppIcon name='image' size={24} />
                  <Typography variant='body2' color='secondary'>
                    Front side
                  </Typography>
                  <Button
                    component='label'
                    variant='outlined'
                    color='inherit'
                    startIcon={<AppIcon name='upload' size={16} />}
                  >
                    Upload
                    <VisuallyHiddenInput type='file' onChange={handleFileChange('front')} multiple />
                  </Button>
                </UploadImage>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <UploadImage sx={{ backgroundImage: `url(${previewUrl.back})` }}>
                  <AppIcon name='image' size={24} />
                  <Typography variant='body2' color='secondary'>
                    Back side
                  </Typography>
                  <Button
                    component='label'
                    variant='outlined'
                    color='inherit'
                    startIcon={<AppIcon name='upload' size={16} />}
                  >
                    Upload
                    <VisuallyHiddenInput type='file' onChange={handleFileChange('back')} multiple />
                  </Button>
                </UploadImage>
              </Grid2>
            </Grid2>
            <Typography variant='body2' color='secondary'>
              File types: jpg. png.,pdf
            </Typography>
          </Grid2>
        </Grid2>
      </Stack>
      <Divider />
      <Stack direction='row' justifyContent='flex-end'>
        <Button variant='contained' onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Stack>
    </Stack>
  )
}

export default IdentificationContent
