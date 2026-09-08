import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormControl, FormHelperText, InputLabel, Stack, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { StyledInput } from '@/components/common.style'
import { authService } from '@/services'
import { RegisterFormData, registerSchema } from '@/types'
import { handleError } from '@/util'

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log(data)
      const response = await authService.registerUser(data)
      console.log(response)
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={1} textAlign='center'>
        <Typography variant='h3'>Register now</Typography>
        <Typography color='secondary'>Register to Silverskystake</Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          <FormControl fullWidth error={!!errors.username}>
            <Controller
              name='username'
              control={control}
              render={({ field }) => <StyledInput {...field} placeholder='Username' id='username' name='username' />}
            />
            <FormHelperText>{errors.username?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth error={!!errors.email}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => <StyledInput {...field} placeholder='Email' id='email' name='email' />}
            />
            <FormHelperText>{errors.email?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth error={!!errors.password}>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <StyledInput {...field} type='password' placeholder='Password' id='password' name='password' />
              )}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth error={!!errors.confirmPassword}>
            <Controller
              name='confirmPassword'
              control={control}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  type='password'
                  placeholder='Confirm Password'
                  id='confirmPassword'
                  name='confirmPassword'
                />
              )}
            />
            <FormHelperText>{errors.confirmPassword?.message}</FormHelperText>
          </FormControl>
          <Button type='submit' variant='contained'>
            CONTINUE
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default Register
