export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `user/register`,
    LOGIN: `user/login`
  },
  USER: {
    GET_ACCOUNT: 'user/get-profile',
    UPDATE_ACCOUNT: 'user/update-profile',
    VERIFY_ACCOUNT: 'user/verify-profile',
    GET_IGNORED_USERS: 'user/ignore-user',
    GET_IDENTIFICATOIN: 'user/identification',
    UPLOAD_IDENTIFICATOIN: 'user/identification/upload',
    UPLOAD_ADDRESS: 'user/upload-address',
    GET_ADDRESS: 'user/get-address',
    FUND: 'user/fund'
  },
  SESSION: {
    GET: 'session/get',
    REMOVE: (sessionId: string) => `user/ignore-user/${sessionId}/remove`
  },
  OFFER: {
    SUBMIT: 'offer/submit',
    GET: 'offer/get'
  }
}
