import { Outlet } from "react-router-dom"
import Header from "./Dashboard/Header"
import Footer from './Dashboard/Footer'
import {useSelector} from 'react-redux'
import { useEffect } from "react"
import {loadTransaction} from './store/TransSlice'
import { useDispatch } from "react-redux"


function App() {
  const transaction = useSelector(state => state.transaction)
  const dispatch= useDispatch()

  useEffect(() => {
    const storedVal = JSON.parse(localStorage.getItem('transaction'))

    if(storedVal && storedVal.length > 0) dispatch(loadTransaction(storedVal))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('transaction',JSON.stringify(transaction))
  }, [transaction])
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-2">
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App