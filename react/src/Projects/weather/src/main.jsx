// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store/store.js'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Home from './pages/Home.jsx'
import AuthStatus from './protected/AuthStatus.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

    <Route index element={
      <AuthStatus authentication>
        <Home/>
      </AuthStatus>
      
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

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>,
)
