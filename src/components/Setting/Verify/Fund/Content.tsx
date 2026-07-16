import { InfoOutlined } from '@mui/icons-material'
import { Alert, AlertTitle, Box, Button, Divider, Grid2, InputLabel, Stack, Typography, styled } from '@mui/material'

import { AppIcon } from '@/components/Core'

const UploadImage = styled(Box)(({ theme }) => ({
  height: 190,
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center'
}))

const FundSourceContent = () => {
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
                <UploadImage>
                  <AppIcon name='image' size={24} />
                  <Typography variant='body2' color='secondary'>
                    Upload source of fund
                  </Typography>
                  <Button variant='outlined' color='inherit' startIcon={<AppIcon name='upload' size={16} />}>
                    Upload
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
        <Button variant='contained'>SUBMIT</Button>
      </Stack>
    </Stack>
  )
}

export default FundSourceContent
