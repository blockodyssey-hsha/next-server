// middleware.ts
import { NextFetchEvent, NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/redirect")) {
        return NextResponse.redirect(new URL("/api/hi", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/rewrite")) {
        return NextResponse.rewrite(new URL("/api/hi", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/api/hi")) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-hello-from-middleware1", "hello456");
        // You can also set request headers in NextResponse.rewrite
        const response = NextResponse.next({
            request: { headers: requestHeaders },
        });
        // Set a new response header `x-hello-from-middleware2`
        response.headers.set("x-hello-from-middleware2", "hello123");
        return response;
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/redirect", "/rewrite", "/api/hi"],
};
