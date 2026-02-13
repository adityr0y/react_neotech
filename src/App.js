import React from "react";
import Solutions from "./pages/solutions";
import Contact from "./pages/contact"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-[#eef7fb]">
     
      {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 left-0 w-full flex justify-between items-center px-20 h-18 bg-gradient-to-br from-white to-[#eef7fb] backdrop-blur-md z-50">
  {/* Logo */}
  <div className="flex items-center">
    <img 
      src="/image.png"
      alt="Logo"
      className="h-20 w-auto object-contain contrast-150 brightness-105 saturate-140"
    />
  </div>

  {/* Menu */}
  <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
    <li
      onClick={() =>
        document
          .getElementById("whatwedo")
          .scrollIntoView({ behavior: "smooth" })
      }
      className="hover:text-blue-500 cursor-pointer transition"
    >
      What We Do
    </li>

    <li
      onClick={() =>
        document
          .getElementById("solutions")
          .scrollIntoView({ behavior: "smooth" })
      }
      className="hover:text-blue-500 cursor-pointer transition"
    >
      Solutions
    </li>

    <li
  onClick={() =>
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" })
  }
  className="hover:text-blue-500 cursor-pointer transition"
>
  Contact
</li>
  </ul>

  {/* Button */}
  <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
    Get a Demo
  </button>
</nav>

{/* ================= HERO SECTION ================= */}
<section className="min-h-screen flex items-center px-20 pt-16">

  <div className="flex flex-col md:flex-row items-center justify-between">

    {/* LEFT SIDE */}
    <div className="max-w-6xl -mt-20">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
        Building{" "}
        <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
          Intelligent, Sustainable
        </span>
        <br />
        Technology Solutions
      </h1>

      <p className="mt-8 text-lg text-gray-600 max-w-2xl">
        NeoTech Elements delivers custom EHS, compliance, and <br />
        enterprise software designed for modern industries and <br />
        government partners.
      </p>
      <br />
      <br />

      <button className="mt-10 bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
        Request a Demo
      </button>
    </div>

    {/* RIGHT SIDE */}
    <div className="mt-24 md:mt-32 transform translate-y-10 -translate-x-20">
      <img
        src="/hero.png"
        alt="Preview"
        className="w-[250px] md:w-[280px] shadow-2xl rounded-xl"
      />
    </div>

  </div>
</section>



      {/* ================= WHAT WE DO SECTION ================= */}
      <section
        id="whatwedo"
        className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-[#eef7fb]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-20">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
                <span className="text-blue-600 text-2xl">⚙️</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                EHS Software
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Tier II reporting, compliance automation,
                and environmental data systems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 mb-6">
                <span className="text-cyan-600 text-2xl">🛠️</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Platforms
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Tailored enterprise solutions built for scale,
                security, and performance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 mb-6">
                <span className="text-green-600 text-2xl">🏛️</span>
              </div>

              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Government Tech
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Reliable, compliant, and secure systems
                for public sector needs.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Solutions />
      <Contact />


    </div>
  );
}

export default App;
