'use client'; 

import { useState } from 'react';
import { Chrome } from 'lucide-react';
import { signIn, signOut, useSession } from "next-auth/react";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.655-3.411-11.28-7.962l-6.571,4.819C9.656,39.663,16.318,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.986,36.687,44,30.841,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);


const LoginRight = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const { data: session } = useSession();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-zinc-600 mb-8">Enter your details to login.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-zinc-700 text-sm font-bold" htmlFor="password">
                Password
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-zinc-300"></div>
          <span className="mx-4 text-zinc-500 text-sm">OR</span>
          <div className="flex-grow border-t border-zinc-300"></div>
        </div>


{session ? (
        <>
          <button
            onClick={() => signOut()}
          className="w-full flex items-center justify-center gap-2 border border-zinc-300 font-bold py-3 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
         onClick={() => signIn("google",{ callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 border border-zinc-300 font-bold py-3 rounded-lg hover:bg-zinc-50 transition-colors"
        >
          <GoogleIcon />
          Login with Google
        </button>
      )}


        

      </div>
    </div>
  );
};

export default LoginRight;