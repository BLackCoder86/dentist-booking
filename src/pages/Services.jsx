import { useState } from "react";

export default function Services() {
  const [service, setService] = useState("Teeth Whitening");
  const [doctor, setDoctor] = useState("Dr. Anika Rahman");
  const [selectedDate, setSelectedDate] = useState("2024-07-05");
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:30 PM", "1:00 PM",
    "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
    "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
  ];

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    alert(`✅ Appointment booked for ${service} with ${doctor} on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>

      {/* Service & Doctor */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option>Teeth Whitening</option>
            <option>Cleaning</option>
            <option>Root Canal</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Doctor</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option>Dr. Anika Rahman</option>
            <option>Dr. John Smith</option>
            <option>Dr. Alice Brown</option>
          </select>
        </div>
      </div>

      {/* Calendar */}
      <div className="mb-6">
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded-lg"
        />
      </div>

      {/* Time Slots */}
      <h2 className="font-medium mb-2">Available Times</h2>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {times.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTime(t)}
            className={`p-2 rounded-lg border ${
              selectedTime === t ? "bg-blue-600 text-white" : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Confirm */}
      <button
        onClick={handleBooking}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
      >
        Confirm Booking
      </button>
    </div>
  );
}
