import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import authService from "../../../eCommerce/src/appwrite/auth"
import { login } from "../store/authSlice"
import { useState } from "react"

function Login() {
  const [error,setError] = useState(null)
  const {register,handleSubmit} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async(data) => {
    try {
      const res = await authService.login(data)
    if(res){
      const userData = await authService.getCurrentUser()
      if(userData) {
        dispatch(login({userData}))
        navigate('/')
      }
    }
    } catch (error) {
      setError(error.message)
    }
    
  }

  return (
    <div>

      {error&& <p> {error} </p>}

      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Email:-</label>
        <input 
        className="border-2 border-black"
        {...register('email',{required:true})}
        type="text"
         /> <br /><br />

         <label>Password:- </label>
         <input 
         className="border-2 border-black"
         {...register('password',{required:true})}
         type="text"
          />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login