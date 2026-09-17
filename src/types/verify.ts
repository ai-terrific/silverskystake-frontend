import { Dispatch, SetStateAction } from 'react'

export interface VerifyCompleted {
  completed: boolean
  setCompleted: Dispatch<SetStateAction<boolean>>
}
