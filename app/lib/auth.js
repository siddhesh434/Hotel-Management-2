import CredentialsProvider from 'next-auth/providers/credentials';


export const NEXT_AUTH = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "" },
                password: { label: "password", type: "password", placeholder: "" }
            },
            async authorize(credentials) {
                const user = await fetch(`${process.env.NEXTAUTH_URL}/api/all-users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(res => res.json()).then(data => {
                    return data.find(user => user.email === credentials.username && user.password === credentials.password)
                }).catch(err => {
                    console.log(err);
                }
                );
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },

        }),
        // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
    callbacks: {
        signIn: async (user, account, profile) => {
            console.log("signIn", user, account, profile);

            const email = user.user.email; // Direct access without awaiting

            // If the user's email is "buddy@gmail.com", deny the sign-in
            if (email === "buddy@gmail.com") {
                console.log("Denied login for buddy@gmail.com");
                return false; // Prevent sign-in for this user
            }
            return true; // Allow sign-in for all other users
        },
    }
}