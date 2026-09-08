import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthState } from '@/types'

const initialState: AuthState = {
  isLoggedIn: false,
  verified2FA: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: AuthState['user']; token: string }>) {
      state.isLoggedIn = true
      state.user = action.payload.user
      // state.verified2FA = action.payload.user!.twoFARequired
      state.token = action.payload.token
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
      state.token = null
    },
    verifyChange(state, action: PayloadAction<{ verified2FA: AuthState['verified2FA'] }>) {
      state.verified2FA = action.payload.verified2FA
    }
  }
})

export default authSlice.reducer

export const { login, logout, verifyChange } = authSlice.actions
