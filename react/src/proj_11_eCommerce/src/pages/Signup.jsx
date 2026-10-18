import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const signup = async (data) => {
    setError("");
    try {
      const createData = await authService.createAccount(data);
      if (createData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (err) {
      console.error("SignupComponents::Error", err);
      setError(err?.message || "Unable to create your account. Please try again.");
    }
  };

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-9">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Join our store</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Sign up to discover and shop our products.</p>
        </div>

        <form onSubmit={handleSubmit(signup)} className="space-y-5">
          <div>
            <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
            <input id="signup-email" type="email" autoComplete="email" placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" } })} />
            {errors.email && <p className="mt-1.5 text-sm text-rose-600">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="signup-password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
            <input id="signup-password" type="password" autoComplete="new-password" placeholder="Choose a password"
              aria-invalid={Boolean(errors.password)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("password", { required: "Password is required", minLength: { value: 8, message: "Use at least 8 characters" } })} />
            {errors.password && <p className="mt-1.5 text-sm text-rose-600">{errors.password.message}</p>}
          </div>
          {error && <p role="alert" className="rounded-lg bg-rose-50 px-3.5 py-3 text-sm text-rose-700">{error}</p>}
          <button type="submit" disabled={isSubmitting}
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Creating account…" : "Create account"}
          </button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
