import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const res = new NextResponse("same");

  return res;
}
