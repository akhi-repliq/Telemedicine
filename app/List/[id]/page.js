"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import doctorsData from "@/public/data.json";
import Image from "next/image";

export default function DoctorProfile() {
  const { id } = useParams(); 
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);

  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          doctorName: doctor.name,
          doctorId: doctor.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book the appointment");
      }

      console.log("Booking successful:", await response.json());
      setIsBookingSuccessful(true);
    } catch (error) {
      console.error("Error booking appointment:", error.message);
    }
  };

  if (!doctor) {
    return <h1 className="text-center text-2xl font-bold mt-20">Doctor Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <Image
            src={doctor.image ? `${doctor.image}` : "/pic.jpg"}
            width={150}
            height={150}
            alt={`Dr. ${doctor.name}`}
            className="rounded-full mx-auto border-4 border-blue-200 shadow-sm"
          />
          <h1 className="text-3xl font-bold mt-6 text-gray-800">Dr. {doctor.name}</h1>
          <p className="text-gray-600 mt-3 text-base">{doctor.description}</p>
        </div>

        {!isBookingSuccessful ? (
          <form onSubmit={handleBooking} className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Book an Appointment</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Appointment Date</label>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Appointment Time</label>
              <select
                name="time"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              >
                <option value="">Select a time slot</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-violet-600 text-white text-sm font-semibold rounded-md shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Confirm Appointment
            </button>
          </form>
        ) : (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-semibold text-green-600">Appointment Confirmed!</h2>
            <p className="text-gray-700 mt-2">
              Thank you for booking an appointment with Dr. {doctor.name}, we will provide meeting link to your mail shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
