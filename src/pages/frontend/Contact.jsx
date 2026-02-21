import React from "react";

function Contact() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us 📞
        </h1>
        <p className="text-lg">
          We'd love to hear from you. Get in touch with TravelGo.
        </p>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

            <div className="space-y-4 text-gray-600">
              <p>📍 Kathmandu, Nepal</p>
              <p>📞 +977 98XXXXXXXX</p>
              <p>📧 info@travelgo.com</p>
              <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>

            {/* Map */}
            <div className="mt-6">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;