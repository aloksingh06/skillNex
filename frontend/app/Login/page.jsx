
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaChartLine, FaEnvelope, FaLock } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { userLoginApi, userRegisterApi } from '../Api/user.api';

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return setError("Email is required");
    if (!password.trim()) return setError("Password is required");

    try{
      const response = await userLoginApi(email, password);
      console.log("Login successful:");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
      return;
    }

    router.push("/Dashboard");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!userName.trim()) return setError("Username is required");
    if (!email.trim()) return setError("Email is required");
    if (!password.trim()) return setError("Password is required");
    if (!confirmPassword.trim())
      return setError("Confirm password is required");
   
    if (password !== confirmPassword)
      return setError("Passwords do not match!");
    
    try{
      const response = await userRegisterApi(userName, email, password);
      console.log("Registration successful:");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", error);
      return;
    }

    setIsSignIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        
        <div className="flex justify-center mb-6">
          <FaChartLine className="text-blue-500 text-5xl" />
        </div>

        <h1 className="text-white text-center text-3xl font-bold mb-2">
          SkillNex
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Unlock your career potential. Please enter your details.
        </p>

        <div className="flex bg-gray-700 rounded-md p-1 mb-6">
          <button
            onClick={() => { setIsSignIn(true); setError("") }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isSignIn ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => { setIsSignIn(false); setError("") }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              !isSignIn ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {isSignIn ? (
          <form onSubmit={handleSignIn}>
            
            {/* Email */}
            <div className="mb-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="ml-2 text-gray-300 text-sm">Remember me</label>
              </div>

              <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            


            {/* username */}
             <div className="mb-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Username"
                  className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            {/* Email */}
            <div className="mb-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>
        )}

        <p className="text-gray-400 text-center text-xs mt-8">
          By continuing, you agree to our{" "}
          <a className="text-blue-500">Terms of Service</a> and{" "}
          <a className="text-blue-500">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
