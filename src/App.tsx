import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles/styles'

import Rotas from './routes'
import Footer from './Containers/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
