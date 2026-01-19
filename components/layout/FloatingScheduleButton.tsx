"use client";

import { useState, useEffect } from "react";
import { FaCalendarAlt as Calendar } from "react-icons/fa";
import { IoClose as X } from "react-icons/io5";

export const FloatingAppointmentButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const calendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Q_MoDyJLWXP--XDgjp9W8y1cK772yNKYKxdhy213ofVGwk-u-4wM2WR576OpTeS3TRuJTLm2r?gv=true";

  const openCalendarModal = () => {
    setShowModal(true);
    setIsExpanded(false); // Close the expanded card
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      {/* Floating Button Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Card */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 w-96 bg-gradient-to-br from-raisin-black to-eerie-black backdrop-blur-md rounded-2xl border border-white-10 shadow-2xl shadow-black/20 mb-4 transform transition-all duration-300 ease-out">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-crimson-red" />
                  <h3 className="text-white font-bold text-2xl">
                    Schedule a Call
                  </h3>
                </div>
                <button
                  onClick={toggleExpanded}
                  className="text-roman-silver hover:text-white transition-colors p-2 hover:bg-white-10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <p className="text-roman-silver text-lg mb-6 leading-relaxed">
                Let's discuss your project and how we can help bring your
                creative vision to life.
              </p>

              {/* Calendar Button */}
              <button
                onClick={openCalendarModal}
                className="w-full bg-crimson-red hover:bg-crimson-red/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-crimson-red/25 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </button>

              {/* Features */}
              <div className="mt-6 space-y-3 text-lg text-roman-silver">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-crimson-red rounded-full"></div>
                  <span>30 minutes session</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-crimson-red/70 rounded-full"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-crimson-red/50 rounded-full"></div>
                  <span>Project discussion</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Button */}
        <button
          onClick={toggleExpanded}
          className="group relative w-16 h-16 bg-crimson-red hover:bg-crimson-red/90 text-white rounded-full shadow-lg shadow-crimson-red/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-crimson-red/30 flex items-center justify-center"
        >
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-crimson-red/20 animate-ping"></div>

          {/* Icon */}
          <Calendar
            className={`w-7 h-7 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-raisin-black to-eerie-black rounded-2xl shadow-2xl border border-white-10 w-full max-w-7xl h-[85vh] max-h-[900px] mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 bg-white border-b border-white-10">
              <h2 className="text-xl md:text-2xl font-bold text-raisin-black">
                Schedule Your Session
              </h2>
              <button
                onClick={closeModal}
                className="text-roman-silver hover:text-white p-2 rounded-full hover:bg-crimson-red transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>

            {/* Calendar iframe */}
            <div className="h-full bg-white">
              <iframe
                src={calendarUrl}
                className="w-full h-full border-0"
                title="Schedule Appointment"
                loading="lazy"
                allow="camera; microphone"
                style={{ height: "calc(100% - 89px)" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
