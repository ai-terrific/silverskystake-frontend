import { MenuItem, Stack, Typography } from '@mui/material'

import { StyledSelect } from '@/components/common.style'

import { PreferenceContent } from './preference.style'

const Formatting = () => {
  return (
    <PreferenceContent>
      <Typography variant='h6' sx={{ minWidth: 350 }}>
        Fiat Number Formatting
      </Typography>
      <Stack spacing={4} flex={1}>
        <StyledSelect variant='outlined' defaultValue={0} sx={{ maxWidth: { sm: '100%', md: 300 } }}>
          <MenuItem value={0}>123,456,789</MenuItem>
          <MenuItem value={1}>123,456,789</MenuItem>
        </StyledSelect>
      </Stack>
    </PreferenceContent>
  )
}

export default Formatting
