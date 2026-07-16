import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'

import { AppIcon } from '@/components/Core'
import { Setting } from '@/components/Setting/setting.style'
import { useDeviceType } from '@/hooks'

interface VerifyItemProps {
  level: number
  completed?: boolean
  actionNeeded?: boolean
  description: string
  content: ReactElement
}

const VerifyItem = ({ level, completed, actionNeeded, description, content }: VerifyItemProps) => {
  const { isMobile } = useDeviceType()

  return (
    <Setting padding={{ xs: 2, md: 3 }}>
      {!isMobile && (
        <Stack direction='row' spacing={1.5} justifyContent='flex-start' sx={{ minWidth: { xs: 0, md: 350 } }}>
          <Typography variant='h6'>Level {level}</Typography>
          {completed && <Chip color='success' label='Completed' variant='outlined' />}
          {actionNeeded && <Chip color='warning' label='Action needed' variant='outlined' />}
        </Stack>
      )}
      <Box flex={1}>
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<AppIcon name='dropdown' size={20} />}>
            {isMobile ? (
              <Stack spacing={0.5}>
                <Stack direction='row' spacing={1.5} justifyContent='flex-start' sx={{ minWidth: { xs: 0, md: 350 } }}>
                  <Typography variant='h6'>Level {level}</Typography>
                  {completed && <Chip color='success' label='Completed' variant='outlined' />}
                  {actionNeeded && <Chip color='warning' label='Action needed' variant='outlined' />}
                </Stack>
                <Typography variant='subtitle1' color='secondary'>
                  {description}
                </Typography>
              </Stack>
            ) : (
              <Typography variant='subtitle1' color='secondary'>
                {description}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={3}>{content}</Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Setting>
  )
}

export default VerifyItem
