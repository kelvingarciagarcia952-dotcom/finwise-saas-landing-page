'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { gigCategories } from '@/data/gigCategories';

interface Gig {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
}

// Tus tres ejemplos estáticos
const staticGigs: Gig[] = [
  { id: '1', title: 'Diseño de logo', description: 'Logo profesional en 24h.', price: '10 USDT', category: 'Diseño Gráfico' },
  { id: '2', title: 'Desarrollo Web', description: 'Landing page en Next.js.', price: '20 USDT', category: 'Desarrollo Web' },
  { id: '3', title: 'Gestión de redes', description: 'Plan mensual de community manager.', price: '15 USDT', category: 'Marketing Digital' },
];

export default function GigsPage() {
  const [userGigs, setUserGigs] = useState<Gig[]>([]);

  useEffect(() => {
    // 1. Carga los gigs guardados en localStorage
    const stored = localStorage.getItem('userGigs');
    const parsed: Gig[] = stored ? JSON.parse(stored) : [];
    setUserGigs(parsed);
  }, []);

  // 2. Combina primero los gigs del usuario y luego los estáticos
  const allGigs = [...userGigs, ...staticGigs];

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold mb-8">Gigs disponibles</h1>
      <ul className="space-y-6">
        {allGigs.length === 0 && (
          <li className="text-center text-gray-500">No hay gigs publicados aún.</li>
        )}
        {allGigs.map(gig => (
          <li key={gig.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{gig.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{gig.category}</p>
            <p className="mt-2 text-gray-700">{gig.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-semibold">{gig.price}</span>
              <Link href={`/gigs/${gig.id}`} className="text-indigo-600 hover:underline">
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
