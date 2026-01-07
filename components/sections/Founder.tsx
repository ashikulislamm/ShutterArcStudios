"use client";

import Image from "next/image";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Container from "@/components/ui/Container";

const passions = [
  "Cinematography",
  "Video Editing",
  "Graphics Designing",
  "Photography",
] as const;

export default function Founder() {
  const { displayText, isSelected } = useTypingEffect(passions, 60, 50, 2000);

  return (
    <section className="section py-0 md:py-10" id="founder">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Image and Title */}
          <div className="relative">
            <div className="mb-16">
              <p className="uppercase text-lg font-bold tracking-widest text-roman-silver mb-3">
                Meet Our
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Founder & CEO
              </h2>
            </div>

            {/* Animated Background Circle */}
            <div className="relative w-full lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crimson-red/20 via-transparent to-crimson-red/20 animate-wave-slow"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-crimson-red/30 via-transparent to-crimson-red/10 animate-wave-medium"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-crimson-red/20 to-transparent animate-wave-fast"></div>

              {/* Image */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-banner.png"
                  alt="Sharjil Khan"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-2xl uppercase font-bold text-white tracking-wider mb-4">
                Hello, I&apos;m
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider leading-tight">
                Sharjil Khan
              </h1>
            </div>

            <div className="flex items-center gap-2 text-2xl md:text-4xl font-semibold text-white">
              <span className="uppercase tracking-wide">Passionate In</span>
              <span
                className={`px-3 py-1 transition-all duration-300 ${
                  isSelected ? "bg-crimson-red text-white" : "text-crimson-red"
                }`}
              >
                {displayText}
              </span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="text-roman-silver leading-relaxed pt-4">
              We are a creative professional specializing in video editing,
              cinematography, photography, and graphic design. Based in Dhaka,
              Bangladesh, have been honing my craft for over six years. Known
              for my attention to detail and artistic vision, I transform ideas
              into captivating visuals and designs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
