'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to connect to the server');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Thank you for registering! Join our <a href="https://discord.gg/seedr" className="text-green-500 font-medium hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">discord</a> to be notified
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email to get updates..."
        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        disabled={status === 'loading'}
      />
      <div className="w-full flex justify-center md:w-auto mt-5 md:mt-0">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full max-w-[136px] px-7 py-4 bg-black text-white text-[12px] font-poppins rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 transition-colors"
        >
          Register
        </button>
      </div>
      </div>
      

      {status === 'error' && (
        <div className="mt-4 text-red-600 text-sm">
          {message}
        </div>
      )}
    </form>
  );
}