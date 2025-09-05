// src/app/gigs/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
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

export default function GigDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [gig, setGig] = useState<Gig | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('userGigs');
    const userGigs: Gig[] = stored ? JSON.parse(stored) : [];
    const allGigs = [...userGigs, ...staticGigs];
    const found = allGigs.find((g) => g.id === id);
    if (!found) {
      router.push('/gigs');
    } else {
      setGig(found);
    }
  }, [id, router]);

  if (!gig) {
    return (
      <div className="p-6 text-center text-white">
        Cargando gig…
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <div className="bg-white text-black rounded-lg p-6 space-y-4">
        <h1 className="text-3xl font-bold">{gig.title}</h1>

        <p className="text-sm text-gray-500">
          Publicado por {gig.username}
        </p>

        <p className="text-sm text-gray-500">{gig.category}</p>

        <p className="mt-4 text-gray-700">{gig.description}</p>

        <span className="block mt-6 text-xl font-semibold">
          {gig.price} {gig.network}
        </span>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          >
            ← Volver
          </button>

          <Link
            href="/gigs"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Ir a Gigs
          </Link>

          <Link
            href={`/chat/${gig.id}`}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
          }
