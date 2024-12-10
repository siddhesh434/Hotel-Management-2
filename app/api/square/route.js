import { NextResponse } from "next/server";

export async function GET(req) {
  // Parse the URL and extract the query parameters
  const { searchParams } = new URL(req.url);
  const num = searchParams.get("num");

  // Check if the number is valid
  if (!num || isNaN(num)) {
    return NextResponse.json(
      { error: "Invalid or missing number parameter" },
      { status: 400 }
    );
  }

  // Calculate the square of the number
  const number = parseFloat(num);
  const square = number * number;

  // Return the result as a JSON response
  return NextResponse.json({ number, square }, { status: 200 });
}
