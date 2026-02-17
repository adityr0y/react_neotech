import React from "react";

function WhatWeDo() {
  return (
    <div
      id="whatwedo"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-gray-100 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What We Do
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We build intelligent, scalable and secure digital solutions
            designed for modern businesses and government partners.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-16">

  {/* Card 1 */}
  <div className="bg-white p-10 rounded-7xl shadow-md hover:shadow-2xl transition duration-500 text-center">
    
    <h3 className="text-xl font-semibold mb-4">EHS Software</h3>
    <p className="text-gray-600">
      Tier II reporting, compliance automation and environmental systems.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 text-center">
    
    <h3 className="text-xl font-semibold mb-4">Custom Platforms</h3>
    <p className="text-gray-600">
      Scalable enterprise platforms engineered for performance.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 text-center">
    
    <h3 className="text-xl font-semibold mb-4">Government Tech</h3>
    <p className="text-gray-600">
      Secure and compliant systems for public sector needs.
    </p>
  </div>

</div>
      </div>
    </div>
  );
}

export default WhatWeDo;