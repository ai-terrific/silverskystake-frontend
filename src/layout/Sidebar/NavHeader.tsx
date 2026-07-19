import { IconButton, Stack, styled, useColorScheme } from '@mui/material'
import { Link } from 'react-router-dom'

import { AppIcon, TabletLogo } from '@/components/Core'
import { useDeviceType } from '@/hooks'
import { SidebarProps } from '@/types'

const DropSidebar = styled(IconButton)({
  borderRadius: 12,
  width: 28,
  height: 28,
  position: 'absolute',
  right: '-14px',
  top: 26,
  backgroundColor: 'white',
  border: '1px solid #E8EDF3'
})

const NavHeader = ({ expanded, setExpanded }: SidebarProps) => {
  const { isDesktop } = useDeviceType()
  const { mode } = useColorScheme()

  return (
    <Stack direction='row' justifyContent='center' p='25px 24px 25px 16px' position='relative'>
      <Link to='/'>
        {expanded !== isDesktop ? (
          TabletLogo
        ) : (
          <AppIcon name={mode === 'light' ? 'logo' : 'dark-logo'} width='max-content' height='max-content' />
        )}
      </Link>
      <DropSidebar onClick={() => setExpanded(!expanded)}>
        <AppIcon name={expanded === isDesktop ? 'drop-left' : 'drop-right'} size={20} />
      </DropSidebar>
    </Stack>
  )
}

export default NavHeader
