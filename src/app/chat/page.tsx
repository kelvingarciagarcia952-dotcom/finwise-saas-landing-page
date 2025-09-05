// src/app/chat/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Gig {
  id: string;
  title: string;
  username: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'client' | 'owner';
  timestamp: number;
}

// Copia aquí tu listado de gigs estáticos (con id, title y username)
const staticGigs: Gig[] = [
  { id: '1', title: 'Diseño de logo', username: 'Admin' },
  { id: '2', title: 'Desarrollo Web', username: 'Admin' },
  { id: '3', title: 'Gestión de redes', username: 'Admin' },
];

export default function ChatIndexPage() {
  const [sessions, setSessions] = useState<
    { gig: Gig; lastMessage?: Message }[]
  >([]);

  useEffect(() => {
    // 1. Buscar claves en localStorage que empiecen por "chat_"
    const keys = Object.keys(localStorage).filter((k) =>
      k.startsWith('chat_')
    );

    // 2. Para cada clave, extraer mensajes y el gig asociado
    const data = keys.map((key) => {
      const gigId = key.replace('chat_', '');
      const msgs: Message[] = JSON.parse(
        localStorage.getItem(key) || '[]'
      );
      const lastMessage = msgs[msgs.length - 1];
      // Unir con gigs estáticos y publicados por usuario
      const userGigs = JSON.parse(
        localStorage.getItem('userGigs') || '[]'
      ) as Gig[];
      const allGigs: Gig[] = [...userGigs, ...staticGigs];
      const gig = allGigs.find((g) => g.id === gigId) || {
        id: gigId,
        title: 'Gig desconocido',
        username: 'Desconocido',
      };
      return { gig, lastMessage };
    });

    setSessions(data);
  }, []);

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Historial de Chat</h1>

      {sessions.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay historial de chat todavía.
        </p>
      ) : (
        <ul className="space-y-4">
          {sessions.map(({ gig, lastMessage }) => (
            <li key={gig.id}>
              <Link
                href={`/chat/${gig.id}`}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-semibold">{gig.title}</p>
                  <p className="text-sm text-gray-500">
                    Con {gig.username}
                  </p>
                </div>
                {lastMessage && (
                  <p className="text-sm text-gray-400 truncate max-w-xs">
                    {lastMessage.text}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
      }
