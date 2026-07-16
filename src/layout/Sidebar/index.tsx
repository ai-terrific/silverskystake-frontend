import { Stack } from '@mui/material'
import { useState } from 'react'

import CardAlert from '@/components/Core/Card/Alert'
import { useDeviceType } from '@/hooks'

import NavHeader from './NavHeader'
import NavLinks from './NavLinks'
import { SidebarBox } from './sidebar.style'

const Sidebar = () => {
  const { isDesktop } = useDeviceType()
  const [expanded, setExpanded] = useState<boolean>(true)

  return (
    <SidebarBox expanded={expanded}>
      <Stack>
        <NavHeader expanded={expanded} setExpanded={setExpanded} />
        <NavLinks expanded={expanded} setExpanded={setExpanded} />
      </Stack>
      {expanded === isDesktop && <CardAlert />}
    </SidebarBox>
  )
}

export default Sidebar
