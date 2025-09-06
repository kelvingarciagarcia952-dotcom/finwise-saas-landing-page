// src/app/profile/page.tsx
import React from 'react';

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold mb-4">Mi perfil</h1>
      <p className="mb-6">
        Aquí podrás ver y editar tus datos y estadísticas de <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent font-semibold">Kellgreat</span>.
      </p>
      <div className="space-y-4">
        <div><strong>Usuario:</strong> Kelvin</div>
        <div><strong>Email:</strong> kelvin@example.com</div>
        <div><strong>Gigs subidos:</strong> 0</div>
      </div>
      <a
        href="/"
        className="mt-8 inline-block text-green-600 hover:text-green-700 hover:underline transition-colors"
      >
        ← Volver al inicio
      </a>
    </div>
  );
}
