"use client"
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Help() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && feedback.trim()) {
      toast.success("Thank you for your feedback!");
      setName("");
      setFeedback("");
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-blue-50 to-gray-100 text-gray-900 flex justify-center items-center">
      <div className="w-full max-w-lg p-4 rounded-xl shadow-md bg-white border border-gray-200">
      <Toaster/>
        <h1 className="text-2xl text-center font-bold mb-6 text-gray-800">
          Help & Support
        </h1>
        <section className="mb-3">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-700">
            Contact Us
          </h2>
          <p className="text-gray-500 mb-4 text-sm">
            For immediate assistance, reach out to us:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <Link href="tel:+1234567890" className="hover:text-blue-500">
                +1234567890
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <Link
                href="mailto:support@telemedicine.com"
                className="hover:text-blue-500"
              >
                support@telemedicine.com
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-2 text-gray-700">
            Feedback
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Share your experience..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-violet-500 rounded-lg font-medium text-white hover:bg-gray-500 transition"
            >
              Submit Feedback
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
