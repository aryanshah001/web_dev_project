import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home, Layout, About, Contact } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//       <Route path="" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/contact" element={<Contact/>} />
//     </Route>
//   )
// );
