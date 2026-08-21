import { useState } from "react"
import authService from './appwrite/auth'
import {useDispatch} from 'react-redux'
import {login , logout} from './store/authSlice'
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState()
  const dispatch = useDispatch()

  authService.getUser()
  .then((userdata) => {
    if(userdata){
      dispatch(login(userdata))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))

  return !loading ? (
    <>
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  ) : null
}

export default App