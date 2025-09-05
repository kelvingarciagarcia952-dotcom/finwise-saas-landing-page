// src/app/gigs/new/page.tsx
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { gigCategories } from '@/data/gigCategories'

interface NewGig {
  id: string
  title: string
  description: string
  price: string
  category: string
  username: string
  network: string
}

export default function NewGigPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(gigCategories[0])

  // Datos fijos de usuario y red
  const currentUser = 'Kelvin'
  const defaultNetwork = 'USDT (TRC20)'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newGig: NewGig = {
      id: Date.now().toString(),
      title,
      description,
      price,
      category,
      username: currentUser,
      network: defaultNetwork,
    }

    const stored = localStorage.getItem('userGigs')
    const userGigs: NewGig[] = stored ? JSON.parse(stored) : []
    localStorage.setItem('userGigs', JSON.stringify([newGig, ...userGigs]))

    router.push('/gigs')
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold mb-6">Publicar un Gig</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Título</label>
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Descripción</label>
          <textarea
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2 h-24"
          />
        </div>

        <div>
          <label className="block mb-1">Precio</label>
          <input
            type="text"
            required
            placeholder="p. ej. 25"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Categoría</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {gigCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Publicar Gig
        </button>
      </form>
    </div>
  )
      }
