import Entity from './entity'

interface Email {
  email: string
}

export interface EmailPassword extends Email {
  password: string
}

export interface User extends Entity {
  _id: string
  email: string
  username: string
  secret: string
  twoFARequired: boolean
}

export interface Profile extends Entity {
  _id: string
  email: string
  username: string
}

export interface FetchUserRes {
  user: Profile
  message?: string
}

export interface AllowUserRes {
  users?: User[]
  message: string
}

export interface ResponseType {
  message: string
}

export interface AccountType {
  firstName: string
  lastName: string
  username: string
  email: string
  country: number
  birthPlace: string
  birthday: Date
  address: string
  city: string
  postalCode: number
  industry: string
  occupation: string
  experience: string
  avatar?: string
  identification?: IdentificationType
  proofAddress?: string
  fund?: string
}

export interface IgnoreUser {
  ignoreUser: string
}

export interface OfferType {
  expire: number
  code: string
}

export interface IdentificationType {
  front: string
  back: string
}

export interface TwoFAEnable {
  enable: boolean
}

export interface TwoFAGenerationType {
  secret: string
  qrCode: string
  message?: string
}

export interface VerifyType {
  code: string
}

export interface ValidationType extends VerifyType {
  email: string
}

export interface TwoFactorResponseType {
  isValid: boolean
  message: string
}
