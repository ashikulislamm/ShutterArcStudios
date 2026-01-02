"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: "+8801881362663",
      link: "tel:+8801881362663",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "shutterarc.studios@gmail.com",
      link: "mailto:shutterarc.studios@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      details: "Dhaka, Bangladesh",
      link: "https://maps.google.com",
    },
  ];

  const socialContacts = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: "Chat with us",
      link: "https://wa.me/8801881362663",
    },
    {
      icon: FaFacebookMessenger,
      title: "Messenger",
      details: "Message us",
      link: "https://m.me/shutterarcstudios",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 md:py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-crimson-red/5 rounded-full blur-3xl animate-wave-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-crimson-red/5 rounded-full blur-3xl animate-wave-medium" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Get in Touch"
          title="Let's Create Something Amazing Together"
          className="mb-12 md:mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to bring your vision to life?
              </h3>
              <p className="text-roman-silver text-lg md:text-xl leading-relaxed">
                Whether you need stunning cinematography, creative video
                editing, or captivating animations, we're here to help. Reach
                out and let's discuss your next project.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="group flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-raisin-black rounded-xl md:rounded-2xl 
                           hover:bg-white-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                           border border-transparent hover:border-crimson-red/20"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-crimson-red/10 
                                flex items-center justify-center group-hover:bg-crimson-red/20 
                                transition-colors duration-300"
                  >
                    <info.icon className="text-crimson-red text-xl md:text-2xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-roman-silver text-base md:text-lg mb-1">
                      {info.title}
                    </p>
                    <p
                      className="text-white text-lg md:text-xl font-semibold group-hover:text-crimson-red 
                                transition-colors duration-300"
                    >
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}

              {/* Social Contact Cards - 2 Column Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socialContacts.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 p-4 md:p-6 bg-raisin-black rounded-xl md:rounded-2xl 
                             hover:bg-white-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                             border border-transparent hover:border-crimson-red/20"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-crimson-red/10 
                                  flex items-center justify-center group-hover:bg-crimson-red/20 
                                  transition-colors duration-300"
                    >
                      <info.icon className="text-crimson-red text-xl md:text-2xl" />
                    </div>
                    <div className="text-center">
                      <p className="text-roman-silver text-sm md:text-base mb-1">
                        {info.title}
                      </p>
                      <p
                        className="text-white text-base md:text-lg font-semibold group-hover:text-crimson-red 
                                  transition-colors duration-300"
                      >
                        {info.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="p-6 md:p-8 bg-gradient-to-br from-raisin-black to-eerie-black rounded-xl md:rounded-2xl 
                          border border-white-10"
            >
              <h4 className="text-white text-xl md:text-2xl font-bold mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-roman-silver">
                <div className="flex justify-between text-base md:text-lg">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-base md:text-lg">
                  <span>Saturday</span>
                  <span className="text-white font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-base md:text-lg">
                  <span>Sunday</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gradient-to-br from-raisin-black to-eerie-black p-6 md:p-8 lg:p-10 
                        rounded-2xl md:rounded-3xl shadow-2xl border border-white-10"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none
                    ${
                      focusedField === "name" || formData.name
                        ? "-top-2.5 text-sm bg-eerie-black px-2 text-crimson-red"
                        : "top-4 text-lg text-roman-silver"
                    }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 bg-raisin-black border border-white-10 rounded-xl 
                           text-white focus:border-crimson-red focus:outline-none transition-all duration-300
                           hover:border-white-20"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none
                      ${
                        focusedField === "email" || formData.email
                          ? "-top-2.5 text-sm bg-eerie-black px-2 text-crimson-red"
                          : "top-4 text-lg text-roman-silver"
                      }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-raisin-black border border-white-10 rounded-xl 
                             text-white focus:border-crimson-red focus:outline-none transition-all duration-300
                             hover:border-white-20"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none
                      ${
                        focusedField === "phone" || formData.phone
                          ? "-top-2.5 text-sm bg-eerie-black px-2 text-crimson-red"
                          : "top-4 text-lg text-roman-silver"
                      }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-raisin-black border border-white-10 rounded-xl 
                             text-white focus:border-crimson-red focus:outline-none transition-all duration-300
                             hover:border-white-20"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none
                    ${
                      focusedField === "subject" || formData.subject
                        ? "-top-2.5 text-sm bg-eerie-black px-2 text-crimson-red"
                        : "top-4 text-lg text-roman-silver"
                    }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 bg-raisin-black border border-white-10 rounded-xl 
                           text-white focus:border-crimson-red focus:outline-none transition-all duration-300
                           hover:border-white-20"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none
                    ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 text-sm bg-eerie-black px-2 text-crimson-red"
                        : "top-6 text-lg text-roman-silver"
                    }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full h-120 px-4 py-4 bg-raisin-black border border-white-10 rounded-xl 
                           text-white focus:border-crimson-red focus:outline-none transition-all duration-300
                           hover:border-white-20 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full sm:w-auto px-8 md:px-12 py-4 bg-crimson-red text-white 
                         rounded-xl md:rounded-full font-bold text-lg md:text-xl
                         hover:bg-crimson-red/90 transition-all duration-300 
                         hover:shadow-xl hover:shadow-crimson-red/20 hover:scale-[1.02]
                         flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
