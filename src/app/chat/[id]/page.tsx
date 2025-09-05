// src/app/chat/[id]/page.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'client' | 'owner';
  timestamp: number;
}

export default function ChatPage() {
  const { id: gigId } = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  // 1. Carga anteriores de localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`chat_${gigId}`);
    const parsed: Message[] = stored ? JSON.parse(stored) : [];
    setMessages(parsed);
  }, [gigId]);

  // 2. Scroll automático al final
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'client',
      timestamp: Date.now(),
    };
    const updated = [...messages, newMsg];
    setMessages(updated);
    localStorage.setItem(`chat_${gigId}`, JSON.stringify(updated));
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto">
      <header className="flex items-center justify-between p-4 border-b">
        <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-800">
          ← Volver
        </button>
        <h2 className="font-semibold">Chat del Gig {gigId}</h2>
        <Link href="/gigs" className="text-indigo-600 hover:underline">
          Gigs
        </Link>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 && (
          <p className="text-center text-gray-500">Aún no hay mensajes.</p>
        )}
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`max-w-xs p-2 rounded ${
              msg.sender === 'client'
                ? 'bg-green-100 self-end'
                : 'bg-gray-200 self-start'
            }`}
          >
            <p className="text-sm">{msg.text}</p>
            <span className="text-[0.65rem] text-gray-500 block mt-1">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </main>

      <footer className="flex p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2 mr-2"
          placeholder="Escribe tu mensaje…"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Enviar
        </button>
      </footer>
    </div>
  );
    }
