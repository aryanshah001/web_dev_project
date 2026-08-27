import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import {login, logout} from './store/AuthSlice'

function App() {
const dispatch = useDispatch()
const [loading , setLoading] = useState(true)

useEffect(() => {
  authService.getCurrentUser()
  .then((userdata) => {
    if(userdata){
      dispatch(login(userdata))
    }  else{
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
} , [dispatch])

  return !loading ? (
    <div>
      <Header/>
      <main>
        Todo:<Outlet/>
      </main>
      <Footer/>
    </div>
  ) : (null)
}

export default App
