

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturesSection = () => {
  return (
    <section className="bg-[#000217] text-white py-20 px-6 md:px-20 space-y-24">
      {/* Feature 1: Analyze Your Skill */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">1. Analyze Your Skill</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Get a complete analysis of your current technical and soft skills.
            Our AI identifies your strengths and weaknesses based on your
            profile, projects, and assessments.
          </p>
          <Link href="/Onboarding" className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold transition duration-300 shadow-md">
            Get Started
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/analysis.jpeg"
            alt="Analyze Skills"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Feature 2: Find Opportunities */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">2. Find Opportunities</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Discover job openings, internships, and freelance gigs that match
            your skills. Get AI-powered recommendations tailored for your
            career growth.
          </p>
          <Link href="/Opportunity" className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold transition duration-300 shadow-md">
            Get Started
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/oppurtunity.jpeg"
            alt="Find Opportunities"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Feature 3: Learning Path */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">3. Learning Path</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Follow personalized learning paths built for your development. Get
            curated courses, projects, and milestones to keep your progress
            consistent and measurable.
          </p>
          <Link href="/LearningPath" className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold transition duration-300 shadow-md">
            Get Started
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/learning_path.jpeg"
            alt="Learning Path"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
