import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = true;
  if (isLogin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// export const config = {
//     matcher: [
//         "/",
//         "/about",
//         "/team",
//         "/contact",
//     ],
// };
