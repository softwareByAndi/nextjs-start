"use client"

export default function Test({name}: {name: string|null}) {
    const msg = `Hello ${name ?? 'World'}`
    return (
        <>
            <h1>Test</h1>
            <button onClick={() => console.log(msg)}>Click me</button>
        </>
    )
}
