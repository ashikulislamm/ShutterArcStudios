import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import Container from "@/components/ui/Container";

const socialIcons = [
  { Icon: FaInstagram, href: SOCIAL_LINKS.instagram },
  { Icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin },
  { Icon: FaBehance, href: SOCIAL_LINKS.behance },
  { Icon: FaYoutube, href: SOCIAL_LINKS.youtube },
  { Icon: FaDribbble, href: SOCIAL_LINKS.dribbble },
];

export default function Footer() {
  return (
    <footer className="bg-raisin-black pt-16 pb-16">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-roman-silver">Copyright © 2026 ShutterArc Studios</p>

        <p className="text-roman-silver">
          Designed By{" "}
          <a
            href="https://ashikulislamm.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-crimson-red transition-colors"
          >
            Ashikul Islam
          </a>
        </p>

        <ul className="flex gap-8">
          {socialIcons.map(({ Icon, href }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-crimson-red transition-colors"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
