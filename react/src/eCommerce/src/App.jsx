import { useEffect, useState } from "react"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux"
import {login,logout} from './store/authSlice'
import { Outlet } from "react-router-dom"
import Header from './pages/Header'
import Footer from './pages/Footer'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userdata) => {
      if(userdata) dispatch(login(userdata))
        else{
      dispatch(logout())}
    })
    .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
    <Outlet />
    </ main>
    <Footer />
    </div>
  ) : <h1> Loading ... </h1>
}

export default App