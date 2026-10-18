import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import AuthStatus from './protected/AuthStatus'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
    <Route index element={
      <AuthStatus authentication={false}> <Home/> </AuthStatus>
    } />
    <Route path='/login' element={
      <AuthStatus authentication={false}>
        <Login/>
      </AuthStatus>
    } />
    <Route path='/signup' element={
      <AuthStatus authentication={false}>
        <Signup/>
      </AuthStatus>
    } />
    <Route path='/cart' element={<Cart/>} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>,
)
