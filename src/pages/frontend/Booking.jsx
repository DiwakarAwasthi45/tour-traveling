import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { destinations } from "../../Data"
import Frontend from "../../layout/Frontend"

function Booking() {
  let { id } = useParams();
  let navigate = useNavigate();

  let destination = destinations.find(
    (item) => item.id === parseInt(id)
  );

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: "",
    date: "",
  });

  if (!destination) {
    return <h2 className="text-center mt-10 text-2xl font-bold">Destination Not Found</h2>;
  }

  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successful 🎉");
    navigate("/");
  };

  return (
    <Frontend>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow"
        >
          ⬅ Back
        </button>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Destination Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">
                {destination.name}
              </h2>
              <p className="text-gray-500 mb-2">
                📍 {destination.country}
              </p>

              <p className="text-blue-600 text-2xl font-bold mb-2">
                ${destination.price}
                <span className="text-sm text-gray-500"> /person</span>
              </p>

              <p className="text-yellow-500 font-semibold">
                ⭐ {destination.rating}
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              ✈️ Book Your Trip
            </h3>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Persons */}
            <input
              type="number"
              name="persons"
              placeholder="Number of Persons"
              min="1"
              required
              value={formData.persons}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Date */}
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition transform"
            >
              Confirm Booking 🚀
            </button>
          </form>
        </div>
      </div>
    </Frontend>
  );
}

export default Booking;