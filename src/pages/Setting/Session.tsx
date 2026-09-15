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
import { Session, Sessions } from '@/types'
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
  const [sessions, setSessions] = useState<Sessions[]>([])

  const getSessions = useCallback(async () => {
    try {
      const response = await userService.getSessionData()
      console.log(response)
      setSessions(response.sessions)
    } catch (err) {
      handleError(err)
    }
  }, [])

  // const handleRemoveSession = useCallback(async (_id: string, status: number) => {
  //   try {
  //     if (!status) {
  //       const response = await userService.removeSession(_id)
  //       getSessions()
  //       toast.success(response.message, { hideProgressBar: true })
  //     }
  //   } catch (err) {
  //     handleError(err)
  //   }
  // }, [])

  useEffect(() => {
    getSessions()
  }, [])

  return (
    <>
      {isMobile ? (
        <List>
          {sessions.map(item => (
            <StyledListItem key={item.data.browser}>
              <Stack spacing={1} width='100%'>
                <Stack>
                  <Typography>{item.data.browser}</Typography>
                  <Typography variant='body2' color='secondary'>
                    {item.data.address}
                  </Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                  <Typography variant='body2' color='secondary'>
                    {item.data.ip}
                  </Typography>
                  {/* <Stack direction='row' spacing={3}>
                    <Typography variant='body2' color='secondary'>
                      {formatDistance(new Date(item.data.updatedAt), Date.now(), { addSuffix: true })}
                    </Typography>
                    <Typography
                      component='li'
                      variant='body2'
                      color={item.data.status ? 'error' : 'textDisabled'}
                      sx={{
                        listStyleType: 'disc  '
                      }}
                      onClick={() => handleRemoveSession(item.data._id, item.data.status || 0)}
                    >
                      {item.data.status ? 'Current' : 'Remove Session'}
                    </Typography>
                  </Stack> */}
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
                <TableRow key={item.data.browser}>
                  <TableCell>{item.data.browser}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.data.address}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.data.ip}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>
                    {formatDistance(new Date(item.data.createdAt), Date.now(), { addSuffix: true })}
                  </TableCell>
                  {/* <TableCell align='right' sx={{ color: !item.data.status ? color.red : '#0E1525' }}> */}
                  <TableCell align='right' sx={{ color: color.red }}>
                    <StatusTextButton
                      status={true}
                      // status={item.data.status > 0 || false}
                      // onClick={() => handleRemoveSession(item.data._id, item.data.status || 0)}
                    >
                      {/* {item.data.status ? 'Current' : 'Remove Session'} */}
                      Current
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
