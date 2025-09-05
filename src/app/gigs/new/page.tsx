
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { gigCategories } from '@/data/gigCategories';

interface NewGig {
  id: string;     // usar UUID o timestamp para id único
  title: string;
  description: string;
  price: string;
  category: string;
}

export default function NewGigPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(gigCategories[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Construir el nuevo gig
    const newGig: NewGig = {
      id: Date.now().toString(),
      title,
      description,
      price,
      category,
    };

    // 2. Leer array actual de localStorage
    const stored = localStorage.getItem('userGigs');
    const userGigs: NewGig[] = stored ? JSON.parse(stored) : [];

    // 3. Agregar el nuevo gig y volver a almacenar
    localStorage.setItem('userGigs', JSON.stringify([newGig, ...userGigs]));

    // 4. Redirigir al listado
    router.push('/gigs');
  };

  return (
    // ... tu JSX de form sin cambios excepto el handleSubmit
  );
}
