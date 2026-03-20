import React, { useState } from "react";
import { destinations } from "../../Data";
import { Link, useNavigate } from "react-router-dom";
import Frontend from "../../layout/Frontend";

function Home() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();

  let filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  
  return (
    <>
    <Frontend>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Discover Your Next <br />
            <span className="text-blue-400">Adventure 🌍</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mt-6 mb-8">
            Explore breathtaking destinations and book unforgettable
            travel experiences with TravelGo.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-xl p-2 flex max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-full px-4 py-3 focus:outline-none text-black"
            />

    
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Popular Destinations ✈️
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {filteredDestinations.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <Link to={`/details/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
              </Link>

              <div className="p-6">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.country}</p>

                <p className="text-blue-600 font-bold mt-3 text-lg">
                  ${item.price}
                </p>

                <Link
                  to={`/details/${item.id}`}
                  className="block text-center mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </Frontend>
    </>
  );
}

export default Home;
