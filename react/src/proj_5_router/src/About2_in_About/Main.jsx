import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Layout, Home , About, Contact, User, Github,About2} from './components'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { GithubLoad } from './components/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>}/>

      <Route path='about' element={<About/>}>
      <Route path='about2' element={<About2/>}/>
      </Route>

      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>

      <Route path='github'
      loader={GithubLoad}
      element={<Github/>}/>
      
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
