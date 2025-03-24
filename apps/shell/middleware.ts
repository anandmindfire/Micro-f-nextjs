import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Forward requests to remote1
  if (pathname.startsWith('/remote1')) {
    return NextResponse.rewrite(new URL('http://localhost:3001' + pathname))
  }

  // Forward requests to remote2
  if (pathname.startsWith('/remote2')) {
    return NextResponse.rewrite(new URL('http://localhost:3002' + pathname))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/remote1/:path*', '/remote2/:path*']
} 