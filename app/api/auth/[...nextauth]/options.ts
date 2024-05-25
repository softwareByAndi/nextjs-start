import type { NextAuthOptions, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username:", type: "text", placeholder: "username is test" },
                password: { label: "Password:", type: "password", placeholder: "password is test" }
            },
            async authorize(credentials, req) {
                /*
                    providing hard coded user credentials for demonstration purposes.
                    In a real application, you would validate the credentials against a database

                    Note that this is run on the server.

                    docs: https://next-auth.js.org/configuration/providers/credentials
                */
                const user = { 
                    id: "42", // id is expected to be a string.
                    name: "test", 
                    password: "test",
                    email: "test@test.com",
                };
                if (
                    credentials?.username === user.name 
                    && credentials?.password === user.password
                ) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    };
                } else {
                    return null;
                }
            }
        })
    ]
}