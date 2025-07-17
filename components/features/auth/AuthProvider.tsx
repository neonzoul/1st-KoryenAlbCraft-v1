'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

/**
 * AuthProvider is a client-side component responsible for wrapping the application
 * with NextAuth's SessionProvider.
 *
 * This component acts as a "Client Boundary", allowing the use of the client-side
 * SessionProvider within the root server component layout of the Next.js App Router.
 *
 * @param {PropsWithChildren} props - The component props, which include children.
 * @returns {JSX.Element} The SessionProvider wrapping the child components.
 */

// --component-- AuthProvider
// Ths is a client component wrapper for NextAuth's SessionProvider
export const AuthProvider = ({ children }: PropsWithChildren) => {
    return <SessionProvider>{children}</SessionProvider>
}