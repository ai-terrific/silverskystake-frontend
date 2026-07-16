import { Box, styled } from '@mui/material'

export const PreferenceContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '16px'
  }
}))
