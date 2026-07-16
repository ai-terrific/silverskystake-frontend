import VerifyItem from '../VerifyItem'
import DetailContent from './Content'

const Detail = () => {
  return <VerifyItem level={1} completed description='Confirm your details' content={<DetailContent />} />
}

export default Detail
