"use client";

import { useQuery } from "@tanstack/react-query";

export default function AppointmentsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const response = await fetch("/api/appointments");
      if (!response.ok) throw new Error("Failed to fetch appointments");
      return response.json();
    },
  });

  if (isLoading) return <p>Loading appointments...</p>;
  if (error) return <p>Error loading appointments: {error.message}</p>;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">Appointments</h1>
      {data.length === 0 ? (
        <p className="text-black">No appointments found.</p>
      ) : (
        <ul>
          {data.map((appointment, index) => (
            <li
              key={index}
              className="max-w-lg w-full bg-white rounded-lg p-4 text-black"
            >
              <p><strong>Doctor:</strong> {appointment.doctorName}</p>
              <p><strong>Name:</strong> {appointment.name}</p>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
