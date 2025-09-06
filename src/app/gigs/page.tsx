// src/app/gigs/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Gig {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  username: string;
  network: string;
}

// Ejemplos estáticos con usuario y red incluidos
const staticGigs: Gig[] = [
  {
    id: '1',
    title: 'Diseño de logo',
    description: 'Logo profesional en 24h.',
    price: '10',
    category: 'Diseño Gráfico',
    username: 'Admin',
    network: 'USDT (TRC20)',
  },
  {
    id: '2',
    title: 'Desarrollo Web',
    description: 'Landing page en Next.js.',
    price: '20',
    category: 'Desarrollo Web',
    username: 'Admin',
    network: 'USDT (TRC20)',
  },
  {
    id: '3',
    title: 'Gestión de redes',
    description: 'Plan mensual de community manager.',
    price: '15',
    category: 'Marketing Digital',
    username: 'Admin',
    network: 'USDT (TRC20)',
  },
];

export default function GigsPage() {
  const [userGigs, setUserGigs] = useState<Gig[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('userGigs');
    if (stored) {
      try {
        setUserGigs(JSON.parse(stored));
      } catch {
        console.error('No se pudo parsear userGigs en localStorage');
      }
    }
  }, []);

  const allGigs = [...userGigs, ...staticGigs];

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold mb-8 text-blue-600">Gigs disponibles</h1>
      <ul className="space-y-6">
        {allGigs.length === 0 && (
          <li className="text-center text-blue-500">No hay gigs publicados aún.</li>
        )}
        {allGigs.map((gig) => (
          <li key={gig.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700">{gig.title}</h2>
            <p className="mt-1 text-sm text-blue-500">
              Publicado por {gig.username}
            </p>
            <p className="mt-1 text-sm text-blue-500">{gig.category}</p>
            <p className="mt-2 text-blue-600">{gig.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-semibold text-blue-700">
                {gig.price} {gig.network}
              </span>
              <Link
                href={`/gigs/${gig.id}`}
                className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
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
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-all duration-200"
        >
          Publicar un Gig
        </Link>
      </div>
    </div>
  );
    }
