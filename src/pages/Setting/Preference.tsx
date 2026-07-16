import { Button, Divider, Stack, useTheme } from '@mui/material'

import Formatting from '../../components/Setting/Preference/Formatting'
import Marketing from '../../components/Setting/Preference/Marketing'
import Preference from '../../components/Setting/Preference/Preference'

const PreferenceSetting = () => {
  const theme = useTheme()

  return (
    <Stack
      spacing={3}
      width={'100%'}
      padding={3}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3
      }}
    >
      <Preference />
      <Divider />
      <Marketing />
      <Divider />
      <Formatting />
      <Divider />
      <Stack direction='row' justifyContent='flex-end'>
        <Button variant='contained'>SAVE CHANGES</Button>
      </Stack>
    </Stack>
  )
}

export default PreferenceSetting
