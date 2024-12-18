import { NextResponse } from "next/server"

const users = [
    {
        email: "jimmy@gmail.com",
        password: "jimmy",
        name: "Jimmy",
        id: 1
    },
    {
        email: "buddy@gmail.com",
        password: "buddy",
        name: "Buddy",
        id: 2
    },
    {
        email: "Sammy@gmail.com",
        password: "sammy",
        name: "Sammy",
        id: 3
    }

]


export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req) {
    const request = await req.json();
    users.push(request);
    return NextResponse.json(users);
}