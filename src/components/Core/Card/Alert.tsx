import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { color } from '@/theme'

const AlertCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  overflow: 'hidden',
  background: color.greyLight,
  margin: 16,
  ...theme.applyStyles('dark', {
    backgroundColor: color.layer2Dark
  })
}))

const CardAlertButton = styled(Button)(({ }) => ({
  width: 'fit-content',
  color: color.white,
  borderRadius: 8,
  fontSize: 10,
  padding: '4px 9px',
  minWidth: 69,
  height: 24
}))

const CardAlert = () => {
  return (
    <AlertCard>
      <Stack position='relative'>
        <Box component='img' src='/alert.png' width={'100%'} />
        <Box component='img' position='absolute' top={8} left={-18} src='/coin1.png' />
        <Box component='img' position='absolute' top={-10} right={50} src='/coin2.png' />
        <Box component='img' position='absolute' top={62} right={-15} src='/coin3.png' />
      </Stack>
      <Stack gap={1} p={1}>
        <Typography fontWeight={700} display='inline-flex' border='#000000'>
          FREE&nbsp;
          <Typography fontWeight={700} color='#F7931A'>
            BONUS
          </Typography>
        </Typography>
        <Stack direction='row' justifyContent='space-between'>
          <Typography fontSize={8} lineHeight='12px'>
            Get a free bonus from your chest every day!
          </Typography>
          <CardAlertButton variant='contained' color='primary' aria-label='Get Bonus'>
            Get Bonus
          </CardAlertButton>
        </Stack>
      </Stack>
    </AlertCard>
  )
}

export default CardAlert
