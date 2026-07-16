import VerifyItem from '../VerifyItem'
import AddressContent from './Content'

const VerificationAddress = () => {
  return <VerifyItem level={3} description='Verification proof of address' content={<AddressContent />} />
}

export default VerificationAddress
