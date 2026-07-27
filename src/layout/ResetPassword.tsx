import { Button, FormControl, Stack, Typography } from '@mui/material'
import { jwtDecode } from 'jwt-decode'
import { ChangeEvent, useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { StyledInput } from '@/components/common.style'
import { authService } from '@/services'
import { ResetPasswordType } from '@/types'
import { handleError } from '@/util'

const ResetPassword = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  if (!token) return

  const [formData, setFormData] = useState<ResetPasswordType>({
    token: token,
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
      const response = await authService.resetPassword(formData)
      toast.success(response.message, { hideProgressBar: true })
      navigate('/')
    } catch (err) {
      handleError(err)
    }
  }, [formData, navigate])

  return (
    <Stack alignItems='center' justifyContent='center'>
      <Stack spacing={3} width={500} height='fit-content'>
        <Stack spacing={1} textAlign='center'>
          <Typography variant='h3'>Reset Password</Typography>
        </Stack>
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
    </Stack>
  )
}

export default ResetPassword
