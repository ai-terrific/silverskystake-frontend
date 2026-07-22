import { InfoOutlined } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Divider, Grid2, InputLabel, Stack, Typography } from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { AppIcon } from '@/components/Core'
import { UploadImage, VisuallyHiddenInput } from '@/components/common.style'
import { BASE_URL } from '@/configs'
import { userService } from '@/services'
import { handleError } from '@/util'

const FundSourceContent = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fundSource, setFundSource] = useState<File | null>(null)

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        setFundSource(file)
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
      if (fundSource) data.append('fundSource', fundSource)
      const response = await userService.uploadSourceOfFund(data)
      getSourceOfFund()
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }

  const getSourceOfFund = useCallback(async () => {
    try {
      const response = await userService.getSourceOfFund()
      setPreviewUrl(`${BASE_URL}/uploads/${response.fund}`)
    } catch (err) {
      handleError(err)
    }
  }, [])

  useEffect(() => {
    getSourceOfFund()
  }, [])

  return (
    <Stack spacing={{ xs: 2, md: 3 }}>
      <Divider />
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant='subtitle1'>Upload Identification</Typography>
          <Typography color='secondary'>Upload you identification.</Typography>
        </Stack>
        <Grid2 container spacing={4}>
          <Grid2 size={12}>
            <Alert severity='warning' icon={<InfoOutlined />}>
              <AlertTitle>Please complete level three verificarion first.</AlertTitle>
            </Alert>
          </Grid2>
          <Grid2 size={12} display='flex' flexDirection='column' gap={1}>
            <InputLabel shrink htmlFor='first-name'>
              Upload source of fund
            </InputLabel>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <UploadImage sx={{ backgroundImage: `url(${previewUrl})` }}>
                  <AppIcon name='image' size={24} />
                  <Typography variant='body2' color='secondary'>
                    Upload source of fund
                  </Typography>
                  <Button
                    component='label'
                    variant='outlined'
                    color='inherit'
                    startIcon={<AppIcon name='upload' size={16} />}
                  >
                    Upload
                    <VisuallyHiddenInput type='file' onChange={handleFileChange} />
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

export default FundSourceContent
