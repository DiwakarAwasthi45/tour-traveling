import React from "react";
import { Link } from "react-router-dom";
import Frontend from "../../layout/Frontend";

function About() {
  return (
    <>
    <Frontend>
    <div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About TravelGo 🌍
        </h1>
        <p className="text-lg">
          Discover who we are and why travelers trust us.
        </p>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://plus.unsplash.com/premium_photo-1661887966066-c9156b05df1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              We Make Travel Easy
            </h2>
            <p className="text-gray-600 mb-4">
              TravelGo is a modern travel platform designed to help
              people explore the world easily and affordably.
              We provide the best destinations, packages, and
              booking services for unforgettable experiences.
            </p>

            <p className="text-gray-600">
              Our mission is to connect travelers with amazing
              places around the globe while ensuring comfort,
              safety, and value for money.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Affordable Prices 💰
              </h3>
              <p className="text-gray-600">
                We offer competitive prices for every destination.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Trusted Service ⭐
              </h3>
              <p className="text-gray-600">
                Thousands of happy customers trust TravelGo.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                24/7 Support 📞
              </h3>
              <p className="text-gray-600">
                Our support team is always ready to help you.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready To Start Your Journey?
        </h2>
        <p className="mb-6">
          Explore our destinations and book your dream trip today.
        </p>
        <Link
          to="/destinations"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Destinations
        </Link>
      </section>

    </div>
    </Frontend>
    </>
  );
}

export default About;