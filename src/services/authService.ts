import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/services/axios'
import {
  EmailPassword,
  LoginUserRes,
  RegisterForm,
  RegisterUserRes,
  TwoFAEnable,
  TwoFAGenerationType,
  TwoFactorResponseType,
  ValidationType,
  VerifyType
} from '@/types'

export const registerUser = async (data: RegisterForm): Promise<RegisterUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.REGISTER,
    data,
    errorMessage: 'Registration failed'
  })
}

export const loginUser = async (data: EmailPassword): Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.LOGIN,
    data,
    errorMessage: 'Login failed'
  })
}

export const get2FAAuthentication = async (data: TwoFAEnable): Promise<TwoFAGenerationType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.GET_2FA,
    errorMessage: 'Two factor authentication failed'
  })
}

export const verify2FAAuthentication = async (data: VerifyType): Promise<TwoFactorResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.VERIFY_2FA,
    errorMessage: 'Two factor verification failed'
  })
}

export const validationBy2FA = async (data: ValidationType): Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.VALIDATE_2FA,
    errorMessage: 'Two factor verification failed'
  })
}
