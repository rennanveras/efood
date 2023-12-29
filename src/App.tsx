import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles/styles'

import Rotas from './routes'
import Footer from './Containers/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
