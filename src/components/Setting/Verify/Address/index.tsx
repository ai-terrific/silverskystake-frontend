import { useState } from 'react'

import VerifyItem from '../VerifyItem'
import AddressContent from './Content'

const VerificationAddress = () => {
  const [completed, setCompleted] = useState<boolean>(false)

  return (
    <VerifyItem
      level={3}
      completed={completed}
      description='Verification proof of address'
      content={<AddressContent completed={completed} setCompleted={setCompleted} />}
    />
  )
}

export default VerificationAddress
