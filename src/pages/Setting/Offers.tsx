import { Grid2 } from '@mui/material'

import OfferItem from '@/components/Setting/Offers/OfferItem'

const OfferSetting = () => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <OfferItem />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <OfferItem />
      </Grid2>
    </Grid2>
  )
}

export default OfferSetting
