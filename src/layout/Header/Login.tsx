import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, FormControl, FormHelperText, Stack, Typography } from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { StyledInput } from '@/components/common.style'
import { TABS } from '@/constants'
import { authService } from '@/services'
import { dispatch, login } from '@/store'
import { LoginForm, LoginFormData, loginSchema } from '@/types'
import { handleError } from '@/util'

const Login = ({
  setOpen,
  setValue
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  setValue: Dispatch<SetStateAction<string>>
}) => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
      code: ''
    }
  })

  const [code, setCode] = useState<string>('')
  const [twoFARequired, setTwoFactorRequired] = useState<boolean>(false)
  const [pendingEmail, setPendingEmail] = useState<string>('')

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authService.loginUser(data)
      // if (response.twoFARequired) {
      //   setTwoFactorRequired(true)
      //   setPendingEmail(data.emailOrUsername)
      // } else {
      dispatch(login(response))
      setOpen(false)
      navigate(TABS[Number(localStorage.getItem('Current'))].link)
      toast.success(response.message, { hideProgressBar: true })
      // }
    } catch (err) {
      handleError(err)
    }
  }

  const handleSendCode = useCallback(async () => {
    try {
      const response = await authService.validationBy2FA({ code, email: pendingEmail })
      dispatch(login(response))
      setOpen(false)
      navigate(TABS[Number(localStorage.getItem('Current'))].link)
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }, [code, pendingEmail])

  return (
    <Stack spacing={3}>
      <Stack spacing={1} textAlign='center'>
        <Typography variant='h3'>Welcome back fellas!</Typography>
        <Typography color='secondary'>Login to your Silverskystake account</Typography>
      </Stack>
      {/* {twoFARequired ? (
        <>
          <FormControl variant='standard' fullWidth>
            <Controller
              name='code'
              control={control}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  placeholder='Verification Code'
                  id='code'
                  name='code'
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
              )}
            />
          </FormControl>
          <Button variant='contained' onClick={handleSendCode}>
            LOGIN
          </Button>
        </>
      ) : ( */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          <FormControl variant='standard' fullWidth error={!!errors.emailOrUsername}>
            <Controller
              name='emailOrUsername'
              control={control}
              render={({ field }) => (
                <StyledInput {...field} placeholder='Username or email' id='emailOrUsername' name='emailOrUsername' />
              )}
            />
            <FormHelperText>{errors.emailOrUsername?.message}</FormHelperText>
          </FormControl>
          <FormControl variant='standard' fullWidth error={!!errors.password}>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <StyledInput {...field} type='password' placeholder='Password' id='password' name='password' />
              )}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>
          <Box component='span' onClick={() => setValue('forgotPassword')}>
            <Typography fontWeight={500} color='success' align='center'>
              Forgot Password
            </Typography>
          </Box>
          <Button type='submit' variant='contained'>
            LOGIN
          </Button>
        </Stack>
      </form>
      {/* )} */}
    </Stack>
  )
}

export default Login
