"use client"
import WaitlistForm from './components/WaitlistForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main
      className="min-h-screen font-poppins flex flex-col items-center justify-center p-4"
      style={{
        background: `
          radial-gradient(at center, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.7232) 60%, rgba(255, 255, 255, 1) 80%),
          url('/background.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid rgba(255, 255, 255, 0.3)', 
        borderRadius: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)', 
      }}
    >
      <div className="max-w-3xl w-full text-center space-y-6">
        <div className="mb-8">
          <Image 
            src="/icon.png" 
            alt="Seedr.fun" 
            width={217.99}
            height={44.32}
            className="h-11 mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            <span className="block md:inline">Support builders</span> <span className="block md:inline">you trust</span>
          </h1>
          <p className="text-gray-600 text-[12px] md:text-lg max-w-xl mx-auto">
            Make a difference by supporting initiatives you believe in, contribute through
            Seedr rounds to bring impactful ideas to life.
          </p>
        </div>
        <WaitlistForm />
        <div className="text-sm text-gray-500 pt-12">
          Join our{' '}
          <a href="https://discord.gg/WE48A3Hu" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 underline">
            <Image src="/Discord.png" alt="Discord" width={21} height={16} className="h-4 inline-block mx-1" /> Discord
          </a>{' '}
          and stay connected.
        </div>

        <div className="text-sm text-gray-500 pt-4 absolute bottom-16 flex w-full left-0 items-center justify-center gap-2">
          Made with <span className="text-green-500">💚</span> by 
          <Image src="/Cyro.png" alt="Cyro Studios" width={14} height={14} className="h-4 inline-block mx-1" /> 
          <a href="https://x.com/cyro_studios" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 mx-1">Cyro Studios</a>
        </div>
      </div>
    </main>
  );
}