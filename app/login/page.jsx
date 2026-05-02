"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-background-light text-primary min-h-screen flex flex-col">

      {/* Login */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 flex items-center justify-center py-20"
      >
        <div className="max-w-md w-full bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl border border-primary/10 mx-4 sm:mx-0">
          <h1 className="serif-heading text-3xl mb-2 text-center !font-serif">
            Client Login
          </h1>
          <p className="text-primary/70 text-sm text-center mb-8">
            Access your investment dashboard
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="login-email"
                className="text-xs font-bold uppercase text-primary/70 mb-2 block"
              >
                Username / Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="login-email"
                name="username"
                type="text"
                autoComplete="username"
                required
                aria-required="true"
                className="w-full bg-background-light border border-primary/10 rounded px-4 py-3"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="text-xs font-bold uppercase text-primary/70 mb-2 block"
              >
                Password <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                aria-required="true"
                className="w-full bg-background-light border border-primary/10 rounded px-4 py-3"
              />
            </div>

            <div className="flex justify-between text-sm">
              <label htmlFor="login-remember" className="flex items-center gap-2">
                <input id="login-remember" name="remember" type="checkbox" />
                Remember me
              </label>
              <a href="#" className="font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded font-bold uppercase text-xs"
            >
              Secure Login
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}
