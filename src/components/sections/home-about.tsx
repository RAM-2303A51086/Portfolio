'use client';

import Image from 'next/image';
import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';

export function HomeAboutSection() {
  return (
    <SectionWrapper id="home-about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl uppercase text-primary">
            LET ME INTRODUCE MYSELF
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {personalData.bio}
          </p>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-[230px] aspect-square rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/myphoto.png"
              alt="My Profile Photo"
              fill
              className="object-cover scale-125"
              priority
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
