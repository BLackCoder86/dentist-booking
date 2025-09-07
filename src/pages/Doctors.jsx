import { useState } from "react";

const doctors = [
  { name: "Dr. Anika Rahman", email: "anika@example.com", img: "https://i.pravatar.cc/100?img=1" },
  { name: "Dr. John Smith", email: "john@example.com", img: "https://i.pravatar.cc/100?img=2" },
  { name: "Dr. Alice Brown", email: "alice@example.com", img: "https://i.pravatar.cc/100?img=3" },
  { name: "Dr. Michael Lee", email: "michael@example.com", img: "https://i.pravatar.cc/100?img=4" },
  { name: "Dr. Sophia Davis", email: "sophia@example.com", img: "https://i.pravatar.cc/100?img=5" },
];

export default function Doctors() {
  const [page, setPage] = useState(1);
  const pageSize = 2;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = doctors.slice(start, end);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Our Doctors</h1>
      <div className="grid gap-4">
        {paginated.map((doc, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-4">
            <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-semibold">{doc.name}</p>
              <p className="text-gray-600">{doc.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          disabled={end >= doctors.length}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
