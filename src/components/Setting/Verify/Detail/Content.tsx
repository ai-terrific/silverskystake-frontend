import { Button, Divider, FormControl, Grid2, InputLabel, MenuItem, Stack, Typography } from '@mui/material'

import { StyledInput, StyledSelect } from '@/components/common.style'

const DetailContent = () => {
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
              <StyledInput placeholder='Type your name here' id='first-name' defaultValue='Irvan' />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='last-name' required>
                Last Name
              </InputLabel>
              <StyledInput placeholder='Type your name here' id='last-name' defaultValue='Wibowo' />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Country
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>Indonesia</MenuItem>
                <MenuItem value={1}>Italia</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Place of birth
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>Jakarta</MenuItem>
                <MenuItem value={1}>Jakarta</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Date of birth
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0} type='date'>
                <MenuItem value={0}>09/22/2001</MenuItem>
                <MenuItem value={1}>09/22/2001</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={12}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='last-name' required>
                Residential Address
              </InputLabel>
              <StyledInput placeholder='Type your name here' id='last-name' defaultValue='Boulevart Stree merdeka' />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                City
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>Jakarta</MenuItem>
                <MenuItem value={1}>Jakarta</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Postal Code
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
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
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>Technology</MenuItem>
                <MenuItem value={1}>Technology</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Occupation
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>Technician</MenuItem>
                <MenuItem value={1}>Technician</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <FormControl variant='standard' fullWidth>
              <InputLabel shrink htmlFor='auth-code' required>
                Occupation Experience
              </InputLabel>
              <StyledSelect variant='outlined' fullWidth defaultValue={0}>
                <MenuItem value={0}>2 years</MenuItem>
                <MenuItem value={1}>2 years</MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid2>
        </Grid2>
      </Stack>
      <Stack direction='row' justifyContent='flex-end'>
        <Button variant='contained'>SUBMIT</Button>
      </Stack>
    </Stack>
  )
}

export default DetailContent
