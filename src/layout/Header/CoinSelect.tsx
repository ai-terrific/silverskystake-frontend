import { Add } from '@mui/icons-material'
import {
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Stack,
  styled
} from '@mui/material'
import { useState } from 'react'

import { AppIcon } from '@/components/Core'
import { COIN_OPTION } from '@/constants'
import { color } from '@/theme'

const DepositButton = styled(Button)(({ theme }) => ({
  width: 100,
  ...theme.applyStyles('dark', {
    backgroundImage: color.gradient2
  })
}))

const CoinSelect = () => {
  const [selectedValue, setSelectedValue] = useState('bitcoin')
  const handleChange = (event: SelectChangeEvent<typeof selectedValue>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <Stack direction='row' height={40}>
      <Select onChange={handleChange} defaultValue={COIN_OPTION[0].type} sx={{ width: { xs: '100%', sm: 200 } }}>
        {COIN_OPTION.map(item => (
          <MenuItem value={item.type} key={item.type}>
            <ListItemIcon>
              <AppIcon name='bitcoin' size={20} />
            </ListItemIcon>
            <ListItemText>{`${item.value} ${item.type}`}</ListItemText>
          </MenuItem>
        ))}
      </Select>
      <DepositButton variant='contained' startIcon={<Add />}>
        Deposit
      </DepositButton>
    </Stack>
  )
}

export default CoinSelect
