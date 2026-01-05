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
      <Container className="max-w-[1400px]">
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

        {/* Portfolio Grid - Bento Style */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4 lg:gap-5 px-4 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              isAnimating={isAnimating}
            />
          ))}
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

  // Smart Bento grid sizing based on content orientation
  const getBentoClass = (item: (typeof portfolioItems)[0], index: number) => {
    // Portrait orientation (Reels) - tall items
    if (item.isVertical) {
      // Vary between tall sizes for visual interest
      const tallPatterns = [
        "col-span-1 row-span-2", // Tall
      ];
      return tallPatterns[index % tallPatterns.length];
    }

    // Landscape orientation (Videos, Cinematography, Photos, Animations)
    const landscapePatterns = [
      "col-span-2 row-span-1", // Wide

      "col-span-2 row-span-2", // Large square/landscape

      "col-span-2 row-span-1", // Wide
    ];
    return landscapePatterns[index % landscapePatterns.length];
  };

  return (
    <div
      className={`group relative rounded-lg md:rounded-xl overflow-hidden bg-raisin-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${getBentoClass(
        item,
        index
      )}`}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
