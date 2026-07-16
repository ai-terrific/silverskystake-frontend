import {
  List,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  useTheme
} from '@mui/material'
import { useState } from 'react'

import { StyledListItem } from '@/components/common.style'
import { SESSION_DATA } from '@/constants'
import { useDeviceType } from '@/hooks'
import { color } from '@/theme'
import { SessionType } from '@/types'

const StatusTextButton = styled(Typography, { shouldForwardProp: prop => prop !== 'status' })<{ status: boolean }>(
  ({ theme, status }) => ({
    '&:hover': {
      cursor: status ? 'text' : 'pointer',
      textDecoration: status ? 'none' : 'underline'
    }
  })
)

const SessionSetting = () => {
  const theme = useTheme()
  const { isMobile } = useDeviceType()
  const [sessions, setSessions] = useState<SessionType[]>(SESSION_DATA)

  const handleRemoveSession = (index: number, status: boolean) => {
    if (status) {
      sessions.splice(index, 1)
      setSessions([...sessions])
    }
  }

  return (
    <>
      {isMobile ? (
        <List>
          {sessions.map((item, index) => (
            <StyledListItem key={item.browser}>
              <Stack spacing={1} width='100%'>
                <Stack>
                  <Typography>{item.browser}</Typography>
                  <Typography variant='body2' color='secondary'>
                    {item.near}
                  </Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                  <Typography variant='body2' color='secondary'>
                    {item.ip}
                  </Typography>
                  <Stack direction='row' spacing={3}>
                    <Typography variant='body2' color='secondary'>
                      {item.lastUsed}
                    </Typography>
                    <Typography
                      component='li'
                      variant='body2'
                      color={item.status ? 'error' : 'textDisabled'}
                      sx={{
                        listStyleType: 'disc  '
                      }}
                      onClick={() => handleRemoveSession(index, item.status)}
                    >
                      {item.status ? 'Current' : 'Remove Session'}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </StyledListItem>
          ))}
        </List>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={`${(1 / 3) * 100}%`}>Browser</TableCell>
                <TableCell>Near</TableCell>
                <TableCell>IP address</TableCell>
                <TableCell>Last Used</TableCell>
                <TableCell align='right'>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sessions.map((item, index) => (
                <TableRow key={item.browser}>
                  <TableCell>{item.browser}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.near}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.ip}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.lastUsed}</TableCell>
                  <TableCell align='right' sx={{ color: !item.status ? color.red : '#0E1525' }}>
                    <StatusTextButton status={item.status} onClick={() => handleRemoveSession(index, item.status)}>
                      {item.status ? 'Current' : 'Remove Session'}
                    </StatusTextButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default SessionSetting
