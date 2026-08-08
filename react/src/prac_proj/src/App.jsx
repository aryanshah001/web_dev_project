import { useEffect, useState } from "react"
import authService from './auth/Auth'
import {useDispatch} from 'react-redux'
import {login,logout} from './index'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
        .then((userdata) => {
            if(userdata) {
                dispatch(login(userdata))
            }
            else{
                dispatch(logout())
            }
        } )
        .finally(() => setLoading(false))
    }, [dispatch])

  return (!loading ? (
    <Header/>
  ):(null))
}

export default App