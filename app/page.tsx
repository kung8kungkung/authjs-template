import { auth, signIn, signOut } from '@/auth';

export default async function Home() {
  const session = await auth();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        {session?.user ? (
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button
              className='flex fixed top-0 left-0 justify-center pt-8 pb-6 w-full bg-gradient-to-b border-b border-gray-300 lg:static lg:p-4 lg:w-auto lg:bg-gray-200 lg:rounded-xl lg:border from-zinc-200 backdrop-blur-2xl lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit'
              type='submit'
            >
              Signout
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
          >
            <button
              className='flex fixed top-0 left-0 justify-center pt-8 pb-6 w-full bg-gradient-to-b border-b border-gray-300 lg:static lg:p-4 lg:w-auto lg:bg-gray-200 lg:rounded-xl lg:border from-zinc-200 backdrop-blur-2xl lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit'
              type='submit'
            >
              Signin
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
