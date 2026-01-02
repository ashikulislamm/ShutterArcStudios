"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { motionGraphicsVideos } from "@/lib/data";

export default function MotionGraphics() {
  // Duplicate videos for smooth infinite loop
  const videos = [
    ...motionGraphicsVideos,
    ...motionGraphicsVideos,
    ...motionGraphicsVideos,
  ];

  return (
    <section className="section overflow-hidden">
      <Container>
        <SectionTitle subtitle="Some of Our Best" title="Motion Graphics" />
      </Container>

      <div className="mt-8 md:mt-12 lg:mt-16 px-4">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          loopAdditionalSlides={3}
          speed={800}
          breakpoints={{
            320: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 45,
                stretch: 0,
                depth: 150,
                modifier: 1,
              },
            },
            768: {
              slidesPerView: 4,
              coverflowEffect: {
                rotate: 48,
                stretch: 0,
                depth: 180,
                modifier: 1,
              },
            },
            1024: {
              slidesPerView: 4,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
              },
            },
          }}
          className="motion-graphics-swiper py-8"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
