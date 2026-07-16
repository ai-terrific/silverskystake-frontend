import { Stack } from '@mui/material'

import CardAlert from '@/components/Core/Card/Alert'

import NavHeader from './NavHeader'
import NavLinks from './NavLinks'

const MobileSidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <Stack minHeight='100vh' justifyContent='space-between'>
      <Stack>
        <NavHeader onClose={onClose} />
        <NavLinks />
      </Stack>
      <CardAlert />
    </Stack>
  )
}

export default MobileSidebar
