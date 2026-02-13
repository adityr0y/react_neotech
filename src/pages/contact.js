import React from "react";

function Contact() {
  return (
    <section 
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-500 px-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-2xl p-10 rounded-md shadow-xl">
        
        <h2 className="text-center text-2xl font-semibold mb-8">
          Contact Us
        </h2>

        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              YOUR NAME *
            </label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                placeholder="First name"
                 className="w-full px-3 py-2 border border-gray-400 rounded"

              />
              <input
                type="text"
                placeholder="Last name"
                className="border px-4 py-3 rounded-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              EMAIL ADDRESS *
            </label>
            <input
              type="email"
              placeholder="Eg. example@email.com"
              className="border px-4 py-3 rounded-sm w-full mt-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              PHONE NUMBER
            </label>
            <input
              type="text"
              placeholder="Eg. +1 800 000000"
              className="border px-4 py-3 rounded-sm w-full mt-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-xs font-semibold text-gray-600">
              MESSAGE *
            </label>
            <textarea
              rows="4"
              placeholder="Please enter your comments..."
              className="border px-4 py-3 rounded-sm w-full mt-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-black transition flex items-center gap-2">
              Submit →
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;
