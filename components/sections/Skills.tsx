import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { skillTools } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Container>
        <SectionTitle
          subtitle="We Make The Future"
          title="Develop & Create Digital Future."
        />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8">
          <div>
            <p className="text-roman-silver mb-5">
              We specialize in delivering creative solutions that bring ideas to
              life. From editing impactful videos to designing visually stunning
              graphics, our expertise ensures your project stands out in
              today&apos;s digital landscape.
            </p>

            <p className="text-roman-silver mb-8">
              With 6+ years of experience, we&apos;ve worked with agencies,
              content creators, and online learning platforms, delivering
              impactful videos, stunning graphics, and creative solutions. As a
              trusted & reliable creative professional, we help clients
              worldwide bring their ideas to life with quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4">
            {skillTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center justify-center p-2 hover:scale-110 transition-transform cursor-pointer"
              >
                <Image src={tool.src} alt={tool.alt} width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
