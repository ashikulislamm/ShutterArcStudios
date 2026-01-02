import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { brands } from "@/lib/data";

export default function Brands() {
  // Double the brands for infinite scroll effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="section -mt-8 -mb-8 md:-mt-14 md:-mb-14 lg:-mt-20 lg:-mb-20">
      <Container>
        <SectionTitle
          subtitle="We've Worked With"
          title="Brands"
          description="We've collaborated with diverse brands to deliver creative solutions, from stunning visuals to cinematic storytelling. Together, we've transformed ideas into impactful results, leaving lasting impressions."
        />
      </Container>

      <Container>
        <div className="bg-raisin-black rounded-2xl overflow-hidden h-28 mt-12 relative drop-shadow-xl">
          <div className="flex animate-scroll hover:[animation-play-state:paused] w-max ">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-[250px] h-28 flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={200}
                  height={60}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
