import React, { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (demo)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls =
  "w-full px-4 py-3 bg-white border-2 border-black rounded-lg " +
  "shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  return (
    <div
      id="contact"
      className="min-h-screen bg-[#EEF5FF] pt-20 px-4 py-16 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="grid md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="bg-[#F7FBFF] p-10 md:p-12 flex items-center justify-center">
            <img
              src="/motion.gif"
              alt="Contact illustration"
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 md:p-12 flex items-center justify-center bg-white">
            <div className="w-full max-w-md">

              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2><br />
              <p className="mt-2 text-sm text-gray-600 mb-8">
                 We'd love to hear from you. Please fill out the form or reach out via email.

              </p> <br />

              {/* FORM (Card removed) */}
              <form onSubmit={handleSubmit} className="space-y-6">

  {/* Full Name */}
  <div>
    <label
      htmlFor="name"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Full Name
    </label>
    <input
  type="text"
  required
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  placeholder="Your name"
  style={{
  border: "2px solid #CBD5E1",   // soft gray border
  backgroundColor: "#FFFFFF"    // clean white background
}}
className="w-full px-4 py-3 rounded-lg shadow-sm
focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
/>
  </div> <br />

  {/* Email */}
  <div>
    <label
      htmlFor="email"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Email Address
    </label>
    <input
      id="email"
      type="email"
      required
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      placeholder="example@email.com"
      style={{
  border: "2px solid #CBD5E1",   // soft gray border
  backgroundColor: "#FFFFFF"    // clean white background
}}
className="w-full px-4 py-3 rounded-lg shadow-sm
focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
    />
  </div> <br />

  {/* Subject */}
  <div>
    <label
      htmlFor="subject"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Subject
    </label>
    <input
      id="subject"
      type="text"
      value={formData.subject}
      onChange={(e) =>
        setFormData({ ...formData, subject: e.target.value })
      }
      placeholder="Enter subject"
      style={{
  border: "2px solid #CBD5E1",   // soft gray border
  backgroundColor: "#FFFFFF"    // clean white background
}}
className="w-full px-4 py-3 rounded-lg shadow-sm
focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
    />
  </div> <br />

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Message
    </label>
    <textarea
      id="message"
      rows={4}
      required
      value={formData.message}
      onChange={(e) =>
        setFormData({ ...formData, message: e.target.value })
      }
      placeholder="Write your message here..."
      style={{
  border: "2px solid #CBD5E1",   // soft gray border
  backgroundColor: "#FFFFFF"    // clean white background
}}
className="w-full px-4 py-3 rounded-lg shadow-sm
focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
    />
  </div> <br />

  <button
    type="submit"
    className="w-full py-3 rounded-lg text-white font-semibold shadow-md transition
               bg-gradient-to-r from-blue-600 to-green-500 hover:scale-[1.01] active:scale-[0.99]"
  >
    Send Message
  </button>

</form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;