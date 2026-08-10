import { z } from 'zod'

import { User } from './user'

export const registerSchema = z.object({
  username: z.string().min(1, 'Username is required').max(50, 'Username must be under 50 characters'),
  email: z.email().min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string().min(2, 'Password must be at least 8 characters long')
})

export type RegisterFormData = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  emailOrUsername: z.union([
    z.string().min(1, 'Username is required').max(50, 'Username must be under 50 characters'),
    z.email().min(1, 'Email is required')
  ]),
  password: z.string().min(1, 'Password is required'),
  code: z.string()
})

export type LoginFormData = z.infer<typeof loginSchema>

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

export interface LoginForm {
  email: string
  password: string
}

export interface ResetPasswordType {
  token: string
  password: string
  confirmPassword: string
}
