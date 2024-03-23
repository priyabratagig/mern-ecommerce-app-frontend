import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import store from './redux';
import NotFoundPage from './pages/NotFoundPage';
import Register from './pages/Register';
import Login from './pages/LogIn';
import StoreLayout from './pages/StoreLayout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css';

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />
  },
  {
    path: "/",
    element: <StoreLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/products/:category",
        element: <ProductList />
      },
      {
        path: "/product/:productid/:name",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
