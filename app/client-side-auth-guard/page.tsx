'use client'
/*
Reminder that this component must be wrapped in an AuthProvider
in order for client components to use the useSession hook.

also, client pages aren't recommended because they're not rendered on the server.
*/
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '@components/UserCard'


export default function ClientSideAuthGuard() {
    const session = useSession(
        // {
        //     required: true,
        //     onUnauthenticated() {
        //         redirect('/api/auth/signin?callbackUrl=/client-side-auth-guard')
        //     }
        // }
    )
    return (
        <div className="text-left">
            <h1>Client Side Auth Guard</h1>
            <p>this component is a client-side page that wraps child components with accesses to the auth session</p>
            <UserCard session={session} />
            {/* <p>session status: {status}</p> */}
        </div>
    )
}