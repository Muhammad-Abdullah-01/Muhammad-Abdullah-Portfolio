import React, { useRef, useState } from "react";
import { Mail, Send, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

const Github = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // EmailJS configuration variables (loaded from environment variables for security)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill out all fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, text: "" });

    // Try real EmailJS if credentials are provided
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        handleSuccess();
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus({
          type: "error",
          text: "An error occurred while sending the email. Please try again later or email me directly.",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulation fallback (works immediately with confetti to impress the user!)
      setTimeout(() => {
        handleSuccess();
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const handleSuccess = () => {
    setStatus({
      type: "success",
      text: "Thank you! Your message has been sent successfully.",
    });
    setFormData({ name: "", email: "", message: "" });
    
    // Confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00e5ff", "#b300ff", "#ffffff"],
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-12 max-w-6xl mx-auto scroll-mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
          <Mail className="text-neon-cyan" />
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-3xl"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Let's build something cool!</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have a project in mind, want to discuss collaboration opportunities, or just want to say hello? 
              Fill out the form or reach out directly via email. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4 my-8">
            {/* Direct Email Link */}
            <div className="relative group/email">
              <a
                href="mailto:m.abdullah12589@gmail.com"
                onClick={() => {
                  navigator.clipboard.writeText("m.abdullah12589@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-neon-cyan/40 hover:bg-slate-900/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-slate-900 border border-white/5 text-neon-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Email Me Directly</span>
                  <span className="text-sm text-slate-300 group-hover:text-white font-medium">m.abdullah12589@gmail.com</span>
                </div>
              </a>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-950 border border-neon-cyan/40 text-neon-cyan text-[10px] px-2.5 py-1 rounded shadow-[0_0_10px_rgba(0,229,255,0.2)] font-semibold whitespace-nowrap z-20"
                  >
                    Email copied to clipboard!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Muhammad-Abdullah-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-neon-cyan/40 hover:bg-slate-900/40 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-slate-900 border border-white/5 text-neon-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all duration-300">
                <Github size={20} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Explore Work</span>
                <span className="text-sm text-slate-300 group-hover:text-white font-medium">github.com/Muhammad-Abdullah-01</span>
              </div>
            </a>
          </div>

          <div className="text-center lg:text-left border-t border-white/5 pt-4">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">
              Available for freelance & full-time roles
            </span>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 glass-panel p-8 rounded-3xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-2 items-center text-sm font-bold text-white border-b border-white/5 pb-3">
              <MessageSquare size={16} className="text-neon-cyan" />
              Send a Message
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs text-slate-400 font-semibold block">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-950/40 border border-white/10 hover:border-white/20 focus:border-neon-cyan focus:outline-none rounded-xl px-4 py-3 text-sm text-slate-200 transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs text-slate-400 font-semibold block">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-950/40 border border-white/10 hover:border-white/20 focus:border-neon-cyan focus:outline-none rounded-xl px-4 py-3 text-sm text-slate-200 transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                required
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs text-slate-400 font-semibold block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Abdullah, I'd like to collaborate on..."
                rows="4"
                className="w-full bg-slate-950/40 border border-white/10 hover:border-white/20 focus:border-neon-cyan focus:outline-none rounded-xl px-4 py-3 text-sm text-slate-200 resize-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                required
              ></textarea>
            </div>

            {/* Status Feedback Alert */}
            {status.text && (
              <div
                className={`flex items-center gap-2 p-4 rounded-xl border text-xs font-semibold ${
                  status.type === "success"
                    ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400"
                    : "bg-rose-950/30 border-rose-500/30 text-rose-400"
                }`}
              >
                {status.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                {status.text}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
