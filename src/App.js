import Solutions from "./pages/solutions";
import Contact from "./pages/contact";
import Users from "./components/Users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-gray-800">
     
     {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-20">
  <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-8">

    {/* Logo */}
    <div
      className="flex items-center cursor-pointer"
      onClick={() =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <img
        src="/image.png"
        alt="NeoTech Logo"
        className="h-24 w-auto object-contain"
      />
    </div>

    {/* Menu */}
    <ul className="hidden md:flex gap-12 text-lg font-semibold text-gray-800">
      <li
        onClick={() =>
          document.getElementById("whatwedo")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hover:text-blue-600 cursor-pointer transition"
      >
        What We Do
      </li>

      <li
        onClick={() =>
          document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hover:text-blue-600 cursor-pointer transition"
      >
        Solutions
      </li>

      <li
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hover:text-blue-600 cursor-pointer transition"
      >
        Contact
      </li>
    </ul>

    {/* Button */}
    <button
      onClick={() =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
      className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
    >
      Get a Demo
    </button>

  </div>
</nav>

{/* ================= HERO SECTION ================= */}

<section
  id="home"
  className="relative min-h-screen flex items-center bg-[#f7fafc] px-[8%] pt-20 overflow-hidden"
>
  {/* WAVE (always behind image) */}
  <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-[220px] md:h-[280px]"
      preserveAspectRatio="none"
    >
      <path
        fill="#EAF3FF"
        d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,181.3C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-16">
    {/* LEFT SIDE (more upper) */}
    <div className="-mt-16 md:-mt-24">
      <h1 className="text-5xl md:text-6xl font-bold max-w-[750px] leading-tight">
        Building{" "}
        <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent whitespace-nowrap">
          Intelligent, Sustainable
        </span>
        <br /> 
        Technology Solutions
      </h1><br /><br />

      <p className="mt-6 text-lg text-gray-600 max-w-[600px] leading-relaxed">
  NeoTech Elements delivers custom EHS, compliance, and enterprise
  software designed for modern industries and government partners.
</p> <br /> <br />

      <button className="mt-8 bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition font-semibold">
        Request a Demo
      </button>
    </div>

    {/* RIGHT SIDE (image more down, stays above wave) */}
    <div className="relative z-20 flex justify-center md:justify-end mt-16 md:mt-32">
      <img
        src="/tech.png"
        alt="Preview"
        className="h-[520px] md:h-[700px] w-auto object-contain drop-shadow-2xl"
      />
    </div>
  </div>

  {/* ====== 3-LAYER WAVE (RIGHT HIGH -> LEFT LOW) ====== */}
<svg
  className="absolute left-0 bottom-0 w-[1800px] max-w-none h-auto pointer-events-none select-none"
  viewBox="0 0 1800 650"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <defs>
    {/* gradients */}
    <linearGradient id="a" x1="0" y1="650" x2="1800" y2="240" gradientUnits="userSpaceOnUse">
      <stop stopColor="#DDF4FB" stopOpacity="0.25" />
      <stop offset="0.55" stopColor="#9ADCF0" stopOpacity="0.30" />
      <stop offset="1" stopColor="#BFF0C8" stopOpacity="0.65" />
    </linearGradient>

    <linearGradient id="b" x1="0" y1="650" x2="1800" y2="260" gradientUnits="userSpaceOnUse">
      <stop stopColor="#CFF1FF" stopOpacity="0.18" />
      <stop offset="0.55" stopColor="#67C9FD" stopOpacity="0.25" />
      <stop offset="1" stopColor="#A9F0B7" stopOpacity="0.75" />
    </linearGradient>

    <linearGradient id="c" x1="0" y1="650" x2="1800" y2="300" gradientUnits="userSpaceOnUse">
      <stop stopColor="#BDEBFF" stopOpacity="0.12" />
      <stop offset="0.55" stopColor="#67C9FD" stopOpacity="0.22" />
      <stop offset="1" stopColor="#42BB52" stopOpacity="0.82" />
    </linearGradient>
  </defs>

  {/* subtle haze behind */}
  <path
    d="M0 650 
       C 420 610, 860 560, 1180 470
       C 1450 395, 1600 300, 1800 240
       L 1800 650 L 0 650 Z"
    fill="#EAF2F8"
    opacity="0.55"
  />

  {/* Layer 1 (back) */}
{/* 🌊 Layer 1 (Back - Big amplitude) */}
<path
  d="
  M0 580
  C 300 520, 650 600, 950 540
  S 1400 360, 1800 180
  L 1800 650
  L 0 650
  Z"
  fill="url(#a)"
/>

{/* 🌊 Layer 2 (Middle - stronger curve) */}
<path
  d="
  M0 610
  C 350 560, 700 630, 1000 580
  S 1450 420, 1800 260
  L 1800 650
  L 0 650
  Z"
  fill="url(#b)"
  opacity="0.95"
/>

{/* 🌊 Layer 3 (Front - thick & tall) */}
<path
  d="
  M0 640
  C 400 610, 800 650, 1100 610
  S 1500 520, 1800 320
  L 1800 650
  L 0 650
  Z"
  fill="url(#c)"
/>
</svg>
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
     <ToastContainer 
  position="top-right"
  autoClose={3000}
  theme="colored"
/>

      
      


    </div>
  );
}

export default App;
