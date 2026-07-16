import { Stack, Tab, Tabs, styled, tabsClasses } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TABS } from '@/constants'

const StyledTabs = styled(Tabs)({
  [`& .${tabsClasses.list}`]: {
    gap: 0
  }
})

const StyledTab = styled(Tab)(({ theme }) => ({
  background: 'none',
  border: 'none',
  '&.Mui-selected': {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.palette.baseShadow
  }
}))

const SettingTabs = () => {
  const navigate = useNavigate()
  const [currentTab, setCurrentTab] = useState<number>(Number(localStorage.getItem('Current')))
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
    localStorage.setItem('Current', newValue.toString())
    navigate(TABS[newValue].link)
  }

  return (
    <Stack direction='row'>
      <StyledTabs value={currentTab} onChange={handleChange}>
        {TABS.map((item, index) => (
          <StyledTab value={index} label={item.label} key={item.label} disableRipple />
        ))}
      </StyledTabs>
    </Stack>
  )
}

export default SettingTabs
