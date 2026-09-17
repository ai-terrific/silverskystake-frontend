import { useState } from 'react'

import VerifyItem from '../VerifyItem'
import IdentificationContent from './Content'

const Identification = () => {
  const [completed, setCompleted] = useState<boolean>(false)

  return (
    <VerifyItem
      level={2}
      completed
      description='Upload Identification'
      content={<IdentificationContent completed={completed} setCompleted={setCompleted} />}
    />
  )
}

export default Identification
