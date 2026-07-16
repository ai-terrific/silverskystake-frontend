import VerifyItem from '../VerifyItem'
import IdentificationContent from './Content'

const Identification = () => {
  return <VerifyItem level={2} actionNeeded description='Upload Identification' content={<IdentificationContent />} />
}

export default Identification
