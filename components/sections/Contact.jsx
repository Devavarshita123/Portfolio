"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import SectionTitle from "../ui/SectionTitle";
import { contact } from "../../data/contact";

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current || isSending) return;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_i9ynxwk",
        "template_gsmvkdm",
        form.current,
        {
          publicKey: "ZjBCJceHz_wSDbe-F",
        }
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title="Let's Connect"
          subtitle="Passionate about building impactful software solutions. Open to discussing software engineering, cloud computing, ServiceNow development, internships, and collaboration opportunities."
        />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
              Contact Information
            </h3>

            <p className="mb-4 text-slate-700 dark:text-slate-300">
              📧 {contact.email}
            </p>

            <p className="mb-4 text-slate-700 dark:text-slate-300">
              📱 {contact.phone}
            </p>

            <p className="mb-4 text-slate-700 dark:text-slate-300">
              📍 {contact.location}
            </p>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:underline dark:text-blue-400"
            >
              GitHub
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-blue-600 hover:underline dark:text-blue-400"
            >
              LinkedIn
            </a>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              aria-label="Your name"
              autoComplete="name"
              required
              maxLength={100}
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              aria-label="Your email"
              autoComplete="email"
              required
              maxLength={254}
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject (Optional)"
              aria-label="Subject (optional)"
              maxLength={150}
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              aria-label="Your message"
              required
              maxLength={5000}
              className="w-full resize-y rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            {status === "success" && (
              <p
                role="status"
                className="text-sm text-green-600 dark:text-green-400"
              >
                Message sent successfully! Thank you for reaching out.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="text-sm text-red-600 dark:text-red-400"
              >
                Failed to send your message. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}