// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Layout from './Dashboard/Layout.jsx'
import Income from './pages/Income.jsx'
import Expense from './pages/Expense.jsx'
import App from './App.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path='/income' element={<Income/>}/>
    <Route path='/expense' element={<Expense/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>,
)
