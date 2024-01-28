import Navigattion from './Navigation/Navigattion'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navigattion/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
