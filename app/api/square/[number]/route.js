import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { number } = params;
  const square = number * number;
  return NextResponse.json(
    {
      square: square,
    },
    {
      status: 200,
    }
  );
}
