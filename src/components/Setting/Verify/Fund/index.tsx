import { useState } from 'react'

import VerifyItem from '../VerifyItem'
import FundSourceContent from './Content'

const VerificationFundSource = () => {
  const [completed, setCompleted] = useState<boolean>(false)

  return (
    <VerifyItem
      level={4}
      completed={completed}
      description='Verification source of fund'
      content={<FundSourceContent completed={completed} setCompleted={setCompleted} />}
    />
  )
}

export default VerificationFundSource
