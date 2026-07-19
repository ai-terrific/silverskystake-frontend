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
import { useSelector } from '@/store'
import { color } from '@/theme'
import { IgnoredUser } from '@/types'
import { handleError } from '@/util'

const TextButton = styled(Typography)(({}) => ({
  color: color.prime,
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline'
  }
}))

const IgnoredUsersSetting = () => {
  const theme = useTheme()
  const { isMobile } = useDeviceType()
  const { token } = useSelector(store => store.auth)
  console.log(token)

  const [ignoredUsers, setIgnoredUsers] = useState<IgnoredUser[]>([])

  const getIgnoredUsers = useCallback(async () => {
    try {
      const response = await userService.getIgnoreUsers()
      console.log(response)
      setIgnoredUsers(response)
    } catch (err) {
      handleError(err)
    }
  }, [])

  const handleRemoveUser = useCallback(async (ignoredUser: string) => {
    try {
      const response = await userService.removeSession(ignoredUser)
      getIgnoredUsers()
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }, [])

  useEffect(() => {
    getIgnoredUsers()
  }, [])

  return (
    <>
      {isMobile ? (
        <List>
          {ignoredUsers.map((item, index) => (
            <StyledListItem key={`index-${index}`}>
              <Stack direction='row' width='100%' justifyContent='space-between' alignItems='center'>
                <Stack>
                  <Typography>{item.user.username}</Typography>
                  <Typography variant='body2' color='secondary'>
                    {formatDistance(new Date(item?.createdAt), Date.now(), { addSuffix: true })}
                  </Typography>
                </Stack>
                <Typography variant='body2'>
                  <TextButton onClick={() => handleRemoveUser(item.user._id)}>Remove</TextButton>
                </Typography>
              </Stack>
            </StyledListItem>
          ))}
        </List>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={`${(2 / 3) * 100}%`}>Username </TableCell>
                <TableCell>Last Used</TableCell>
                <TableCell align='right'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ignoredUsers.map((item, index) => (
                <TableRow key={`index-${index}`}>
                  <TableCell>{item.user.username}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>
                    {formatDistance(new Date(item?.createdAt), Date.now(), { addSuffix: true })}
                  </TableCell>
                  <TableCell align='right'>
                    <TextButton onClick={() => handleRemoveUser(item.user._id)}>Remove</TextButton>
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

export default IgnoredUsersSetting
