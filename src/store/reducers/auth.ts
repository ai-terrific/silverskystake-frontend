import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthState } from '@/types'

const initialState: AuthState = {
  isLoggedIn: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: AuthState['user'] }>) {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
    }
  }
})

export default authSlice.reducer

export const { login, logout } = authSlice.actions
