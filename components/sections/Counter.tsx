"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useCounter } from "@/hooks/useCounter";
import { counterStats } from "@/lib/data";

export default function Counter() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          subtitle="Proven Track Record of"
          title="Delivering Excellence"
        />

        <div className="bg-gradient-to-br from-raisin-black to-eerie-black rounded-2xl p-8 md:p-12 mt-12 shadow-2xl border border-white-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {counterStats.map((stat) => (
              <CounterItem key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

interface CounterItemProps {
  stat: (typeof counterStats)[0];
}

function CounterItem({ stat }: CounterItemProps) {
  const { count, ref } = useCounter(stat.value, 2000);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-xl bg-white-5 hover:bg-white-10 transition-all duration-300 hover:scale-105 group"
    >
      <div className="relative">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson-red to-primary group-hover:scale-110 transition-transform duration-300">
          {count}
          {stat.suffix}
        </h1>
        <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-crimson-red to-primary group-hover:opacity-75 transition-opacity"></div>
      </div>
      <h3 className="text-roman-silver mt-4 text-sm md:text-base font-medium group-hover:text-white transition-colors">
        {stat.label}
      </h3>
    </div>
  );
}
