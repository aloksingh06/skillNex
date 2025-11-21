"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaPen, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaFilePdf, 
  FaDownload, 
  FaUpload, 
  FaCalendarAlt,
  FaChevronRight,
  FaBell,
  FaLock,
  FaTrashAlt
} from 'react-icons/fa';

// Skills ka data, aap ise dynamic data se replace kar sakte hain
const userSkills = [
  "React.js", "JavaScript", "Node.js", "Next.js", "TypeScript", 
  "GraphQL", "Tailwind CSS", "HTML5", "CSS3", "Git", "Docker",
  "Project Management"
];

// ==================
// 1. MAIN PAGE COMPONENT
// ==================
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      <Navbar activeLink="Profile" />

      {/* === 2. Main Content Area === */}
      <main className="max-w-7xl mx-auto p-6 md:p-8">
        
        {/* --- Profile Header Card --- */}
        <ProfileHeader />

        {/* --- Main Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* --- Left Column (2/3 width) --- */}
          <div className="lg:col-span-2 space-y-8">
            <MySkillsCard />
            <MyResumeCard />
          </div>

          {/* --- Right Column (1/3 width) --- */}
          <div className="lg:col-span-1 space-y-8">
            <AccountDetailsCard />
            <AccountSettingsCard />
          </div>

        </div>
      </main>
    </div>
  );
}


// ==================
// 2. NAVBAR COMPONENT
// (Aapke pichle design se)
// ==================
function Navbar({ activeLink }) {
  const links = ['Dashboard', 'Profile'];
  
  return (
    <nav className="bg-gray-900 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-white">SkillSync</h1>
            <div className="hidden md:flex items-center gap-6">
              {links.map(link => (
                <Link
                  key={link}
                  href={`/${link}`}
                  passHref
                >
                  <span className={`font-medium transition-colors duration-200 ${
                    activeLink === link
                      ? 'text-blue-500'
                      : 'text-gray-400 hover:text-white'
                  }`}>
                    {link}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src="/mypic1.jpeg" // Placeholder image
              alt="User Avatar"
            />
            <span className="text-gray-300 font-medium">Alok Singh</span>
          </div>
        </div>
      </div>
    </nav>
  );
}


// ==================
// 3. PROFILE HEADER CARD
// ==================
function ProfileHeader() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
      <img
        src="/mypic1.jpeg" // Placeholder image
        alt="Profile Avatar"
        className="w-28 h-28 rounded-full border-4 border-blue-500 flex-shrink-0"
      />
      <div className="flex-grow text-center md:text-left">
        <h1 className="text-3xl font-bold">Alok Singh</h1>
        <p className="text-blue-400 text-lg mt-1">Senior Frontend Developer</p>
        <div className="flex justify-center md:justify-start items-center gap-4 text-gray-400 mt-2 text-sm">
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt />
            Raipur, Chhattisgarh
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope />
            aloksingh6761@gmail.com
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 mt-4 md:mt-0">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
          <FaPen size={12} />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}


// ==================
// 4. "MY SKILLS" CARD
// ==================
function MySkillsCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Skills</h2>
        <Link href="/skills/manage" passHref>
          <span className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Manage Skills
          </span>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {userSkills.map(skill => (
          <span 
            key={skill}
            className="bg-blue-500/20 text-blue-200 text-sm font-medium px-3 py-1.5 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}


// ==================
// 5. "MY RESUME" CARD
// ==================
function MyResumeCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
      <h2 className="text-xl font-semibold mb-4">My Resume</h2>
      <div className="bg-gray-700 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FaFilePdf className="text-red-500 flex-shrink-0" size={24} />
          <span className="text-gray-200 font-medium">Alok_frontend_resume.pdf</span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
            <FaDownload />
            <span>Download</span>
          </button>
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200">
            <FaUpload />
            <span>Upload New</span>
          </button>
        </div>
      </div>
    </div>
  );
}


// ==================
// 6. "ACCOUNT DETAILS" CARD
// ==================
function AccountDetailsCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Account Details</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <FaEnvelope className="text-gray-400" />
          <span className="text-gray-300">aloksingh6761@gmail.com</span>
        </li>
        <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-gray-400" />
          <span className="text-gray-300">Raipur, Chhattisgarh</span>
        </li>
        <li className="flex items-center gap-3">
          <FaCalendarAlt className="text-gray-400" />
          <span className="text-gray-300">Member since: Nov 20, 2024</span>
        </li>
      </ul>
    </div>
  );
}


// ==================
// 7. "ACCOUNT SETTINGS" CARD
// ==================
function AccountSettingsCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <ul className="space-y-2">
        <SettingLink icon={<FaLock />} text="Change Password" href="/settings/password" />
        <SettingLink icon={<FaBell />} text="Notification Settings" href="/settings/notifications" />
        <SettingLink icon={<FaTrashAlt className="text-red-500" />} text="Delete Account" href="/settings/delete" isDanger={true} />
      </ul>
    </div>
  );
}

// Helper component for setting links
function SettingLink({ icon, text, href, isDanger = false }) {
  return (
    <li>
      <Link href={href} passHref>
        <span className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
          isDanger 
            ? 'text-red-500 hover:bg-red-500/10' 
            : 'text-gray-300 hover:bg-gray-700'
        }`}>
          <div className="flex items-center gap-3">
            {icon}
            <span className="font-medium">{text}</span>
          </div>
          {!isDanger && <FaChevronRight className="text-gray-500" />}
        </span>
      </Link>
    </li>
  );
}