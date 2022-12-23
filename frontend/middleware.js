import { NextResponse } from "next/server";

export function middleware(req) {
    NextResponse.next()
}

export const config = {
    matcher: "/admin/:path*"
}
