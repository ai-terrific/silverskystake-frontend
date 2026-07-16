import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { AppIcon, MobileLogo } from '@/components/Core'

const NavHeader = ({ onClose }: { onClose: () => void }) => {
  return (
    <Stack height='68px' paddingLeft='20px' justifyContent='center'>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Box component='span' sx={{ cursor: 'pointer' }} onClick={onClose}>
          <AppIcon name='close' size={16} />
        </Box>
        <Link to='/'>{MobileLogo}</Link>
      </Stack>
    </Stack>
  )
}

export default NavHeader
