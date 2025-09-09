"use client";

import React, { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xrbabvgn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="mb-8">
        Interested in working together? Fill out the form below and I’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-500 hover:bg-purple-600 font-semibold py-3 px-6 rounded-md transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <p className="mt-4 text-white-400"> Message sent successfully!</p>
      )}
    </section>
  );
}
