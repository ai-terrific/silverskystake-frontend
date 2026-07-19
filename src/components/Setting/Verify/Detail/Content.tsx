import { Button, Divider, FormControl, Grid2, InputLabel, MenuItem, Stack, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { ChangeEvent, ReactNode, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { StyledInput, StyledSelect } from '@/components/common.style'
import { REGION } from '@/constants'
import { userService } from '@/services'
import { AccountType } from '@/types'
import { handleError } from '@/util'

const DetailContent = () => {
  const [formData, setFormData] = useState<Partial<AccountType>>({
    firstName: '',
    lastName: '',
    country: 0,
    birthPlace: '',
    birthday: new Date(),
    address: '',
    city: '',
    postalCode: 99999,
    industry: '',
    occupation: '',
    experience: ''
  })

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSelect = (e: SelectChangeEvent<unknown>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = useCallback(async () => {
    try {
      const response = await userService.verifyAccountInformation(formData)
      getAccountInfo()
      toast.success(response.message, { hideProgressBar: true })
    } catch (err) {
      handleError(err)
    }
  }, [formData])

  const getAccountInfo = useCallback(async () => {
    try {
      const response = await userService.getAccountInformation()
      setFormData(response)
    } catch (err) {
      handleError(err)
    }
  }, [])

  useEffect(() => {
    getAccountInfo()
  }, [])

  return (
    <Stack spacing={3}>
      <Divider />
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant='subtitle1'>Confirm your details</Typography>
          <Typography color='secondary'>
            input your details & confirm your identity. All information private and secure.
          </Typography>
        </Stack>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='first-name' required>
                First Name
              </InputLabel>
              <StyledInput
                placeholder='Type your name here'
                id='first-name'
                defaultValue='Irvan'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='last-name' required>
                Last Name
              </InputLabel>
              <StyledInput
                placeholder='Type your name here'
                id='last-name'
                defaultValue='Wibowo'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Country
              </InputLabel>
              <StyledSelect variant='outlined' name='country' defaultValue={0} fullWidth onChange={handleSelect}>
                {REGION.map((item, index) => (
                  <MenuItem key={item.code} value={index}>
                    {item.country}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Place of birth
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0} onChange={handleSelect} name='birthPlace'>
                {REGION[0].places.map((item, index) => (
                  <MenuItem key={item} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Date of birth
              </InputLabel>
              <StyledInput
                placeholder='Type your name here'
                type='date'
                id='first-name'
                defaultValue='2000-01-01'
                name='birthday'
                value={formData.birthday}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={12}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='last-name' required>
                Residential Address
              </InputLabel>
              <StyledInput
                placeholder='Type your name here'
                id='last-name'
                defaultValue='Boulevart Stree merdeka'
                name='address'
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                City
              </InputLabel>
              <StyledSelect
                variant='outlined'
                fullWidth
                defaultValue={0}
                value={formData.city}
                onChange={handleSelect}
                name='city'
              >
                {REGION[0].places.map((item, index) => (
                  <MenuItem key={item} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Postal Code
              </InputLabel>
              <StyledSelect
                variant='outlined'
                fullWidth
                defaultValue={0}
                value={formData.postalCode}
                onChange={handleSelect}
                name='postalCode'
              >
                <MenuItem value={0}>93721</MenuItem>
                <MenuItem value={1}>93722</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
        </Grid2>
      </Stack>
      <Divider />
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant='subtitle1'>Previous Occupation (Work)</Typography>
          <Typography color='secondary'>input your occupation details.</Typography>
        </Stack>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Occupation Industry
              </InputLabel>
              <StyledSelect
                variant='outlined'
                fullWidth
                defaultValue={0}
                value={formData.industry}
                onChange={handleSelect}
                name='industry'
              >
                <MenuItem value={0}>Technology</MenuItem>
                <MenuItem value={1}>Healthcare</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Occupation
              </InputLabel>
              <StyledSelect
                variant='outlined'
                fullWidth
                defaultValue={0}
                value={formData.occupation}
                onChange={handleSelect}
                name='occupation'
              >
                <MenuItem value={0}>Technician</MenuItem>
                <MenuItem value={1}>Engineer</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Occupation Experience
              </InputLabel>
              <StyledSelect
                variant='outlined'
                fullWidth
                defaultValue={0}
                value={formData.experience}
                onChange={handleSelect}
                name='experience'
              >
                <MenuItem value={0}>2 years</MenuItem>
                <MenuItem value={1}>5 years</MenuItem>
                <MenuItem value={2}>10 years</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
        </Grid2>
      </Stack>
      <Stack direction='row' justifyContent='flex-end'>
        <Button variant='contained' onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Stack>
    </Stack>
  )
}

export default DetailContent
