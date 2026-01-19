"use client";

import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";

export default function FloatingScheduleButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const calendarTargetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  // Load Google Calendar scripts
  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const loadGoogleCalendarScripts = () => {
      // Add CSS
      const link = document.createElement("link");
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      // Add Script
      const script = document.createElement("script");
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        setIsScriptLoaded(true);
      };
      document.head.appendChild(script);

      scriptLoadedRef.current = true;
    };

    loadGoogleCalendarScripts();
  }, []);

  // Initialize calendar button when modal opens
  useEffect(() => {
    if (isModalOpen && isScriptLoaded && calendarTargetRef.current) {
      const calendar = (window as any).calendar;
      if (calendar?.schedulingButton) {
        // Clear any existing content
        calendarTargetRef.current.innerHTML = "";

        calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Q_MoDyJLWXP--XDgjp9W8y1cK772yNKYKxdhy213ofVGwk-u-4wM2WR576OpTeS3TRuJTLm2r?gv=true",
          color: "#D50000",
          label: "Let's Collaborate",
          target: calendarTargetRef.current,
        });
      }
    }
  }, [isModalOpen, isScriptLoaded]);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-raisin-black text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-medium">
            Schedule a Meeting
            <div className="absolute top-full right-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-raisin-black"></div>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          className="relative flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 bg-gradient-to-r from-crimson-red to-red-600 
                   text-white rounded-full shadow-2xl hover:shadow-crimson-red/50 
                   transition-all duration-300 hover:scale-110 active:scale-95
                   border-2 border-white/10"
          aria-label="Schedule Appointment"
        >
          <FaCalendarAlt className="text-xl md:text-2xl" style={{ animation: 'pulseSlow 3s ease-in-out infinite' }} />
          <span className="font-bold text-base md:text-lg whitespace-nowrap hidden sm:inline">
            Let's Collaborate
          </span>
        </button>

        {/* Floating animation ring */}
        <div className="absolute inset-0 rounded-full bg-crimson-red/20 pointer-events-none" style={{ animation: 'pulseSlow 3s ease-in-out infinite' }}></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            className="relative bg-gradient-to-br from-raisin-black to-eerie-black rounded-3xl shadow-2xl 
                       max-w-xl w-full overflow-hidden border-2 border-white/10"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "scaleIn 0.4s ease-out",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-2 z-10 w-12 h-12 rounded-full bg-crimson-red 
                       flex items-center justify-center text-white hover:bg-crimson-red/80 
                       transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-xl"
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-crimson-red/20 to-transparent p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-crimson-red/20 flex items-center justify-center">
                  <FaCalendarAlt className="text-crimson-red text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Schedule Your Meeting
                  </h2>
                  <p className="text-roman-silver text-sm md:text-base">
                    Let's discuss your project and bring your vision to life
                  </p>
                </div>
              </div>
            </div>

            {/* Calendar Content */}
            <div className="p-6 overflow-auto max-h-auto">
              <div
                ref={calendarTargetRef}
                className="google-calendar-scheduling-container flex justify-center w-full"
              >
                {!isScriptLoaded && (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="w-16 h-16 border-4 border-crimson-red border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-roman-silver text-lg">
                      Loading calendar...
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-transparent to-crimson-red/10 p-4 border-t border-white/10">
              <p className="text-center text-roman-silver text-sm">
                Can't find a suitable time?{" "}
                <a
                  href="mailto:shutterarc.studios@gmail.com"
                  className="text-crimson-red hover:text-white transition-colors font-medium"
                >
                  Email us directly
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
