"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useSearchParams, useRouter } from "next/navigation";
import { SocialButtons } from "./SocialButton";

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

    if (!result?.ok) {
      Swal.fire(
        "Error",
        "Email/Password not matched. Try Google Login.",
        "error",
      );
      return;
    }

    Swal.fire("Success", "Welcome to Pawfect Match", "success");

    if (isModal && closeModal) closeModal();
    router.push(callback);
    router.refresh();
  };

  return (
    <div className="w-[920px] max-w-[92vw] overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT: FORM */}
        <div className="p-7 md:p-10">
          <h2 className="text-center text-xl font-semibold text-gray-800">
            Log In to FurryFriends
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {/* user icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21a8 8 0 10-16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-800 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {/* lock icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 11V8a5 5 0 0110 0v3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 11h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-800 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              {/* <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                Keep me logged in
              </label> */}

              <Link
                href="/forgot-password"
                className="text-xs text-violet-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-violet-600 text-sm font-semibold text-white shadow hover:bg-violet-700 active:scale-[0.99]"
            >
              Log In
            </button>
          </form>

          <div className="mt-5">
            <SocialButtons />
          </div>

          <p className="mt-5 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            {isModal ? (
              <button
                type="button"
                onClick={switchToRegister}
                className="font-semibold text-violet-600 hover:underline"
              >
                Register
              </button>
            ) : (
              <Link
                href="/register"
                className="font-semibold text-violet-600 hover:underline"
              >
                Register
              </Link>
            )}
          </p>
        </div>

        {/* RIGHT: IMAGE PANEL */}
        <div className="relative hidden md:block">
          {/* soft purple background like screenshot */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-violet-100/60 to-indigo-50" />

          <div className="relative flex h-full flex-col items-center justify-between p-10">
            {/* Logo / Title */}
            <div className="mt-2 flex items-center gap-2 text-violet-700">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                {/* paw icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.5 11.5c-1 0-2-1-2-2.5S6.3 6.5 7.5 6.5 9.5 7.5 9.5 9s-1 2.5-2 2.5zM16.5 11.5c-1 0-2-1-2-2.5s.8-2.5 2-2.5 2 1 2 2.5-1 2.5-2 2.5zM12 10.5c-1.2 0-2.3-1.5-2.3-3s1-2.5 2.3-2.5 2.3 1 2.3 2.5-1.1 3-2.3 3z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.2 19.2c.6-2.6 2.6-4 3.8-4s3.2 1.4 3.8 4c.2 1-.6 1.8-1.6 1.8H9.8c-1 0-1.8-.8-1.6-1.8z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-base font-semibold">Furry</div>
                <div className="-mt-1 text-base font-semibold">Home</div>
              </div>
            </div>

            {/* Cat Image + small button */}
            <div className="flex flex-col items-center gap-4">
              {/* Replace this src with your own image */}
              <div className="relative h-[260px] w-[260px]">
                <Image
                  src="/cat.png" // put cat image in /public/cat.png
                  alt="Cat"
                  fill
                  className="object-contain drop-shadow"
                  priority
                />
              </div>

              <button
                type="button"
                className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow hover:bg-gray-50"
              >
                Log In Now
              </button>
            </div>

            <div className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
