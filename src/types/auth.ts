import { User } from './user'

export interface AuthState {
  isLoggedIn: boolean
  verified2FA: boolean
  user: User | null
  token: string | null
}

export interface LoginUserRes {
  user: User | null
  token: string
  message?: string
  twoFARequired?: boolean
}

export interface RegisterUserRes {
  user?: User
  message?: string
}

export interface RegisterForm {
  email: string
  username: string
  password: string
  confirmPassword: string
}

export interface LoginForm {
  email: string
  password: string
}

export interface ResetPasswordType {
  token: string
  password: string
  confirmPassword: string
}
