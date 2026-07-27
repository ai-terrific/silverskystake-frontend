import { Box, Button, Stack, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckEmail = ({ setValue }: { setValue: Dispatch<SetStateAction<string>> }) => {
  const navigate = useNavigate()
  return (
    <Stack spacing={3}>
      <Stack spacing={1} textAlign='center' alignItems='center'>
        <Box component='img' src='/email.png' alt='send-email' width={100} height={100} />
        <Typography variant='h3'>Check your email</Typography>
        <Typography color='secondary'>Please check your email. We send you a verification link.</Typography>
      </Stack>
      <Button variant='contained' onClick={() => setValue('forgotPassword')}>
        BACK
      </Button>
    </Stack>
  )
}

export default CheckEmail
