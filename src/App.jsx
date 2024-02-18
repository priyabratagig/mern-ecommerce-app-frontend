import { Provider } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import store from './redux'
import ProductList from './pages/ProductList'
import Product from './pages/Product'

function App() {

  return (
    <Provider store={store}>
      <Product />
    </Provider>
  )
}

export default App
