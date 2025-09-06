// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 text-gray-800"
    >
      {/* Fondo y efectos intactos */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div
          className="absolute inset-0 h-full w-full
            bg-hero-background
            bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
            bg-[size:40px_40px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        />
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" />

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold max-w-lg md:max-w-2xl mx-auto">
          <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent drop-shadow-lg">
            Kellgreat
          </span>
        </h1>
        <p className="mt-4 max-w-lg mx-auto">
          Conecta freelancers bloqueados con clientes, sin comisiones ocultas ni sorpresas.
        </p>

        <div className="mt-6">
          <a
            href="/gigs"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
          >
            Explorar Gigs
          </a>
        </div>

        <Image
          src="/images/hero-mockup.png"
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority
          unoptimized
          alt="Vista de la plataforma Kellgreat"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
