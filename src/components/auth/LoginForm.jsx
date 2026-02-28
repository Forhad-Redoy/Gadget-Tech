"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useSearchParams, useRouter } from "next/navigation";
import { SocialButtons } from "./SocialButton";
// import { SocialButtons } from "./Socialform"; // Ensure path is correct

const LoginForm = ({ isModal, closeModal, switchToRegister }) => {
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: callback,
    });

    if (!result.ok) {
      Swal.fire("error", "Email/Password not matched. Try Google Login.", "error");
    } else {
      Swal.fire("success", "Welcome to Pawfect Match", "success");
      
      // 1. Close modal if it's open
      if (isModal && closeModal) {
        closeModal();
      }
      
      // 2. Redirect
      router.push(callback);
      router.refresh(); 
    }
  };

  return (
    <div className={`card w-full max-w-sm ${!isModal && "shadow-xl bg-base-100"}`}>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <p className="text-right text-sm">
            <Link href="/forgot-password" size="sm" className="link link-primary">
              Forgot Password?
            </Link>
          </p>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <SocialButtons />

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <button 
            type="button"
            onClick={isModal ? switchToRegister : undefined} 
            className="link link-primary"
          >
            {isModal ? "Register" : <Link href="/register">Register</Link>}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;