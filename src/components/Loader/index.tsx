import { PuffLoader } from 'react-spinners'

import { colors } from '../../styles/styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PuffLoader color={colors.PrimaryColor} />
    </Container>
  )
}

export default Loader
