import {
  Button,
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
import { IGNORED_USER } from '@/constants'
import { useDeviceType } from '@/hooks'
import { color } from '@/theme'
import { IgnoredUserType } from '@/types'

const TextButton = styled(Typography)(({ theme }) => ({
  color: color.prime,
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline'
  }
}))

const IgnoredUsersSetting = () => {
  const theme = useTheme()
  const { isMobile } = useDeviceType()

  const [ignoredUsers, setIgnoredUsers] = useState<IgnoredUserType[]>(IGNORED_USER)

  const handleRemoveUser = (index: number) => {
    ignoredUsers.splice(index, 1)
    setIgnoredUsers([...ignoredUsers])
  }

  return (
    <>
      {isMobile ? (
        <List>
          {IGNORED_USER.map((item, index) => (
            <StyledListItem key={item.username}>
              <Stack direction='row' width='100%' justifyContent='space-between' alignItems='center'>
                <Stack>
                  <Typography>{item.username}</Typography>
                  <Typography variant='body2' color='secondary'>
                    {item.lastUsed}
                  </Typography>
                </Stack>
                <Typography variant='body2'>
                  <TextButton onClick={() => handleRemoveUser(index)}>Remove</TextButton>
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
              {IGNORED_USER.map((item, index) => (
                <TableRow key={item.username}>
                  <TableCell>{item.username}</TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.main }}>{item.lastUsed}</TableCell>
                  <TableCell align='right'>
                    <TextButton onClick={() => handleRemoveUser(index)}>Remove</TextButton>
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
