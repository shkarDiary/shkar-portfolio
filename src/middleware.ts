import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
export default async function middleware(
  req: NextRequest
): Promise<NextResponse> {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("email"); // Replace with your cookie name
  console.log(authCookie?.value);
  const email = authCookie?.value === "shkar@email.com";
  console.log(email);
  // If the route requires authentication and the cookie is missing, redirect
  if (!authCookie && !email && req.nextUrl.pathname.startsWith("/AddWork")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Optionally, validate the cookie with your backend server for added security
  // (This would involve an API call to verify the cookie)

  return NextResponse.next(); // Allow the request to proceed
}
