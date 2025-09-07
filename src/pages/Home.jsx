import React from "react";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-8">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 to-teal-400 p-10 rounded-3xl shadow-xl text-white">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-extrabold">Welcome to Dentist Booking</h1>
          <p className="text-lg">
            Book your appointments with the best dentists in town easily and quickly.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:scale-105 transition transform">
            Book Appointment
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1588776814546-9f8e3640d9d2?auto=format&fit=crop&w=600&q=80"
            alt="Dental Care"
            className="rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition">
          <h2 className="text-2xl font-bold mb-2">Expert Dentists</h2>
          <p className="text-gray-700">
            Our dentists are highly skilled and provide top-notch care.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Quick Booking</h2>
          <p className="text-gray-700">
            Book your appointments online within minutes without any hassle.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition">
          <h2 className="text-2xl font-bold mb-2 text-green-700">Affordable Services</h2>
          <p className="text-gray-700">
            Get high-quality dental services at prices that suit your budget.
          </p>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-50 p-6 rounded-3xl shadow-inner border-2 border-purple-200 transform hover:rotate-1 transition">
          <h3 className="text-xl font-semibold mb-2 text-purple-800">Safe & Sterile</h3>
          <p className="text-gray-700">
            All procedures are carried out in a clean and sterilized environment.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-2xl shadow-md border-2 border-pink-200 transform hover:-rotate-1 transition">
          <h3 className="text-xl font-semibold mb-2 text-pink-700">Friendly Staff</h3>
          <p className="text-gray-700">
            Our team is friendly, approachable, and always ready to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
