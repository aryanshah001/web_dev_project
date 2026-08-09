import { useState } from "react"
import {useDispatch} from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import  authService from '../auth/Auth'
import {login as storeLogin} from '../store/AuthSlice'
import {useForm} from 'react-hook-form'
import {Button ,Input} from './Footer'


function Login() {
    const {register,handleSubmit} = useForm()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async(data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData))
                    navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>
        <h1>already have an account</h1>

        <Link to='/signup'>signup</Link>

        <p>{error && {error}}</p>

        <div>
            <form
            onSubmit={handleSubmit(login)}
            >

                <input
                type="email"
                placeholder="enter email"
                className=""
                {...register('email',{
                    required:true,
                    validate:pattern
                })}
                />
            </form>
        </div>
    </div>
  )
}

export default Login 