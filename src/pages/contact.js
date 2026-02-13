import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f3f4f6] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* ================= LEFT SIDE ================= */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>

            <p className="text-gray-600 mb-12 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* FORM */}
            <form className="space-y-6">

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@yourmail.com"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Title..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Type Here..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-lg transition duration-300"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="bg-gray-100 p-10 rounded-2xl text-center">
              <div className="text-orange-600 text-4xl mb-6">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Phone Number
              </h3>
              <p className="text-gray-700 font-medium">
                207-8767-452
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-100 p-10 rounded-2xl text-center">
              <div className="text-orange-600 text-4xl mb-6">✉️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Address
              </h3>
              <p className="text-gray-700 font-medium">
                support@yoursite.com
              </p>
            </div>

            {/* Location */}
            <div className="bg-gray-100 p-10 rounded-2xl text-center">
              <div className="text-orange-600 text-4xl mb-6">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Location
              </h3>
              <p className="text-gray-700 font-medium">
                Brooklyn
              </p>
            </div>

          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-20">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.315184928!2d-0.119543684229!3d51.503324979634!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c9f5b2a5b1%3A0x8f2d8b8e8d8e8d8e!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}