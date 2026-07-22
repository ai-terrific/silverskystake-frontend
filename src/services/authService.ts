import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/services/axios'
import { EmailPassword, LoginUserRes, RegisterForm, RegisterUserRes } from '@/types'

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
