'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { services } from '@/lib/data'

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services. length) % services.length)
  }

  return (
    <section className="section" id="service">
      <Container>
        <SectionTitle
          subtitle="Services That We Provide"
          title="Services"
          description="We offer creative services designed to bring your ideas to life. Whether it's crafting stunning visuals, capturing cinematic moments, or designing impactful graphics, we combine expertise with passion to deliver exceptional results."
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-12 lg:mt-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mt-8">
          <ServiceCard service={services[currentIndex]} />
          
          <div className="flex justify-center gap-6 mt-10">
            <button 
              onClick={slidePrev}
              className="p-2 opacity-50 hover: opacity-100 transition"
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button 
              onClick={slideNext}
              className="p-2 opacity-50 hover:opacity-100 transition"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

interface ServiceCardProps {
  service: typeof services[0]
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-raisin-black rounded-lg p-10 h-full transition-all duration-300 hover:bg-raisin-black group">
      <div className="w-12 h-12">
        <Image 
          src={service.icon} 
          alt={service. title}
          width={50}
          height={50}
        />
      </div>

      <h3 className="text-2xl font-bold text-roman-silver group-hover:text-white mt-5 transition-colors">
        {service.title}
      </h3>

      <p className="text-roman-silver mt-4">
        {service. description}
      </p>

      <span className="block text-5xl font-extrabold mt-8 text-transparent [-webkit-text-stroke: 1px_white] opacity-30">
        {service. number}
      </span>
    </div>
  )
}