export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `auth/register`,
    LOGIN: `auth/login`,
    SEND_EMAIL: 'auth/forgot-password',
    RESET_PASSWORD: `auth/reset-password`
  },
  USER: {
    GET_ACCOUNT: 'user/get-profile',
    UPDATE_ACCOUNT: 'user/update-profile',
    VERIFY_ACCOUNT: 'user/verify-profile',
    IGNORED_USERS: 'user/ignore-user',
    REMOVE_IGNORED_USERS: (userId: string) => `user/ignore-user/${userId}/remove`,
    IDENTIFICATOIN: 'user/identification',
    ADDRESS: 'user/address',
    FUND: 'user/fund',
    SET_2FA: 'user/2fa/setup',
    GET_2FA: 'user/2fa',
    VERIFY_2FA: 'user/2fa/verify',
    VALIDATE_2FA: 'user/2fa/validation'
  },
  SESSION: {
    GET: 'session',
    REMOVE: (sessionId: string) => `session/${sessionId}`
  },
  OFFER: {
    SUBMIT: 'offer',
    GET: 'offer/get'
  }
}
