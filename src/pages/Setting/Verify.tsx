import { Stack } from '@mui/material'

import VerificationAddress from '@/components/Setting/Verify/Address'
import Detail from '@/components/Setting/Verify/Detail'
import VerificationFundSource from '@/components/Setting/Verify/Fund'
import Identification from '@/components/Setting/Verify/Identification'

const VerifySetting = () => {
  return (
    <Stack spacing={1}>
      <Detail />
      <Identification />
      <VerificationAddress />
      <VerificationFundSource />
    </Stack>
  )
}

export default VerifySetting
