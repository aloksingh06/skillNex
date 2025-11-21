"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({profile}) {
  // temporary login state (replace with real auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if(profile){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [profile]);

  return (
    <nav className="flex w-full justify-between items-center px-28 py-4 backdrop-blur-lg border-b border-white/10 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-sky-400 cursor-pointer">
        SkillNex
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Conditional Navigation */}
        {!isLoggedIn ? (
          <>
            <Link href="/" className="hover:text-sky-400 transition">
              Home
            </Link >
            <Link href="/Login" className="hover:text-sky-400 transition">
              About
            </Link >
             <Link href="/" className="hover:text-sky-400 transition">
              Features
            </Link >
            <Link href="/Login" className="px-4 py-2 border border-blue-500 rounded-full hover:bg-sky-600 transition">
              Login
            </Link >
            <Link href="/Login" className="px-4 py-2 bg-sky-500 rounded-full hover:bg-sky-600 transition">
              Sign Up
            </Link >
            

            {/* Auth Buttons */}
           
          </>
        ) : (
          <>
            <a href="/Dashboard" className="hover:text-sky-400 transition">
              Dashboard
            </a>
            <a href="/Opportunity" className="hover:text-sky-400 transition">
              Opportunity
            </a>
            <a href="/LearningPath" className="hover:text-sky-400 transition">
              Learning Path
            </a>
            <a href="/Report" className="hover:text-sky-400 transition">
              Report
            </a>

            {/* Profile Section */}
            <Link href="/Profile" className="flex items-center gap-3 cursor-pointer">
              
              <Image
                src="/mypic1.jpeg"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border border-sky-400"
              />
            </Link>

            {/* Logout Button */}
           
          </>
        )}
      </div>
    </nav>
  );
}
