import type { Dispatch, SetStateAction } from 'react'

export interface SidebarProps {
  expanded: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
}
