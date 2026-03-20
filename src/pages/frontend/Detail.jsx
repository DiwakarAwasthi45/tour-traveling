import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { destinations } from '../../Data';
import Frontend from '../../layout/Frontend';

function Detail() {
  let { id } = useParams();

  // Find destination by id
  let find = destinations.find(a => a.id === Number(id));

  // If destination not found
  if (!find) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Destination Not Found
      </div>
    )
  }

  return (
    <>
    <Frontend>
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">

        {/* Destination Image */}
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
          <img
            src={find.image}
            alt={find.name}
            className="h-80 object-cover rounded-xl hover:scale-105 transition"
          />
        </div>

        {/* Destination Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            {find.name}
          </h2>
          <p className="text-gray-500 mb-4">{find.country}</p>

          {/* Price */}
          <p className="text-3xl font-bold text-blue-600 mb-3">
            ${find.price}
          </p>

          {/* Rating & Duration */}
          <div className="flex gap-4 mb-4">
            <p className="text-yellow-500 font-semibold">⭐ {find.rating}</p>
            <p className="text-gray-600 font-medium">
              {find.duration || "7 Days"}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {find.description || "Explore this amazing destination and enjoy your dream vacation!"}
          </p>

          {/* Book Now Button */}
          <Link to={`/booking/${find.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Book Now
          </ Link>

        </div>
      </div>
    </div>
    </Frontend>
    </>
  )
}

export default Detail;