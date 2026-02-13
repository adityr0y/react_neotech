import React from "react";

function Solutions() {
  return (
    <div
      id="solutions"
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-[#eef7fb] flex items-center justify-center text-center px-6"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Let's Build Something Smarter
        </h1>
        <br />
        <br />

        <p className="mt-6 text-lg text-gray-600">
          Talk to NeoTech Elements about building intelligent software <br />
          that works with today's regulatory and operational demands.
        </p>

        <button className="mt-10 bg-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Solutions;

