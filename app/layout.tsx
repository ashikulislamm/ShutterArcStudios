import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import { FloatingAppointmentButton } from "@/components/layout/FloatingScheduleButton";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shutterarcstudios.com'),
  title: {
    default: "ShutterArc Studios - Professional Video Editing & Creative Services",
    template: "%s | ShutterArc Studios"
  },
  description: "Transform your vision into reality with ShutterArc Studios. Expert video editing, cinematography, photography, and graphic design services. Creating digital excellence through innovative visual storytelling.",
  keywords: [
    "Video Editor",
    "Cinematographer", 
    "Photographer",
    "Graphic Designer",
    "Video Editing Services",
    "Professional Cinematography",
    "Creative Agency",
    "Visual Storytelling",
    "Content Creation",
    "Motion Graphics",
    "Brand Identity",
    "Digital Media",
    "ShutterArc Studios"
  ],
  authors: [{ name: "ShutterArc Studios", url: "https://www.shutterarcstudios.com" }],
  creator: "ShutterArc Studios",
  publisher: "ShutterArc Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shutterarcstudios.com",
    siteName: "ShutterArc Studios",
    title: "ShutterArc Studios - Professional Video Editing & Creative Services",
    description: "Your creative partner for visual excellence. Specializing in video editing, cinematography, photography, and graphic design. Transform ideas into captivating visuals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShutterArc Studios Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShutterArc Studios - Professional Video Editing & Creative Services",
    description: "Your creative partner for visual excellence. Expert video editing, cinematography, photography, and graphic design services.",
    images: ["/og-image.png"],
    creator: "@shutterarcstudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: "https://www.shutterarcstudios.com",
  },
  category: 'Creative Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingAppointmentButton />
      </body>
    </html>
  );
}
