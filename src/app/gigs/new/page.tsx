// src/app/gigs/new/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { gigCategories } from '@/data/gigCategories';

export default function NewGigPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(gigCategories[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGig = {
      id: Date.now().toString(),
      title,
      description,
      price,
      category,
    };
    const stored = localStorage.getItem('userGigs');
    const userGigs = stored ? JSON.parse(stored) : [];
    localStorage.setItem('userGigs', JSON.stringify([newGig, ...userGigs]));
    router.push('/gigs');
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold mb-6">Publicar un Gig</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... campos de título, descripción, precio y categoría ... */}
      </form>
    </div>
  );
      }
