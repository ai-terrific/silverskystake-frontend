import { Button, FormControl, Stack, Typography } from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { StyledInput } from '@/components/common.style'
import { authService } from '@/services'
import { Email } from '@/types'
import { handleError } from '@/util'

const ForgotPassword = ({ setValue }: { setValue: Dispatch<SetStateAction<string>> }) => {
  const [formData, setFormData] = useState<Email>({
    email: ''
  })
  const [emailSent, setEmailSent] = useState(false)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSubmit = useCallback(async () => {
    try {
      const response = await authService.sendEmail(formData)
      toast.success(response.message, { hideProgressBar: true })
      setEmailSent(true)
      setValue('checkEmail')
    } catch (err) {
      handleError(err)
    }
  }, [formData])

  return (
    <Stack spacing={3}>
      <Stack spacing={1} textAlign='center'>
        <Typography variant='h3'>Reset Password</Typography>
        {emailSent ? (
          <Typography color='secondary'>
            You will receive an email with instructions to reset your password if an account exists for this email
            address.
          </Typography>
        ) : (
          <Typography color='secondary'>
            Input your email address that linked with your account then we will send you link to reset your password.
          </Typography>
        )}
      </Stack>
      <FormControl variant='standard' fullWidth>
        <StyledInput placeholder='Email' id='email' name='email' value={formData.email} onChange={handleChange} />
      </FormControl>
      <Button variant='contained' onClick={handleSubmit}>
        SEND
      </Button>
    </Stack>
  )
}

export default ForgotPassword
