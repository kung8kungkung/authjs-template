'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const router = useRouter();
  const session = useSession();

  if (!session) {
    router.push('/');
    return <div>Not authenticated</div>;
  }

  return (
    <div className='min-h-screen bg-zinc-900 p-8 flex flex-col justify-center text-white text-center'>
      <h1 className='text-2xl'>session info</h1>
      <span>email:</span>
      <span>{session.data?.user?.email}</span>
    </div>
  );
}
