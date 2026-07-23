import { Avatar, Grid2, Paper, Popover, Stack, Typography } from '@mui/material'
import { Dispatch, FC, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppIcon } from '@/components/Core'
import { StyledCard, StyledIconButton } from '@/components/common.style'
import { PROFILE_ITEMS } from '@/constants'
import { dispatch, logout, useSelector } from '@/store'

interface DropDownType {
  anchorEl: HTMLButtonElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>
}

const ProfileDropDown: FC<DropDownType> = ({ anchorEl, setAnchorEl }: DropDownType) => {
  const navigate = useNavigate()
  const { user } = useSelector(store => store.auth)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const handleClick = (link: string) => {
    console.log(user)
    if (link == '/') {
      navigate(link)
      dispatch(logout())
    }
    handleClose()
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Paper elevation={0}>
        <Grid2 container width={320}>
          <Grid2 size={12}>
            <Stack direction='row' padding={2} spacing={1}>
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
          </Grid2>
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
      </Paper>
    </Popover>
  )
}

export default ProfileDropDown
