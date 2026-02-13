import { Settings, Database, Landmark } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section
      id="whatwedo"
      className="py-28 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-20">
          What We Do
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
              <Database className="text-blue-600" size={28} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              EHS Software
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Tier II reporting, compliance automation, and environmental
              data systems.
            </p>
          </div>


          {/* Card 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 mb-6">
              <Settings className="text-cyan-600" size={28} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Platforms
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Tailored enterprise solutions built for scale, security,
              and performance.
            </p>
          </div>


          {/* Card 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 mb-6">
              <Landmark className="text-green-600" size={28} />
            </div>

            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Government Tech
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Reliable, compliant, and secure systems for public sector needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

