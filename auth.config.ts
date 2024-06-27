import Google from 'next-auth/providers/google';
import type { Provider } from 'next-auth/providers';
import type { NextAuthConfig } from 'next-auth';
export type {
  Account,
  DefaultSession,
  Profile,
  Session,
  User,
} from '@auth/core/types';

const providers: Provider[] = [Google];

export default {
  debug: process.env.NODE_ENV !== 'production' ? true : false,
  theme: {
    colorScheme: 'light',
    brandColor: '#18181b',
    logo: '/next.svg',
  },
  providers: providers,
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    signIn({ user, account, profile }) {
      // TOOD: replace to restrict access to only certain emails
      const allowedEmails = ['xxx@gmail.com'];
      return Promise.resolve(
        (profile?.email && allowedEmails.includes(profile?.email)) || false
      );
    },
  },
} satisfies NextAuthConfig;
