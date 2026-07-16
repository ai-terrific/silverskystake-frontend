import { Box, styled } from '@mui/material'

export const SidebarBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'expanded'
})<{ expanded: boolean }>(({ theme, expanded }) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: theme.palette.baseShadow,
  gap: '16px',
  height: '100vh',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  transition: 'all 300ms',
  minHeight: '100vh',
  [theme.breakpoints.up('lg')]: {
    width: expanded ? '210px' : '68px'
  },
  [theme.breakpoints.down('lg')]: {
    width: !expanded ? '210px' : '68px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))
