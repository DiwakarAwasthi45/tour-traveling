import React from "react"

import { Link, useNavigate } from "react-router-dom"
import { packages } from "../../Data";
import Frontend from "../../layout/Frontend";

function Packages() {
    let navigate = useNavigate()
    let handleClick=()=>{
        navigate('/details')
    }
  return (
    <>
    <Frontend>
    <div className="container mx-auto px-6 py-12">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Travel Packages ✈️
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
           { /* Added Link to navigate to details page when image is clicked */ }
            <Link to={`/details/${item.id}`}>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-60 object-cover"
                            />
                          </Link> 
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold">{item.title}</h2>

              <p className="text-gray-500 mt-1">
                Duration: {item.duration}
              </p>

              <p className="text-blue-600 font-bold mt-2 text-lg">
                ${item.price}
              </p>

              <Link to={`/details/${item.id}`}
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
    </Frontend>
    </>
  );
}

export default Packages