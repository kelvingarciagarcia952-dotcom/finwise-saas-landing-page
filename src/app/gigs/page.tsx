// src/app/gigs/page.tsx
import React from 'react';
import Link from 'next/link';

interface Gig {
  id: number;
  title: string;
  description: string;
  price: string;
}

export default function GigsPage() {
  // Ejemplo de datos estáticos; luego vendrán de tu backend/Blockchain
  const gigs: Gig[] = [
    { id: 1, title: 'Diseño de logo', description: 'Logo profesional en 24h.', price: '10 USDT' },
    { id: 2, title: 'Desarrollo Web', description: 'Landing page en Next.js.', price: '20 USDT' },
    { id: 3, title: 'Gestión de redes', description: 'Plan mensual de community manager.', price: '15 USDT' },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold mb-8">Gigs disponibles</h1>
      <ul className="space-y-6">
        {gigs.map(gig => (
          <li key={gig.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{gig.title}</h2>
            <p className="mt-2 text-gray-700">{gig.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-semibold">{gig.price}</span>
              <Link
                href={`/gigs/${gig.id}`}
                className="text-indigo-600 hover:underline"
              >
                Ver detalles
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="/gigs/new"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
        >
          Publicar un Gig
        </Link>
      </div>
    </div>
  );
                }
