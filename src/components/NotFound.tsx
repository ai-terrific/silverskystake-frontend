import { ArrowBack } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { routers } from '@/constants'

const NotFound: FC = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 150px)',
        p: 3
      }}
      alignItems='center'
      justifyContent='center'
    >
      <Stack
        sx={{
          maxWidth: { md: 500 },
          width: '100%',
          my: 5
        }}
        alignItems='center'
        gap={1}
        textAlign='center'
      >
        <Typography component='h2' variant='h3' fontWeight='bold' color='white'>
          404
        </Typography>
        <Typography>Not Found</Typography>
        <Button
          onClick={() => navigate(routers.LANDING)}
          variant='contained'
          aria-label='Back to Home'
          endIcon={<ArrowBack />}
        >
          Go Home
        </Button>
      </Stack>
    </Stack>
  )
}

export default NotFound
