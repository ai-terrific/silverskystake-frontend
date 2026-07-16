import { Box, styled } from '@mui/material'

export const Setting = styled(Box)(({ theme }) => ({
  padding: '24px',
  display: 'flex',
  gap: '50px',
  minWidth: 335,
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '16px'
  }
}))
