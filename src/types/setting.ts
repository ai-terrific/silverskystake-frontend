import { User } from './user'

export interface SessionType {
  email: string
  id: number
  address?: string
  browser?: string
  version?: string
  ip?: string
  createdAt: number
}

export interface Sessions {
  data: SessionType
  key: string
}
;[]

export interface Session {
  count: number
  sessions: {
    data: SessionType
    key: string
  }[]
  status: string
}

export interface IgnoredUserType {
  user: User
}

export interface IgnoredUser extends IgnoredUserType {
  createdAt: Date
}
