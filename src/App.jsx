import { Provider } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import store from './redux'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/LogIn'
import Cart from './pages/Cart'

function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
