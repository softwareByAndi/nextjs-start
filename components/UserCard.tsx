

export default function UserCard({ session }: any) {
    return (
        <div className="mt-4">
            <h2>Session</h2>
            <pre className="text-left w-fit m-auto">{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}