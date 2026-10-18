import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (err) {
      console.error("LoginComponents::Error", err);
      setError(err?.message || "Unable to sign in. Please check your details and try again.");
    }
  };

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-9">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Welcome back</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Login in to your account</h1>
          <p className="mt-2 text-sm text-slate-500">Enter your details to continue shopping.</p>
        </div>

        <form onSubmit={handleSubmit(login)} className="space-y-5">
          <div>
            <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
            <input id="login-email" type="email" autoComplete="email" placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" } })} />
            {errors.email && <p className="mt-1.5 text-sm text-rose-600">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
            <input id="login-password" type="password" autoComplete="current-password" placeholder="Enter your password"
              aria-invalid={Boolean(errors.password)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("password", { required: "Password is required" })} />
            {errors.password && <p className="mt-1.5 text-sm text-rose-600">{errors.password.message}</p>}
          </div>
          {error && <p role="alert" className="rounded-lg bg-rose-50 px-3.5 py-3 text-sm text-rose-700">{error}</p>}
          <button type="submit" disabled={isSubmitting}
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Logging in…" : "Login"}
          </button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-600">
          Don’t have an account? <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">Create Account</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
