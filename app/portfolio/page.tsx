"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { portfolioItems, type PortfolioCategory } from "@/lib/data";

const categories = [
  { id: "all", label: "All" },
  { id: "cinematography", label: "Cinematography" },
  { id: "videos", label: "Videos" },
  { id: "reels", label: "Reels" },
  { id: "animations", label: "Animations" },
  { id: "photography", label: "Photography" },
] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | PortfolioCategory
  >("all");
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: "all" | PortfolioCategory) => {
    if (category === activeCategory) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  return (
    <main className="mt-24 min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <Container className="max-w-[1300px]">
        <div className="text-center mb-12 md:mb-16 px-4">
          <p className="uppercase text-sm md:text-xl font-bold tracking-widest text-roman-silver mb-3 md:mb-4">
            Explore Our Creative Work
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Portfolio Gallery
          </h1>
          <p className="text-roman-silver max-w-4xl mx-auto text-base md:text-xl px-4">
            Browse through our diverse collection of projects spanning
            cinematography, video editing, animations, and photography.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 md:px-12 py-2 md:py-4 rounded-full font-medium text-xl md:text-2xl transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-crimson-red text-white scale-105 shadow-lg"
                  : "bg-raisin-black text-roman-silver hover:bg-white-10 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Grouped by Type */}
        <div
          className={`transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Videos & Cinematography Group */}
          {filteredItems.some(
            (item) =>
              !item.isVertical &&
              (item.category === "videos" || item.category === "cinematography")
          ) && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4">
                Videos & Cinematography
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
                {filteredItems
                  .filter(
                    (item) =>
                      !item.isVertical &&
                      (item.category === "videos" ||
                        item.category === "cinematography")
                  )
                  .map((item, index) => (
                    <PortfolioCard
                      key={item.id}
                      item={item}
                      index={index}
                      isAnimating={isAnimating}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* Reels Group */}
          {filteredItems.some((item) => item.category === "reels") && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4">
                Reels
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4">
                {filteredItems
                  .filter((item) => item.category === "reels")
                  .map((item, index) => (
                    <PortfolioCard
                      key={item.id}
                      item={item}
                      index={index}
                      isAnimating={isAnimating}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* Animations Group */}
          {filteredItems.some((item) => item.category === "animations") && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4">
                Animations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
                {filteredItems
                  .filter((item) => item.category === "animations")
                  .map((item, index) => (
                    <PortfolioCard
                      key={item.id}
                      item={item}
                      index={index}
                      isAnimating={isAnimating}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* Photography Group */}
          {filteredItems.some((item) => item.category === "photography") && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4">
                Photography
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                {filteredItems
                  .filter((item) => item.category === "photography")
                  .map((item, index) => (
                    <PortfolioCard
                      key={item.id}
                      item={item}
                      index={index}
                      isAnimating={isAnimating}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 md:py-20">
            <p className="text-roman-silver text-lg md:text-xl">
              No items found in this category.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}

function PortfolioCard({
  item,
  index,
  isAnimating,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
  isAnimating: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`group relative rounded-lg md:rounded-xl overflow-hidden bg-raisin-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
        item.isVertical ? "aspect-[9/16]" : "aspect-video"
      }`}
      style={{
        animation: !isAnimating
          ? `fadeInUp 0.6s ease-out ${index * 0.05}s both`
          : "none",
      }}
    >
      {item.type === "video" ? (
        <div className="relative w-full h-full">
          <iframe
            src={item.src}
            title={item.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          {/* Overlay */}
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } group-hover:scale-110`}
            onLoad={() => setIsLoaded(true)}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-white text-base md:text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm mt-1 capitalize">
                {item.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
