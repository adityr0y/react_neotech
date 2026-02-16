import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then(() => {
      toast.success("Message sent successfully ");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch(() => {
      toast.error("Something went wrong ");
    });
};

  return (
    <section id="contact" className="py-20 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <img
              src="/contact.png"
              alt="Contact Illustration"
              className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 max-w-md">
            <header className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 tracking-tight mb-3">
                Contact Us
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                We'd love to hear from you. Please fill out the form or reach out via email.
              </p>
            </header>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />

              <textarea
                placeholder="Your Message..."
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-[#4ca0b5] text-white font-semibold rounded-md shadow-md hover:bg-[#3d8a9d] active:scale-[0.98] transition-all"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;