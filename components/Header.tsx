import { options } from "@api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Header() {
    const session = await getServerSession(options)
    return (
        <div className="flex flex-row gap-4 mx-4">
            <nav className="flex-grow flex gap-4 justify-center items-center">
                <a href="/">Home</a>
                <a href="/default-auth">Default Auth</a>
                <a href="/auth-guard">Server Side Auth Guarded</a>
                <a href="/client-side-auth-guard">Client Side Auth Guarded</a>
            </nav>
            <div className="flex gap-4">
                {session ? (
                    <a  href="/api/auth/signout?callbackUrl=/"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 block w-fit"
                    >
                        Sign out
                    </a>
                ) : (
                    <a  href="/api/auth/signin"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 block w-fit"
                    >
                        Sign in
                    </a>
                )}
            </div>
        </div>
    )
}