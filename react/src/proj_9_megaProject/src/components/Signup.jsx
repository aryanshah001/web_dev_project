import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "../components";
import { login } from "../store/AuthSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userAccount = await authService.createAccount(data);
      if (userAccount) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
       <div
       className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">

            <Logo width="100%" />

        </span>
       </div>
    <h2>signup to create an account</h2>

        <h2>already have an account ?</h2>
        <Link
        to='/login'
        className="font-medium text-primary transition-all duration-200 hover:underline"
        >Sign in
        </Link>

        <p> {error && <p className="text-red-600 mt-8 text-center"> {error} </p>} </p>

        <form onSubmit={handleSubmit(create)}>
            <div className="space -y-5">
                <Input
                label = 'Full Name :'
                placeholder='enter your full name'
                {...register("name",{
                    required:true,
                })}
                />

                <input
                label='Email'
                placeholder="Enter your Email"
                type="email"
                {...register('email',{
                    required:true,
                    validate:{
                        matchPattern:(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)|| "plz enter valid email address" 
                    }
                })}
                />

                <Input
                label='password'
                type='password'
                placeholder='enter password'
                {...register ('password',{
                    required:true,
                })}
                />

                <Button
                type="submit"
                className="w-full"
                >create Account</Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
