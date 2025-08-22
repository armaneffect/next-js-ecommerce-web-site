import Image from 'next/image';
import React from 'react';
import about from '@/public/about.jpg'

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          About Us
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="mt-4 text-lg text-gray-600">
              We are a passionate team dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. Our mission is to create user-friendly and impactful experiences that drive growth and foster long-term success.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our core values guide everything we do: integrity, collaboration, and a commitment to excellence. We believe in building strong relationships with our clients and working closely with them to achieve their goals.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            {/* You could add an image, video, or a list of features here */}
            <Image src={about} alt="About Us Image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
