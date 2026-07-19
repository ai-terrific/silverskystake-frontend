import { Box, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Stack, Typography } from '@mui/material'

import { AppIcon } from '@/components/Core'
import { StyledSelect } from '@/components/common.style'
import { REGION } from '@/constants'

import { PreferenceContent } from './preference.style'

const Preference = () => {
  return (
    <PreferenceContent>
      <Typography variant='h6' sx={{ minWidth: 350 }}>
        Preference
      </Typography>
      <Stack spacing={4} flex={1}>
        <FormControl variant='standard' fullWidth>
          <InputLabel shrink htmlFor='auth-code'>
            Language
          </InputLabel>
          <StyledSelect variant='outlined' fullWidth defaultValue='US'>
            {REGION.map(item => (
              <MenuItem value={item.code} key={item.country}>
                <ListItemIcon>
                  <Box
                    component='img'
                    loading='lazy'
                    width='20'
                    srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                    alt=''
                  />
                </ListItemIcon>
                <ListItemText>{item.country}</ListItemText>
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <FormControl variant='standard' fullWidth>
          <InputLabel shrink htmlFor='auth-code'>
            Language
          </InputLabel>
          <StyledSelect variant='outlined' fullWidth defaultValue={0}>
            <MenuItem value={0}>123,456,789</MenuItem>
            <MenuItem value={1}>123,456,789</MenuItem>
          </StyledSelect>
        </FormControl>
      </Stack>
    </PreferenceContent>
  )
}

export default Preference
