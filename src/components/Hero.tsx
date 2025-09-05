import React from 'react';
import Image from 'next/image';

// Ya no necesitamos los botones de tienda ni los datos de heroDetails
// import AppStoreButton from './AppStoreButton';
// import PlayStoreButton from './PlayStoreButton';
// import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      {/* Fondo y efectos intactos */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" />

      <div className="text-center">
        {/* Título y subtítulo estáticos en español */}
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          Kellgreat
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          Conecta freelancers bloqueados con clientes, sin comisiones ocultas ni sorpresas.
        </p>

        {/* Botón único de registro */}
        <div className="mt-6">
          <a
            href="https://forms.gle/tu-enlace"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
          >
            Registrarse
          </a>
        </div>

        {/* Imagen central intacta (si quieres cambiarla, ajusta la src manualmente) */}
        <Image
          src="/images/hero-mockup.png"    // o usa heroDetails.centerImageSrc si actualizas heroDetails
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
