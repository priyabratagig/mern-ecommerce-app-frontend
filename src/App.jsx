import { Provider } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import store from './redux'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/LogIn'

function App() {

  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default App
