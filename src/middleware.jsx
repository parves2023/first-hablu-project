import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.redirect(new URL('/registration', request.url));
}

export const config = {
  matcher: '/class/:path*',
}
