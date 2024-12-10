import { NextResponse } from "next/server";

const users = [
  {
    email: "ho@gmail.com",
    password: "hi",
  },
];

export async function POST(req) {
  const request = await req.json();
  console.log(request, "hello World", users[0]);

  // Compare individual fields instead of objects
  const user = users.find(
    (user) => user.email === request.email && user.password === request.password
  );

  if (user) {
    return NextResponse.json(
      {
        square: 5,
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        error: "Invalid email or password",
      },
      {
        status: 401, // It's a good idea to return a proper status code for authentication failures
      }
    );
  }
}
