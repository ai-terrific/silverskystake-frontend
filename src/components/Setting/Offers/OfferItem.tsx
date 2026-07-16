import { FormControl, InputLabel, Stack, Typography, styled } from '@mui/material'

import { StyledInput, SubmitButton } from '@/components/common.style'

const OfferContent = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 24,
  borderRadius: 12
}))

const OfferItem = () => {
  return (
    <OfferContent spacing={3}>
      <Stack spacing={0.5}>
        <Typography variant='h6'>Account Setting</Typography>
        <Typography color='secondary'>Claim your welcome offer bonus. Input your . 24hours code</Typography>
      </Stack>
      <Stack direction='row' spacing={2} alignItems='flex-end'>
        <FormControl variant='standard' fullWidth>
          <InputLabel shrink htmlFor='bonus-code'>
            Bonus code
          </InputLabel>
          <StyledInput sx={{ height: 40 }} placeholder='Type Code here' id='bonus-code' />
        </FormControl>
        <SubmitButton variant='contained' disabled>
          SUBMIT
        </SubmitButton>
      </Stack>
    </OfferContent>
  )
}

export default OfferItem
