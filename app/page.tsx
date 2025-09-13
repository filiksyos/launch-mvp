"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Welcome to Launch MVP</h1>
      <p className="text-lg mb-8">A simplified SaaS boilerplate.</p>
      <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Dashboard
      </Link>
    </div>
  );
}
