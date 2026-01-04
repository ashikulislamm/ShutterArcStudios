"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { portfolioVideos } from "@/lib/data";

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const videos = [...portfolioVideos, ...portfolioVideos, ...portfolioVideos];

  const updateSlider = (
    newIndex: number,
    direction: "next" | "prev" = "next"
  ) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slides = sliderRef.current?.querySelectorAll(".portfolio-slide");
    if (!slides) return;

    gsap.to(slides, {
      x: direction === "next" ? "-=100%" : "+=100%",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(newIndex);
        isAnimating.current = false;
      },
    });
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % portfolioVideos.length;
    updateSlider(nextIndex, "next");
  };

  const goToPrev = () => {
    const prevIndex =
      currentIndex === 0 ? portfolioVideos.length - 1 : currentIndex - 1;
    updateSlider(prevIndex, "prev");
  };

  useEffect(() => {
    const slides = sliderRef.current?.querySelectorAll(".portfolio-slide");
    if (!slides) return;

    slides.forEach((slide, index) => {
      const offset = index - currentIndex - portfolioVideos.length;
      const absOffset = Math.abs(offset);

      let scale = 0.7;
      let opacity = 0.3;
      let zIndex = 0;
      let blur = 4;
      let pointerEvents = "none";
      let xPos = offset * 70; // Changed from 100 to 70 for better spacing

      if (absOffset === 0) {
        scale = 1;
        opacity = 1;
        zIndex = 10;
        blur = 0;
        pointerEvents = "auto";
        xPos = 0; // Center card at exactly 0
      } else if (absOffset === 1) {
        scale = 0.75;
        opacity = 0.5;
        zIndex = 5;
        blur = 3;
        xPos = offset > 0 ? 65 : -65; // Adjusted positioning for side cards
      } else if (absOffset === 2) {
        scale = 0.6;
        opacity = 0.3;
        zIndex = 2;
        blur = 5;
        xPos = offset > 0 ? 130 : -130;
      }

      const slideElement = slide as HTMLElement;
      slideElement.style.pointerEvents = pointerEvents;

      gsap.to(slide, {
        scale,
        opacity,
        zIndex,
        filter: `blur(${blur}px)`,
        x: `${xPos}%`,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  }, [currentIndex]);

  return (
    <section className="section" id="portfolio">
      <Container>
        <SectionTitle
          subtitle="Some of Our Best"
          title="Works"
          description="Dive into our portfolio – a canvas of creativity where every project tells a story. From cinematic visuals to artistic designs, this collection embodies our passion for turning ideas into captivating masterpieces. Let our work inspire your vision and spark something extraordinary."
        />
      </Container>

      <div className="relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4">
          <div
            ref={sliderRef}
            className="relative flex items-center justify-center h-[300px] md:h-[450px] lg:h-[550px]"
            
          >
            {videos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="portfolio-slide absolute left-1/2 -translate-x-1/2"
                style={{ width: "800px", maxWidth: "90vw" }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-raisin-black">
                  <iframe
                    src={video.src}
                    title={`Portfolio video ${video.id}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-crimson-red backdrop-blur-sm border-2 border-crimson-red flex items-center justify-center text-white hover:bg-crimson-red/80 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous video"
          >
            <FaChevronLeft className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-crimson-red backdrop-blur-sm border-2 border-crimson-red flex items-center justify-center text-white hover:bg-crimson-red/80 transition-all duration-300 hover:scale-110 group"
            aria-label="Next video"
          >
            <FaChevronRight className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button href="/portfolio">Explore More</Button>
      </div>
    </section>
  );
}
