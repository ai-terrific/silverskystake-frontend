import { Button, FormControl, Stack, Typography } from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { StyledInput } from '@/components/common.style'
import { TABS } from '@/constants'
import { authService } from '@/services'
import { dispatch, login } from '@/store'
import { LoginForm } from '@/types'
import { handleError } from '@/util'

const Login = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  })
  const [code, setCode] = useState<string>('')
  const [twoFARequired, setTwoFactorRequired] = useState<boolean>(false)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSubmit = useCallback(async () => {
    try {
      const response = await authService.loginUser(formData)
      if (response.twoFARequired) setTwoFactorRequired(true)
      else {
        dispatch(login(response))
        setOpen(false)
        navigate(TABS[Number(localStorage.getItem('Current'))].link)
        toast.success(response.message, { hideProgressBar: true })
      }
    } catch (err) {
      handleError(err)
    }
  }, [formData])

  const handleSendCode = useCallback(async () => {
    try {
      const response = await authService.validationBy2FA({ code, email: formData.email })
      dispatch(login(response))
      setOpen(false)
      navigate(TABS[Number(localStorage.getItem('Current'))].link)
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }, [formData, code])

  return (
    <Stack spacing={3}>
      <Stack spacing={1} textAlign='center'>
        <Typography variant='h3'>Welcome back fellas!</Typography>
        <Typography color='secondary'>Login to your Silverskystake account</Typography>
      </Stack>
      {twoFARequired ? (
        <>
          <FormControl variant='standard' fullWidth>
            <StyledInput
              placeholder='Verification Code'
              id='code'
              name='code'
              value={code}
              onChange={e => setCode(e.target.value)}
            />
          </FormControl>
          <Button variant='contained' onClick={handleSendCode}>
            LOGIN
          </Button>
        </>
      ) : (
        <>
          <FormControl variant='standard' fullWidth>
            <StyledInput
              placeholder='Username or email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
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
          <Typography fontWeight={500} color='success' align='center'>
            Forgot Password
          </Typography>
          <Button variant='contained' onClick={handleSubmit}>
            LOGIN
          </Button>
        </>
      )}
    </Stack>
  )
}

export default Login
