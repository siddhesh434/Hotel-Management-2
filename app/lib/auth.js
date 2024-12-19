import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const NEXT_AUTH = {
    providers: [
        // Credentials provider (already present)
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "" },
                password: { label: "password", type: "password", placeholder: "" }
            },
            async authorize(credentials) {
                const user = await fetch(`${process.env.NEXTAUTH_URL}/api/all-users`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(res => res.json())
                    .then(data => {
                        return data.find(user => user.email === credentials.username && user.password === credentials.password);
                    })
                    .catch(err => console.log(err));

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
        // Google provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn(user, account, profile) {
            console.log("signIn", user, account, profile);
            const email = user.user?.email;

            // Deny sign-in for specific email
            if (email === "buddy@gmail.com") {
                console.log("Denied login for buddy@gmail.com");
                return false;
            }
            return true;
        },
    },
    database: process.env.DATABASE_URL,
};
