import { useState } from "react"
import authService from "../../../eCommerce/src/appwrite/auth"
import {useForm} from 'react-hook-form'
import { useDispatch } from "react-redux"
import { useNavigate,Link } from "react-router-dom"
import { login } from "../store/authSlice"

function Signup() {
    const [error , setError] = useState(null)
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signup = async(data) => {
        try {
            const create = await authService.createAccount(data)
            if(create){
                const userAcc = await authService.getCurrentUser()
                if(userAcc) dispatch(login({userData:userAcc}))
                    navigate('/')
            }
        } catch (error) {
            console.log('error::signup',error);
            setError(error.message)
        }
    }

  return (
    <div>

       {error && <p> {error} </p>}

       <p>Already Have an Account </p>
       <p className="mt-1"> click Here
        <Link 
       className=" px-1 ml-2 text-blue-500 hover:text-black"
       to='/login'> Login</Link></p> <br />

        <form onSubmit={handleSubmit(signup)}>
            <label>Enter Name :-</label>
        <input 
        className="border-2 border-black "
        placeholder="enter full Name"
        {...register('name',{required:true})}
        type="text" 
        /> <br /> <br />

            <label>Enter Email :-</label>
        <input 
        className="border-2 border-black "
        placeholder="Email"
        {...register('email',{required:true})}
        type="email" 
        /> <br /> <br />

        <label>Enter PASSWORD :-</label>
        <input 
        className="border-2 border-black "
        placeholder="enter password"
        type="text" 
        {...register('password',{required:true})}
        /> <br /><br />

        <button 
        className="border-2 border-black px-2 py-1"
        type="submit">Signup</button>
        </form>

    </div>
  )
}

export default Signup