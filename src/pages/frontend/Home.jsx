import React, { useState } from "react";
import { destinations } from "../../Data";
import Frontend from "../../layout/Frontend";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();

  let filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  let handleBookNow = () => {
    let firstDestination = filteredDestinations[0];
    if (firstDestination) {
      navigate(`/destination/${firstDestination.id}`);
    } else {
      alert("No destination found!");
    }
  };

  return (
    <Frontend>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        
        {/* Background Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?q=80&w=1332&auto=format&fit=crop"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl px-6">
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore The World <br />
            <span className="text-blue-400">With TravelGo 🌍</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Discover breathtaking destinations, affordable packages,
            and unforgettable travel experiences.
          </p>

          {/* Search + Book Now Card */}
          <div className="bg-white rounded-full shadow-xl p-2 flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            />
            <button
              onClick={handleBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold ml-2 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
       <div className="container mx-auto px-6 py-12">
      
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
              All Destinations 🌍
            </h1>
      
            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover"
                  />
      
                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-500">{item.country}</p>
      
                    <p className="text-blue-600 font-bold mt-2">
                      ${item.price}
                    </p>
      
                    <Link
                      to={'/details'}
                      className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Flight Booking ✈️</h3>
              <p className="text-gray-600">
                Book flights at affordable prices worldwide.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Hotel Reservation 🏨</h3>
              <p className="text-gray-600">
                Comfortable and luxury hotel booking services.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Tour Packages 🗺️</h3>
              <p className="text-gray-600">
                Customized tour packages for your dream vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready For Your Next Adventure?
        </h2>
        <p className="mb-6">
          Book your dream trip today and explore the world.
        </p>
        <Link
          to="/packages"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View Packages
        </Link>
      </section>
      
          </div>
    </Frontend>
  );
}

export default Home;