import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Grid2,
  Stack,
  Typography,
  styled,
  useColorScheme
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

import { AppIcon, MobileLogo } from '@/components/Core'
import { StyledCard, StyledIconButton } from '@/components/common.style'
import { PROFILE_ITEMS } from '@/constants'
import { dispatch, logout } from '@/store'

import CoinSelect from '../CoinSelect'

const CustomizedButton = styled(Button)(({}) => ({
  padding: 10,
  justifyContent: 'flex-start',
  backgroundColor: '#FAFBFC',
  gap: 8,
  '& .MuiButton-startIcon': {
    marginRight: 0
  }
}))

const CustomizedAccordion = styled(Accordion)({
  '&::before': {
    opacity: 0
  }
})

const CustomizedSummary = styled(AccordionSummary)({
  padding: 0
})

const CustomizedDetails = styled(AccordionDetails)({
  padding: '16px 0'
})

const MobileDropDown = ({ onClose }: { onClose: () => void }) => {
  const { mode, setMode } = useColorScheme()
  const navigate = useNavigate()

  const toogleTheme = () => {
    if (mode === 'dark') setMode('light')
    else setMode('dark')
  }

  const handleClick = (link: string) => {
    navigate(link)
    if (link == '/') dispatch(logout())
  }

  return (
    <Stack minHeight='100vh' padding='0 20px' spacing={2}>
      <Stack direction='row' padding='16px 0' justifyContent='space-between' alignItems='center' spacing={2}>
        <Link to='/'>{MobileLogo}</Link>
        <Stack direction='row' spacing={1}>
          <StyledIconButton onClick={toogleTheme}>
            <AppIcon name='mode' size={20} />
          </StyledIconButton>
          <StyledIconButton onClick={onClose}>
            <AppIcon name='close' size={16} />
          </StyledIconButton>
        </Stack>
      </Stack>
      <CoinSelect />
      <CustomizedButton variant='outlined' startIcon={<AppIcon name='search' size={20} />} color='inherit'>
        Search
      </CustomizedButton>
      <CustomizedButton variant='outlined' startIcon={<AppIcon name='alarm' size={20} />} color='inherit'>
        Notifications
      </CustomizedButton>
      <CustomizedButton variant='outlined' startIcon={<AppIcon name='message' size={20} />} color='inherit'>
        Messages
      </CustomizedButton>
      <CustomizedAccordion disableGutters defaultExpanded>
        <CustomizedSummary expandIcon={<AppIcon name='dropdown' size={20} />}>
          <Stack direction='row' spacing={1}>
            <StyledIconButton>
              <Avatar src='/avatar.png' />
            </StyledIconButton>
            <Stack>
              <Typography variant='subtitle1' fontWeight={500}>
                Irvan_wibowo
              </Typography>
              <Typography variant='caption' color='secondary'>
                irvanwibowo@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </CustomizedSummary>
        <CustomizedDetails>
          <Grid2 container width={'100%'}>
            {PROFILE_ITEMS.map((item, index) => (
              <Grid2 size={4} key={item.label}>
                <StyledCard
                  sx={{ borderBottomLeftRadius: index === 9 ? 18 : 0 }}
                  onClick={() => handleClick(item.link)}
                  elevation={0}
                >
                  <Stack spacing={1} justifyContent='center' alignItems='center' padding={2}>
                    <AppIcon name={item.icon} size={16} />
                    <Typography variant='body2' fontWeight={500} color={index === 10 ? 'error' : 'textPrimary'}>
                      {item.label}
                    </Typography>
                  </Stack>
                </StyledCard>
              </Grid2>
            ))}
          </Grid2>
        </CustomizedDetails>
      </CustomizedAccordion>
    </Stack>
  )
}

export default MobileDropDown
