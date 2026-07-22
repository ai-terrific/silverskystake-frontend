import { FormControl, InputLabel, Stack, Typography, styled } from '@mui/material'
import { isEmpty } from 'lodash'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { StyledInput, SubmitButton } from '@/components/common.style'
import { userService } from '@/services'
import { OfferType } from '@/types'
import { handleError } from '@/util'

const OfferContent = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 24,
  borderRadius: 12
}))

const OfferItem = () => {
  const [formData, setFormData] = useState<OfferType>({
    expire: 1,
    code: ''
  })

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSubmit = useCallback(async () => {
    try {
      const response = await userService.submitOffer(formData)
      getOfferData()
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }, [formData])

  const getOfferData = useCallback(async () => {
    try {
      const response = await userService.getOfferCode({ expire: 1 })
      setFormData(response)
    } catch (err) {
      handleError(err)
    }
  }, [])

  useEffect(() => {
    getOfferData()
  }, [])

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
          <StyledInput
            sx={{ height: 40 }}
            placeholder='Type Code here'
            id='bonus-code'
            name='code'
            value={formData.code}
            onChange={handleChange}
          />
        </FormControl>
        <SubmitButton variant='contained' onClick={handleSubmit} disabled={isEmpty(formData.code)}>
          SUBMIT
        </SubmitButton>
      </Stack>
    </OfferContent>
  )
}

export default OfferItem
