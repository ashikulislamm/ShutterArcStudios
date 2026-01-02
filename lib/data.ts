export const portfolioVideos = [
  { id: 1, src: "https://www.youtube.com/embed/dx9dLgD0qyE" },
  { id: 2, src: "https://www.youtube.com/embed/EmbKQJMnFx0" },
  { id: 3, src: "https://www.youtube.com/embed/YT4_sLVYbm8" },
  { id: 4, src: "https://www.youtube.com/embed/-c9_BlP_2Wc" },
  { id: 5, src: "https://www.youtube.com/embed/pcZ50NyiUak" },
  { id: 6, src: "https://www.youtube.com/embed/usdYqVlblGk" },
  { id: 7, src: "https://www.youtube.com/embed/sl3D_mHp3zI" },
  { id: 8, src: "https://www.youtube.com/embed/Sv_anuMb3MY" },
  { id: 9, src: "https://www.youtube.com/embed/VJ2KnMzf2Zc" },
];

export const motionGraphicsVideos = [
  "/images/GIF/GIF1.mp4",
  "/images/GIF/GIF2.mp4",
  "/images/GIF/GIF3.mp4",
  "/images/GIF/GIF4.mp4",
  "/images/GIF/GIF5.mp4",
];

export const services = [
  {
    id: 1,
    icon: "/images/Video_editing.png",
    title: "Video Editing",
    description:
      "Transform raw footage into stunning videos with seamless transitions and captivating effects, tailored to tell your story.",
    number: "01",
  },
  {
    id: 2,
    icon: "/images/Cinematography.png",
    title: "Cinematography",
    description:
      "Capture breathtaking visuals with professional cinematography that brings ideas to life with creativity and precision.",
    number: "02",
  },
  {
    id: 3,
    icon: "/images/Graphic_Design.png",
    title: "Graphics Design",
    description:
      "Design impactful visuals like logos, banners, and social media posts to enhance your brand and communicate your vision.",
    number: "03",
  },
  {
    id: 4,
    icon: "/images/Photography.png",
    title: "Photography",
    description:
      "Freeze special moments with creative and high-quality photography, from portraits to events and everything in between.",
    number: "04",
  },
];

export const skillTools = [
  { id: 1, src: "/images/AI.png", alt: "Adobe Illustrator" },
  { id: 2, src: "/images/PR.png", alt: "Adobe Premiere Pro" },
  { id: 3, src: "/images/AE.png", alt: "Adobe After Effects" },
  { id: 4, src: "/images/AU.png", alt: "Adobe Audition" },
  { id: 5, src: "/images/PS.png", alt: "Adobe Photoshop" },
  { id: 6, src: "/images/LR.png", alt: "Adobe Lightroom" },
];

export const brands = [
  { id: 1, src: "/images/Brands/10MS.png", alt: "10MS" },
  { id: 2, src: "/images/Brands/ACS.png", alt: "ACS" },
  { id: 3, src: "/images/Brands/EduXpert.png", alt: "EduXpert" },
  { id: 4, src: "/images/Brands/matrahin.png", alt: "Matrahin" },
  { id: 5, src: "/images/Brands/SH Jay.png", alt: "SH Jay" },
  { id: 6, src: "/images/Brands/TER.png", alt: "TER" },
  { id: 7, src: "/images/Brands/APARS.png", alt: "APARS" },
  { id: 8, src: "/images/Brands/vectorized.png", alt: "Vectorized" },
  { id: 9, src: "/images/Brands/nk logo.png", alt: "NK" },
];

export const counterStats = [
  { id: 1, value: 7, label: "Years of Experience", suffix: "+" },
  { id: 2, value: 600, label: "Videos Edited", suffix: "+" },
  { id: 3, value: 50, label: "Satisfied Clients", suffix: "+" },
  { id: 4, value: 900, label: "Total Video Views", suffix: "k+" },
];

export const teamMembers = [
  {
    id: 1,
    name: "Abdey Chowdhury",
    role: "Co Founder",
    image: "/images/Team/Mohaimin.jpg",
    socials: {
      instagram: "https://www.instagram.com/mohaimin_566/",
      facebook: "https://facebook.com/abdey.chowdhury. 3",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Md Saleh Abu Mayeen",
    role: "Head of Management",
    image: "/images/Team/Mayeen2.jpg",
    socials: {
      instagram: "https://www.instagram.com/md_shalehabu_mayeen/",
      facebook: "https://www.facebook.com/karathelegend",
      linkedin: "https://www.linkedin.com/in/md-shaleh-abu-mayeen-941019340/",
    },
  },
];

export type PortfolioCategory =
  | "cinematography"
  | "videos"
  | "reels"
  | "animations"
  | "graphics"
  | "photography";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  type: "video" | "image";
  src: string;
  title: string;
  isVertical?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  // Cinematography
  {
    id: 1,
    category: "cinematography",
    type: "video",
    src: "https://www.youtube.com/embed/YT4_sLVYbm8",
    title: "Shoot + Edit",
  },
  {
    id: 2,
    category: "cinematography",
    type: "video",
    src: "https://www.youtube.com/embed/dx9dLgD0qyE",
    title: "Fiverr Edit",
  },
  {
    id: 3,
    category: "cinematography",
    type: "video",
    src: "https://www.youtube.com/embed/tzAPYGdkQnM",
    title: "Shoot + Edit",
  },
  {
    id: 4,
    category: "cinematography",
    type: "video",
    src: "https://www.youtube.com/embed/3t1gf-dzd1U",
    title: "Shoot + Edit",
  },
  {
    id: 5,
    category: "cinematography",
    type: "video",
    src: "https://www.youtube.com/embed/rl_QdrCkopo",
    title: "Shoot + Edit",
  },
  {
    id: 6,
    category: "cinematography",
    type: "video",
    src: "https://www.youtube.com/embed/Y8pyP4fAkYY",
    title: "Shoot + Edit",
  },

  // Videos
  {
    id: 7,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/EmbKQJMnFx0",
    title: "Fiverr Edit",
  },
  {
    id: 8,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/-c9_BlP_2Wc",
    title: "Fiverr Edit",
  },
  {
    id: 9,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/YG9FFlwD7NA",
    title: "Fiverr Edit",
  },
  {
    id: 10,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/vrTVGb6MoqY",
    title: "Fiverr Edit",
  },
  {
    id: 11,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/Sv_anuMb3MY",
    title: "Fiverr Edit",
  },
  {
    id: 12,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/rnokvhNRlZk",
    title: "Fiverr Edit",
  },
  {
    id: 13,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/Upa7liTsYWA",
    title: "Fiverr Edit",
  },
  {
    id: 14,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/9S5-_57V0r0",
    title: "Fiverr Edit",
  },
  {
    id: 15,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/kqVr-HZ5yEI",
    title: "Fiverr Edit",
  },
  {
    id: 16,
    category: "videos",
    type: "video",
    src: "https://www.youtube.com/embed/sl3D_mHp3zI",
    title: "Fiverr Edit",
  },

  // Animations
  {
    id: 17,
    category: "animations",
    type: "video",
    src: "https://www.youtube.com/embed/iYRPenqjBWM",
    title: "Fiverr Edit",
  },
  {
    id: 18,
    category: "animations",
    type: "video",
    src: "https://www.youtube.com/embed/Ucdkw5DqPYA",
    title: "Channel Trailer",
  },
  {
    id: 19,
    category: "animations",
    type: "video",
    src: "https://www.youtube.com/embed/5gIfLuwu1s0",
    title: "Faceless Edit",
  },
  {
    id: 20,
    category: "animations",
    type: "video",
    src: "https://www.youtube.com/embed/P34tCD2LfDs",
    title: "Faceless Edit",
  },

  // Reels
  {
    id: 21,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/ooyHkxVSFU8",
    title: "Shoot + Edit",
    isVertical: true,
  },
  {
    id: 22,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/6xGgcr8t7Ek",
    title: "Fiverr Edit",
    isVertical: true,
  },
  {
    id: 23,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/61yiFB2hOJA",
    title: "Shoot + Edit",
    isVertical: true,
  },
  {
    id: 24,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/B1_266licMs",
    title: "Shoot + Edit",
    isVertical: true,
  },
  {
    id: 25,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/I9TABEw1RUw",
    title: "Shoot + Edit",
    isVertical: true,
  },
  {
    id: 26,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/kRtxyr-A0R4",
    title: "Shoot + Edit",
    isVertical: true,
  },
  {
    id: 27,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/vl3nhuLJxqU",
    title: "Shoot + Edit",
    isVertical: true,
  },
  {
    id: 28,
    category: "reels",
    type: "video",
    src: "https://www.youtube.com/embed/pLslLhVuIJY",
    title: "Shoot + Edit",
    isVertical: true,
  },

  // Photography
  {
    id: 29,
    category: "photography",
    type: "image",
    src: "/images/photography/product 3.jpg",
    title: "Product Photography",
  },
  {
    id: 30,
    category: "photography",
    type: "image",
    src: "/images/photography/product 1.jpg",
    title: "Product Photography",
  },
  {
    id: 31,
    category: "photography",
    type: "image",
    src: "/images/photography/product 2.jpg",
    title: "Product Photography",
  },
  {
    id: 32,
    category: "photography",
    type: "image",
    src: "/images/photography/DSC04561.jpg",
    title: "Closeup",
  },
  {
    id: 33,
    category: "photography",
    type: "image",
    src: "/images/photography/DSC05599.jpg",
    title: "Instagram Post",
  },
  {
    id: 34,
    category: "photography",
    type: "image",
    src: "/images/photography/DSC05649.jpg",
    title: "Instagram Post",
  },
  {
    id: 35,
    category: "photography",
    type: "image",
    src: "/images/photography/mrgdfk (30).jpg",
    title: "Magical Moment",
  },
  {
    id: 36,
    category: "photography",
    type: "image",
    src: "/images/photography/mrgdfk (31).jpg",
    title: "Magical Moment",
  },
  { id: 37,
    category: "photography",
    type: "image", 
    src: "/images/photography/mrgdfk (33).jpg",
    title: "Magical Moment",
  }
];
