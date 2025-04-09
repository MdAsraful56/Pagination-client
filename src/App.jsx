import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main/Main'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'
import Inventory from './components/Inventory/Inventory'
import Orders from './components/Orders/Orders'
import cartProductsLoader from './loaders/cartProductsLoader'
import Shop from './components/Shop/Shop'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Main/> }>
        <Route index element={ <Shop/> } loader={ () => fetch(`http://localhost:5000/productsCount`) } />
        <Route path='orders' element={ <Orders/> } loader={ cartProductsLoader } />
        <Route path='inventory' element={ <Inventory/> } />
        <Route path='checkout' element={ <Checkout/> } />
        <Route path='login' element={ <Login/> } />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
