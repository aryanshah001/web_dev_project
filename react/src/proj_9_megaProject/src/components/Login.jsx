import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import {login as storeLogin} from './index'
import {Button,Input,Logo} from './index'
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error , setError] = useState('')

    const login = (data) => {
        setError("")
        try {
            const session = await authService.login(data)

            if(session){
                const userdata = await authService.getCurrentUser()
                if(userdata) dispatch(storeLogin(data))
                    navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>
         
    </div>
  )
}

export default Login