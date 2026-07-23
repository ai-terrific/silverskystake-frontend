import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/services/axios'
import {
  AccountType,
  IdentificationType,
  IgnoredUser,
  OfferType,
  ResponseType,
  Session,
  TwoFAGenerationType,
  TwoFactorResponseType,
  VerifyType
} from '@/types'

export const getAccountInformation = async (): Promise<AccountType> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.GET_ACCOUNT,
    errorMessage: 'Account Information failed'
  })
}

export const updateAccountInformation = async (data: FormData): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.UPDATE_ACCOUNT,
    errorMessage: 'Account Information Update failed'
  })
}

export const verifyAccountInformation = async (data: Partial<AccountType>): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.VERIFY_ACCOUNT,
    errorMessage: 'Account Information Update failed'
  })
}

export const getSessionData = async (): Promise<Session[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SESSION.GET,
    errorMessage: 'Session Data failed'
  })
}

export const removeSession = async (sessionId: string): Promise<ResponseType> => {
  return apiRequest({
    method: 'DELETE',
    url: API_ENDPOINTS.SESSION.REMOVE(sessionId),
    errorMessage: 'Session remove failed'
  })
}

export const getIgnoreUsers = async (): Promise<IgnoredUser[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.IGNORED_USERS,
    errorMessage: 'Account Information Update failed'
  })
}

export const removeIgnoredUser = async (userId: string): Promise<ResponseType> => {
  return apiRequest({
    method: 'DELETE',
    url: API_ENDPOINTS.USER.REMOVE_IGNORED_USERS(userId),
    errorMessage: 'Remove ignored user failed'
  })
}

export const submitOffer = async (data: OfferType): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.OFFER.SUBMIT,
    errorMessage: 'Submit Offer failed'
  })
}

export const getOfferCode = async (data: Partial<OfferType>): Promise<OfferType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.OFFER.GET,
    errorMessage: 'Offer code failed'
  })
}

export const uploadIdentification = async (data: FormData): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.IDENTIFICATOIN,
    errorMessage: 'Upload identification failed'
  })
}

export const getIdentificationInfo = async (): Promise<IdentificationType> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.IDENTIFICATOIN,
    errorMessage: 'Identification Information failed'
  })
}

export const uploadProofOfAddress = async (data: FormData): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.ADDRESS,
    errorMessage: 'Upload proof of address failed'
  })
}

export const getProofOfAddress = async (): Promise<Partial<AccountType>> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.ADDRESS,
    errorMessage: 'Get address failed'
  })
}

export const uploadSourceOfFund = async (data: FormData): Promise<ResponseType> => {
  return apiRequest({
    method: 'POST',
    data,
    url: API_ENDPOINTS.USER.FUND,
    errorMessage: 'Upload source of fund failed'
  })
}

export const getSourceOfFund = async (): Promise<Partial<AccountType>> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.FUND,
    errorMessage: 'Get source of fund failed'
  })
}
