import React from "react";

const Page = () => {
  return (
    <main id="main-content" className="flex-1 flex items-center justify-center py-20">

      <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-xl border border-primary/10">

        <h1 className="serif-heading text-3xl text-primary mb-2 text-center">
          Client Login
        </h1>

        <p className="text-primary/60 text-sm text-center mb-8">
          Access your investment dashboard
        </p>

        <form className="space-y-6">

          <div>
            <label
              htmlFor="username"
              className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2"
            >
              Username / Email
            </label>

            <input
              type="text"
              id="username"
              className="w-full bg-background-light border border-primary/10 rounded px-4 py-3 focus:ring-1 focus:ring-primary/20 transition-all text-primary"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              className="w-full bg-background-light border border-primary/10 rounded px-4 py-3 focus:ring-1 focus:ring-primary/20 transition-all text-primary"
            />
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="text-primary focus:ring-primary rounded border-gray-300"
              />
              <span className="text-primary/70">
                Remember me
              </span>
            </label>

            <a
              href="#"
              className="text-primary hover:underline font-medium"
            >
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3.5 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
          >
            Secure Login
          </button>

        </form>

        <p className="text-center text-xs text-primary/40 mt-8">
          &copy; 2023 Trivantage Capital. All rights reserved.
        </p>

      </div>

    </main>
  );
};

export default Page;