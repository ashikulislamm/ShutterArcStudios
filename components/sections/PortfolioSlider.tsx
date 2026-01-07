"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { portfolioVideos } from "@/lib/data";

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(portfolioVideos.length);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const videos = [...portfolioVideos, ...portfolioVideos, ...portfolioVideos];

  const goToNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    // Reset position when reaching boundaries (seamless loop)
    if (currentIndex >= portfolioVideos.length * 2) {
      setTimeout(() => {
        const slides = sliderRef.current?.querySelectorAll(".portfolio-slide");
        if (!slides) return;

        slides.forEach((slide) => {
          gsap.set(slide, { duration: 0 });
        });

        setCurrentIndex(portfolioVideos.length);
      }, 50);
    } else if (currentIndex < portfolioVideos.length) {
      setTimeout(() => {
        const slides = sliderRef.current?.querySelectorAll(".portfolio-slide");
        if (!slides) return;

        slides.forEach((slide) => {
          gsap.set(slide, { duration: 0 });
        });

        setCurrentIndex(portfolioVideos.length * 2 - 1);
      }, 50);
    }
  }, [currentIndex]);

  useEffect(() => {
    const slides = sliderRef.current?.querySelectorAll(".portfolio-slide");
    if (!slides) return;

    slides.forEach((slide, index) => {
      const offset = index - currentIndex;
      const absOffset = Math.abs(offset);

      let scale = 0.7;
      let opacity = 0.3;
      let zIndex = 0;
      let blur = 4;
      let pointerEvents = "none";
      let xPos = offset * 50;

      if (absOffset === 0) {
        scale = 1.3;
        opacity = 1;
        zIndex = 10;
        blur = 0;
        pointerEvents = "auto";
        xPos = 0;
      } else if (absOffset === 1) {
        scale = 0.7;
        opacity = 0.5;
        zIndex = 5;
        blur = 3;
        xPos = offset > 0 ? 85 : -85;
      } else if (absOffset === 2) {
        scale = 0.55;
        opacity = 0.3;
        zIndex = 2;
        blur = 5;
        xPos = offset > 0 ? 170 : -170;
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
        onComplete: () => {
          isAnimating.current = false;
        },
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
            className="relative flex items-center justify-center h-[200px] md:h-[400px] lg:h-[450px]"
          >
            {videos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="portfolio-slide absolute left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] lg:w-[550px] px-10 md:px-20"
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
