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

  useEffect(() => {
    const stored = localStorage.getItem(`chat_${gigId}`);
    const parsed: Message[] = stored ? JSON.parse(stored) : [];
    setMessages(parsed);
  }, [gigId]);

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
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white">
      <header className="flex items-center justify-between p-4 border-b fiverr-gradient text-white shadow-sm">
        <button onClick={() => router.back()} className="text-white hover:text-gray-200 transition-colors">
          ← Volver
        </button>
        <h2 className="font-semibold text-white">Chat Gig {gigId}</h2>
        <Link href="/gigs" className="text-white hover:text-gray-200 transition-colors">
          Gigs
        </Link>
      </header>

      <main className="flex-1 overflow-y-auto p-4 pb-24 space-y-3 bg-gradient-to-b from-gray-50 to-gray-100">
        {messages.length === 0 && (
          <p className="text-center text-gray-400">Aún no hay mensajes.</p>
        )}
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`
              max-w-xs p-3 shadow-sm
              ${msg.sender === 'client'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white self-end rounded-2xl ml-auto'
                : 'bg-white text-gray-800 self-start rounded-2xl border border-gray-200'}
            `}
          >
            <p className="text-sm">{msg.text}</p>
            <span className="block text-[0.65rem] mt-1 opacity-70">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </main>

      <footer className="relative p-4 border-t bg-white">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe un mensaje…"
          className="w-full pr-14 border border-gray-300 bg-white text-gray-800 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 shadow-sm"
        />

        <button
          onClick={sendMessage}
          className="absolute top-1/2 right-6 -translate-y-1/2 text-green-600 hover:text-green-700 p-1 transition-colors"
          aria-label="Enviar mensaje"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.94 2.94a.75.75 0 011.06 0l12 12a.75.75 0 01-1.06 1.06L7 5.06 2.94 9.12a.75.75 0 01-1.06-1.06l2.5-2.5a.75.75 0 010-1.06z"/>
          </svg>
        </button>
      </footer>
    </div>
  );
}
