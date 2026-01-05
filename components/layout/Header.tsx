"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isScrolled = useScrollHeader();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("nav-active");
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("nav-active");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 py-6 ">
      <div className="container max-w-[1300px] mx-auto px-4 ">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between bg-raisin-black/80 backdrop-blur-lg rounded-full px-6 py-4 shadow-2xl border border-white-10 ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center w-18 h-18 bg-black rounded-full hover:scale-110 transition-transform"
          >
            <Image
              src="/images/Logo.png"
              alt="ShutterArc Studios"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-16 mx-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-xl font-medium hover:text-crimson-red transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson-red group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="bg-white text-eerie-black text-xl font-medium px-6 py-2.5 rounded-full hover:bg-crimson-red hover:text-white transition-all duration-300"
          >
            Let's Connect
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between bg-raisin-black/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-2xl border border-white-10">
          <Link
            href="/"
            className="flex items-center justify-center w-20 h-20 bg-black rounded-full"
          >
            <Image
              src="/images/Logo.png"
              alt="ShutterArc Studios"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
          </Link>

          <button
            onClick={toggleNav}
            className="w-20 h-20 bg-crimson-red rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isNavOpen ? (
              <FaTimes className="text-white text-3xl transition-transform duration-300" />
            ) : (
              <FaBars className="text-white text-3xl transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <nav
          className={`lg:hidden fixed top-38 left-4 right-4 bg-raisin-black/90 backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 border border-white-10 shadow-2xl ${
            isNavOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-4 opacity-0 invisible"
          }`}
        >
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeNav}
                  className="text-white text-xl font-medium py-3 px-4 rounded-xl hover:bg-white-5 hover:text-crimson-red transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="block text-center bg-white text-eerie-black text-xl font-medium px-6 py-3 rounded-full hover:bg-crimson-red hover:text-white transition-all duration-300 mt-6"
          >
            Let's Connect
          </a>
        </nav>

        {/* Mobile Overlay Background */}
        {isNavOpen && (
          <div
            onClick={closeNav}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          />
        )}
      </div>
    </header>
  );
}
