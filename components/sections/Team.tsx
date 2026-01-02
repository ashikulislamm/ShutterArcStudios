import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section className="section -mt-8 md:-mt-20 lg:-mt-32">
      <Container>
        <SectionTitle subtitle="Meet Our Talented" title="Team Members" />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-10">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

interface TeamCardProps {
  member: (typeof teamMembers)[0];
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay with Backdrop Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8">
        <div className="text-center text-white px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">
            {member.name}
          </h3>
          <p className="text-xl text-gray-300 mb-6 font-medium">
            {member.role}
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-crimson-red hover:scale-110 transition-all duration-300"
              aria-label={`${member.name}'s Instagram`}
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-crimson-red hover:scale-110 transition-all duration-300"
              aria-label={`${member.name}'s Facebook`}
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-crimson-red hover:scale-110 transition-all duration-300"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
