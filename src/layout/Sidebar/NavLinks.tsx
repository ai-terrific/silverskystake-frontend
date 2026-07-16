import { ListItemButton } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { NavLink, useLocation } from 'react-router-dom'

import { AppIcon } from '@/components/Core'
import { NAVBAR } from '@/constants'
import { useDeviceType } from '@/hooks'
import { SidebarProps } from '@/types'

const NavLinks = ({ expanded }: SidebarProps) => {
  const { isDesktop } = useDeviceType()
  const location = useLocation()

  return (
    <Box component='nav'>
      <List sx={{ pr: isDesktop === expanded ? 1 : 0 }}>
        {NAVBAR.map(child => (
          <ListItem disablePadding key={child.title}>
            <ListItemButton
              disableRipple
              selected={location.pathname === child.url}
              component={NavLink}
              to={child.url}
              aria-current={location.pathname === child.url ? 'page' : undefined}
            >
              <ListItemIcon>
                <AppIcon name={child.icon} size={20} />
              </ListItemIcon>
              {expanded === isDesktop && <ListItemText primary={child.title} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default NavLinks
