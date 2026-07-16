import { InfoOutlined } from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
  styled
} from '@mui/material'

import { AppIcon } from '@/components/Core'
import { StyledSelect } from '@/components/common.style'

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

const IdentificationContent = () => {
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
                <UploadImage>
                  <AppIcon name='image' size={24} />
                  <Typography variant='body2' color='secondary'>
                    Front side
                  </Typography>
                  <Button variant='outlined' color='inherit' startIcon={<AppIcon name='upload' size={16} />}>
                    Upload
                  </Button>
                </UploadImage>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <UploadImage>
                  <AppIcon name='image' size={24} />
                  <Typography variant='body2' color='secondary'>
                    Back side
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

export default IdentificationContent
