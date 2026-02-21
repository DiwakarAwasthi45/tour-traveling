import React from 'react';
import { useParams } from 'react-router-dom';
import { destinations } from '../../Data';

function Detail() {
  let { id } = useParams()

  // Find destination by id
  let find = destinations.find(a => a.id === Number(id))

  // If destination not found
  if (!find) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Destination Not Found
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">

        {/* Destination Image */}
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
          <img
            src={a.image}
            alt={a.name}
            className="h-80 object-cover rounded-xl hover:scale-105 transition"
          />
        </div>

        {/* Destination Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            {a.name}
          </h2>
          <p className="text-gray-500 mb-4">{a.country}</p>

          {/* Price */}
          <p className="text-3xl font-bold text-blue-600 mb-3">
            ${a.price}
          </p>

          {/* Rating & Duration */}
          <div className="flex gap-4 mb-4">
            <p className="text-yellow-500 font-semibold">⭐ {a.rating}</p>
            <p className="text-gray-600 font-medium">{a.duration || "7 Days"}</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {a.description || "Explore this amazing destination and enjoy your dream vacation!"}
          </p>

          {/* Book Now Button */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default Detail;