'use client'

import { SessionProvider } from 'next-auth/react'

export default function ClientSideAuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <div className="text-center">
                {children}
            </div>
        </SessionProvider>
    )
}