import { options } from "@api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "@components/UserCard"

export default async function AuthGuard() {
  const session = await getServerSession(options)
  return (
    <div className="flex flex-col justify-content"> {
      session ? (<>
        <h1>Server Side Auth Access</h1>
        <p>this page applies Auth check server side.</p>
        <UserCard session={session} />
      </>) : (<>
        <h1>Access Denied</h1>
        <p>you must be signed in to access this page.</p>
      </>)
    }</div>
  )
}