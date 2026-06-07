// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import { Home, Layout, About, Contact , User , Github} from "./components";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//     <Route path="" element={<Home />}/>
//     <Route path="about" element={<About />}/>
//     <Route path="contact" element={<Contact />}/>
//     <Route path="user/:userid" element={<User />} />
//     <Route path="github" element={<Github />}/>
//     </Route>
//   )
// )

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {Layout ,Home , About , Contact , User , GithubNew , GithubLoader} from './components'
import {RouterProvider ,Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='github' element={<Github />} /> */}
      <Route 
      loader={GithubLoader}
      path='github_new' element={<GithubNew />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)