import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || !session.user) {
    return <div>please login</div>;
  }

  return (
    <SessionProvider session={session}>
      <section>{children}</section>
    </SessionProvider>
  );
}
