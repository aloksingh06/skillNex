"use client";

export default function Navbar() {
  return (
    <nav className="flex w-[90%] justify-between items-center px-8 py-4 backdrop-blur-lgborder-b border-white/10 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-sky-400 cursor-pointer">
        SkillPathAI
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-sky-400 transition">Home</a>
        <a href="#" className="hover:text-sky-400 transition">About</a>
        <a href="#" className="hover:text-sky-400 transition">Features</a>
        <a href="#" className="hover:text-sky-400 transition">Contact</a>

        <button className="px-4 py-2 bg-transparent border border-sky-400 rounded-full hover:bg-sky-400 hover:text-white transition">
          Login
        </button>
        <button className="px-4 py-2 bg-sky-500 rounded-full hover:bg-sky-600 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
