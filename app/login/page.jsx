"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  useEffect(() => {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
      menu.classList.toggle("hidden");
    };

    btn?.addEventListener("click", toggleMenu);

    return () => {
      btn?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="bg-background-light text-primary min-h-screen flex flex-col">
      
      {/* Login */}
      <main
        id="main-content"
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
              <label htmlFor="login-email" className="text-xs font-bold uppercase text-primary/70 mb-2 block">
                Username / Email
              </label>
              <input
                id="login-email"
                type="text"
                className="w-full bg-background-light border border-primary/10 rounded px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="login-password" className="text-xs font-bold uppercase text-primary/70 mb-2 block">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className="w-full bg-background-light border border-primary/10 rounded px-4 py-3"
              />
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
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