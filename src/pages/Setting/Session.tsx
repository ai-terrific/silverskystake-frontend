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
import { formatDistance } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { StyledListItem } from '@/components/common.style'
import { useDeviceType } from '@/hooks'
import { userService } from '@/services'
import { color } from '@/theme'
import { Session } from '@/types'
import { handleError } from '@/util'

const StatusTextButton = styled(Typography, { shouldForwardProp: prop => prop !== 'status' })<{ status: boolean }>(
  ({ status }) => ({
    '&:hover': {
      cursor: status ? 'text' : 'pointer',
      textDecoration: status ? 'none' : 'underline'
    }
  })
)

const SessionSetting = () => {
  const theme = useTheme()
  const { isMobile } = useDeviceType()
  const [sessions, setSessions] = useState<Session[]>([])

  const getSessions = useCallback(async () => {
    try {
      const response = await userService.getSessionData()
      setSessions(response)
    } catch (err) {
      handleError(err)
    }
  }, [])

  const handleRemoveSession = useCallback(async (_id: string, status: number) => {
    try {
      if (!status) {
        const response = await userService.removeSession(_id)
        getSessions()
        toast.success(response.message, { hideProgressBar: true })
      }
    } catch (err) {
      handleError(err)
    }
  }, [])

  useEffect(() => {
    getSessions()
  }, [])

  return (
    <>
      {isMobile ? (
        <List>
          {sessions.map(item => (
            <StyledListItem key={item.session.browser}>
              <Stack spacing={1} width='100%'>
                <Stack>
                  <Typography>{item.session.browser}</Typography>
                  <Typography variant='body2' color='secondary'>
                    {item.session.region}, {item.session.city}
                  </Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                  <Typography variant='body2' color='secondary'>
                    {item.session.ip}
                  </Typography>
                  <Stack direction='row' spacing={3}>
                    <Typography variant='body2' color='secondary'>
                      {formatDistance(new Date(item.updatedAt), Date.now(), { addSuffix: true })}
                    </Typography>
                    <Typography
                      component='li'
                      variant='body2'
                      color={item.status ? 'error' : 'textDisabled'}
                      sx={{
                        listStyleType: 'disc  '
                      }}
                      onClick={() => handleRemoveSession(item._id, item.status || 0)}
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
              {sessions.map(item => (
                <TableRow key={item.session.browser}>
                  <TableCell>{item.session.browser}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>
                    {item.session.region}, {item.session.city}
                  </TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.session.ip}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>
                    {formatDistance(new Date(item.updatedAt), Date.now(), { addSuffix: true })}
                  </TableCell>
                  <TableCell align='right' sx={{ color: !item.status ? color.red : '#0E1525' }}>
                    <StatusTextButton
                      status={item.status > 0 || false}
                      onClick={() => handleRemoveSession(item._id, item.status || 0)}
                    >
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
