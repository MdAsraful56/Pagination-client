import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { createRoutesFromChildren } from 'react-router'
import Main from './layouts/Main/Main'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={ <Main /> }>
        <Route path='checkout' element={ <Checkout />  } />
        <Route path='login' element={ <Login /> } />
      </Route>
    )
  )




  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <Shop></Shop>
    },
    {
      path: 'orders',
      element: <Orders></Orders>,
      loader: cartProductsLoader
    },
    {
      path: 'inventory',
      element: <Inventory></Inventory>
    },
    {
      path:'checkout',
      element: <Checkout></Checkout>
    },
    {
      path: 'login',
      element: <Login></Login>
    }





  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
