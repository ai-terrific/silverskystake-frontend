import { Box, Divider, Drawer, Stack, Tab, Tabs, Typography, styled } from '@mui/material'
import { SyntheticEvent, memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AppIcon, IconName, MobileLogo } from '@/components/Core'
import { useDeviceType } from '@/hooks'

import { CommonStack } from '../../components/common.style'
import MobileSidebar from '../Sidebar/MobileSidebar'
import HeaderButtons from './Buttons'
import CoinSelect from './CoinSelect'

const TabLabel = styled(Stack)(({ }) => ({
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center'
}))

interface TabContentProps {
  icon: IconName
  text: string
}

type Mode = 'casino' | 'sport'

const TabContent = memo<TabContentProps>(({ icon, text }) => {
  const { isDesktop } = useDeviceType()

  return (
    <TabLabel>
      <AppIcon name={icon} aria-hidden='true' />
      {isDesktop && <Typography>{text}</Typography>}
    </TabLabel>
  )
})

const Header = () => {
  const { isSM } = useDeviceType()
  const [value, setValue] = useState<Mode>('casino')
  const [open, setOpen] = useState<boolean>(false)

  const handleChange = (event: SyntheticEvent, newValue: Mode) => {
    setValue(newValue)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(false)
  }, [isSM])

  return (
    <CommonStack direction='row' justifyContent='space-between'>
      {isSM && (
        <Stack direction='row' spacing={1} alignItems='center'>
          <Box component='span' sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
            <AppIcon name='side-menu' size={16} />
          </Box>
          <Link to='/'>{MobileLogo}</Link>
        </Stack>
      )}
      {!isSM && (
        <Tabs value={value} onChange={handleChange}>
          <Tab value='casino' label={<TabContent icon='casino' text='casino' />} />
          <Tab value='sport' label={<TabContent icon='sport' text='sport' />} />
        </Tabs>
      )}
      <Stack direction='row' spacing={2}>
        {!isSM && (
          <>
            <CoinSelect />
            <Divider orientation='vertical' />
          </>
        )}
        {isSM && (
          <Tabs value={value} onChange={handleChange}>
            <Tab value='casino' label={<TabContent icon='casino' text='casino' />} />
            <Tab value='sport' label={<TabContent icon='sport' text='sport' />} />
          </Tabs>
        )}
        <HeaderButtons />
      </Stack>
      <Drawer anchor='left' open={open && isSM} onClose={handleClose}>
        <MobileSidebar onClose={handleClose} />
      </Drawer>
    </CommonStack>
  )
}

export default Header
