import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Layout,About,Contact,Github,User} from './components'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='github' element={<Github/>}/>
    <Route path='user/:userId' element={<User/>}/>

    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
