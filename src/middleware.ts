import {
  getSessionOnEdge,
  redirectToLogin,
  shouldByPassMiddleware,
} from "@frontegg/nextjs/edge";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (
  request: NextRequest
): Promise<NextResponse> => {
  const pathname = request.nextUrl.pathname;

  if (shouldByPassMiddleware(pathname)) {
    return NextResponse.next();
  }

  const session = await getSessionOnEdge(request);

  if (!session) {
    return redirectToLogin(pathname);
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/(.*)",
};
