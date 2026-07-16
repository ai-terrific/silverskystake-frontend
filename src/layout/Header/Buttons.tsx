import { Avatar, Box, Drawer, Stack, useColorScheme } from '@mui/material'
import { MouseEvent, useState } from 'react'

import { AppIcon, IconName } from '@/components/Core'
import { StyledIconButton } from '@/components/common.style'
import { ICONS } from '@/constants'
import { useDeviceType } from '@/hooks'

import MobileDropDown from './MobileDropDown'
import ProfileDropDown from './Profile'

const HeaderButtons = () => {
  const { mode, setMode } = useColorScheme()
  const { isSM } = useDeviceType()
  const toogleTheme = () => {
    if (mode === 'dark') setMode('light')
    else setMode('dark')
  }

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      {isSM ? (
        <>
          <StyledIconButton onClick={() => setOpen(true)}>
            <Avatar src='/avatar.png' />
          </StyledIconButton>
          <Drawer anchor='right' open={open} onClose={handleClose}>
            <MobileDropDown onClose={handleClose} />
          </Drawer>
        </>
      ) : (
        <Stack direction='row' spacing={1}>
          <StyledIconButton onClick={toogleTheme}>
            <AppIcon name='mode' size={20} />
          </StyledIconButton>
          {ICONS.map(item => (
            <StyledIconButton key={item.icon}>
              <AppIcon name={item.icon as IconName} size={20} />
            </StyledIconButton>
          ))}
          <Stack direction='row' alignItems='center' height={40}>
            <StyledIconButton onClick={handleClick}>
              <Avatar src='/avatar.png' />
            </StyledIconButton>
            <Box component='span'>
              <AppIcon name='menu' size={20} className='menu' />
            </Box>
          </Stack>
          <ProfileDropDown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
      )}
    </>
  )
}

export default HeaderButtons
