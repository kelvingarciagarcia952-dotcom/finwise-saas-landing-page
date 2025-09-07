// src/app/api/gigs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
  // Lee todos los gigs ordenados por fecha de creación
  const { data, error } = await supabase
    .from('gigs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
  // Inserta un nuevo gig en la tabla
  const gig = await req.json();
  const { data, error } = await supabase.from('gigs').insert(gig);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}
