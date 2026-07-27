export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `user/register`,
    LOGIN: `user/login`,
    SEND_EMAIL: 'user/forgot-password',
    RESET_PASSWORD: `user/reset-password`
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
    GET_2FA: 'user/2fa/setup',
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
