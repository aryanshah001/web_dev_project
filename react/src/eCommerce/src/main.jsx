import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './components/Signup'
import Products from './pages/Products'
import Cart from './pages/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
    <Route index element={<Home/>} />
    
    <Route path='/products' element={<Products/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/cart' element={<Cart/>} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>,
)
