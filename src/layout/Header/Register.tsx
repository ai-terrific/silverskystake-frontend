import { Button, FormControl, Stack, Typography } from '@mui/material'
import { ChangeEvent, useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { StyledInput } from '@/components/common.style'
import { authService } from '@/services'
import { RegisterForm } from '@/types'
import { handleError } from '@/util'

const Register = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSubmit = useCallback(async () => {
    try {
      const response = await authService.registerUser(formData)
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }, [formData])

  return (
    <Stack spacing={3}>
      <Stack spacing={1} textAlign='center'>
        <Typography variant='h3'>Register now</Typography>
        <Typography color='secondary'>Register to Silverskystake</Typography>
      </Stack>
      <FormControl variant='standard' fullWidth>
        <StyledInput
          placeholder='Username'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant='standard' fullWidth>
        <StyledInput placeholder='Email' id='email' name='email' value={formData.email} onChange={handleChange} />
      </FormControl>
      <FormControl variant='standard' fullWidth>
        <StyledInput
          placeholder='Password'
          id='password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant='standard' fullWidth>
        <StyledInput
          placeholder='Confirm password'
          id='confirm-password'
          name='confirmPassword'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </FormControl>
      <Button variant='contained' onClick={handleSubmit}>
        CONTINUE
      </Button>
    </Stack>
  )
}

export default Register
