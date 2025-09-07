import React, { useState } from "react";
import doctors from "../data/doctors";

const Doctors = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(doctors.length / perPage);
  const startIndex = (page - 1) * perPage;
  const currentDoctors = doctors.slice(startIndex, startIndex + perPage);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Doctors</h1>
      <div className="grid gap-4">
        {currentDoctors.map((doc) => (
          <div key={doc.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
            <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-semibold">{doc.name}</h2>
              <p className="text-gray-600">{doc.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Doctors;
