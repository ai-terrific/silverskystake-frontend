import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Header from '@/layout/Header'

import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <Stack direction='row'>
      <Sidebar />
      <Box maxHeight='100vh' width='100%' sx={{ overflowX: 'hidden' }}>
        <Container>
          <Header />
          <Outlet />
        </Container>
      </Box>
    </Stack>
  )
}

export default Layout
