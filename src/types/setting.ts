import { User } from './user'

export interface SessionType {
  session: {
    email: string
    region: string
    city: string
    browser: string
    ip: string
  }
  status: number
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
