"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import SectionTitle from "../ui/SectionTitle";
import { contact } from "../../data/contact";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9ynxwk",
        "template_gsmvkdm",
        form.current,
        "ZjBCJceHz_wSDbe-F"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
          title="Let's Connect"
          subtitle="Passionate about building impactful software solutions. Open to discussing software engineering, cloud computing, ServiceNow development, internships, and collaboration opportunities."
        />

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <p className="mb-4">
              📧 {contact.email}
            </p>

            <p className="mb-4">
              📱 {contact.phone}
            </p>

            <p className="mb-4">
              📍 {contact.location}
            </p>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600"
            >
              GitHub
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 mt-2"
            >
              LinkedIn
            </a>

          </div>

          {/* Right */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject (Optional)"
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              required
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

            <button
              type="submit"
              className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
            "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}