export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `auth/register`,
    LOGIN: `auth/login`,
    SEND_EMAIL: 'auth/forgot-password',
    RESET_PASSWORD: `auth/reset-password`,
    SET_2FA: 'auth/set-2fa',
    GET_2FA: 'auth/get-2fa',
    VERIFY_2FA: 'auth/verify-2fa',
    VALIDATE_2FA: 'auth/validate-2fa'
  },
  VERIFY: {
    IDENTIFICATION: 'verify/identification'
  },
  USER: {
    GET_ACCOUNT: 'user/get-profile',
    UPDATE_ACCOUNT: 'user/update-profile',
    VERIFY_ACCOUNT: 'user/verify-profile',
    IGNORED_USERS: 'user/ignore-user',
    REMOVE_IGNORED_USERS: (userId: string) => `user/ignore-user/${userId}/remove`,
    ADDRESS: 'user/address',
    FUND: 'user/fund'
  },
  SESSION: {
    GET: 'session/get',
    REMOVE: (sessionId: string) => `session/${sessionId}`
  },
  OFFER: {
    SUBMIT: 'offer',
    GET: 'offer/get'
  }
}
