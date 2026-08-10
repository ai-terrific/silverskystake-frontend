import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/services/axios'
import {
  Email,
  EmailPassword,
  LoginFormData,
  LoginUserRes,
  RegisterFormData,
  RegisterUserRes,
  ResetPasswordType,
  ResponseType,
  TwoFAEnable,
  TwoFAGenerationType,
  TwoFactorResponseType,
  ValidationType,
  VerifyType
} from '@/types'

export const registerUser = async (data: RegisterFormData): Promise<RegisterUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.REGISTER,
    data,
    errorMessage: 'Registration failed'
  })
}

export const loginUser = async (data: LoginFormData): Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.LOGIN,
    data,
    errorMessage: 'Login failed'
  })
}

export const set2FAAuthentication = async (data: TwoFAEnable): Promise<TwoFAGenerationType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.SET_2FA,
    errorMessage: 'Two factor authentication failed'
  })
}

export const get2FAAuthentication = async (): Promise<TwoFAGenerationType> => {
  return apiRequest({
    method: 'GET',
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

export const sendEmail = async (data: Email): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.SEND_EMAIL,
    data,
    errorMessage: 'Email send failed'
  })
}

export const resetPassword = async (data: ResetPasswordType): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.RESET_PASSWORD,
    data,
    errorMessage: 'Registration failed'
  })
}
