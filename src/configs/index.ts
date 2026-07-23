declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_BASE_URL?: string
      [key: string]: string | undefined
    }
  }
}

export const STORE_KEY = 'JQhizAKwK8hvvFBWxrfpdk1E'
export const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://172.20.4.112:8001'

export * from './endpoints'
