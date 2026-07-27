import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  Stack,
  Tab,
  Tabs,
  styled,
  useColorScheme
} from '@mui/material'
import { Dispatch, MouseEvent, SetStateAction, SyntheticEvent, useState } from 'react'

import { AppIcon } from '@/components/Core'
import { StyledIconButton } from '@/components/common.style'
import { useDeviceType } from '@/hooks'
import { useSelector } from '@/store'
import { color } from '@/theme'

import CheckEmail from './CheckEmail'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import MobileDropDown from './MobileDropDown'
import ProfileDropDown from './Profile'
import Register from './Register'

const LoginButton = styled(Button)(({}) => ({
  backgroundColor: '#F09C01',
  color: color.white
}))

type Mode = 'login' | 'register' | 'forgotPassword' | 'sentEmail'

interface AuthDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const AuthDialog = ({ open, setOpen, value, setValue }: AuthDialogProps) => {
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth='sm' fullWidth>
      <DialogContent>
        <Stack spacing={3}>
          <Stack direction='row' justifyContent='space-between'>
            <Tabs value={value} onChange={handleChange}>
              <Tab label='Login' value='login' />
              <Tab label='Register' value='register' />
            </Tabs>
            <IconButton>
              <AppIcon name='close' />
            </IconButton>
          </Stack>
          {value === 'login' ? (
            <Login setOpen={setOpen} setValue={setValue} />
          ) : value === 'register' ? (
            <Register />
          ) : value == 'forgotPassword' ? (
            <ForgotPassword setValue={setValue} />
          ) : (
            <CheckEmail setValue={setValue} />
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

const HeaderButtons = () => {
  const { mode, setMode } = useColorScheme()
  const { isSM } = useDeviceType()
  const toogleTheme = () => {
    if (mode === 'dark') setMode('light')
    else setMode('dark')
  }

  const { isLoggedIn } = useSelector(store => store.auth)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('login')

  const handleClose = () => {
    setDrawerOpen(false)
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      {isSM ? (
        <>
          <StyledIconButton onClick={() => setDrawerOpen(true)}>
            <Avatar src='/avatar.png' />
          </StyledIconButton>
          <Drawer anchor='right' open={drawerOpen} onClose={handleClose}>
            <MobileDropDown onClose={handleClose} />
          </Drawer>
        </>
      ) : (
        <Stack direction='row' spacing={1}>
          <StyledIconButton onClick={toogleTheme}>
            <AppIcon name='mode' size={20} />
          </StyledIconButton>
          <StyledIconButton>
            <AppIcon name='search' size={20} />
          </StyledIconButton>
          {isLoggedIn ? (
            <>
              <StyledIconButton>
                <AppIcon name='alarm' size={20} />
              </StyledIconButton>
              <StyledIconButton>
                <AppIcon name='message' size={20} />
              </StyledIconButton>
              <Stack direction='row' alignItems='center' height={40}>
                <StyledIconButton onClick={handleClick}>
                  <Avatar src='/avatar.png' />
                </StyledIconButton>
                <Box component='span'>
                  <AppIcon name='menu' size={20} className='menu' />
                </Box>
              </Stack>
            </>
          ) : (
            <LoginButton startIcon={<AppIcon name='person' size={16} />} onClick={() => setOpen(true)}>
              Login
            </LoginButton>
          )}
          <ProfileDropDown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
          <AuthDialog open={open} setOpen={setOpen} value={value} setValue={setValue} />
        </Stack>
      )}
    </>
  )
}

export default HeaderButtons
