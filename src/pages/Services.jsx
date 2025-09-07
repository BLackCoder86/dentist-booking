import React from "react";

const services = [
  { name: "Teeth Cleaning", desc: "Professional cleaning service" },
  { name: "Tooth Extraction", desc: "Safe & painless extraction" },
  { name: "Braces", desc: "Get perfect alignment" },
  { name: "Root Canal", desc: "Treat infected tooth root" },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {services.map((service, i) => (
        <div key={i} className="p-6 bg-white rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">{service.name}</h2>
          <p className="text-gray-600 mt-2">{service.desc}</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Services;
