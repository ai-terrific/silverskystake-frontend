import { User } from './user'

export interface SessionType {
  browser: string
  near: string
  ip: string
  status: boolean
}

export interface Session extends SessionType {
  _id: string
  updatedAt: Date
  createdAt: Date
}

export interface IgnoredUserType {
  user: User
}

export interface IgnoredUser extends IgnoredUserType {
  createdAt: Date
}
