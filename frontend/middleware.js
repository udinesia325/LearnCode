import { hasCookie } from "cookies-next";
import { NextResponse } from "next/server";

export function middleware(req) {
    if (req.cookies.has("SECRET")) {
        return NextResponse.next()
    }
    return NextResponse.redirect(`${req.nextUrl.origin}/login`)
}

export const config = {
    matcher: "/admin/:path*"
}
