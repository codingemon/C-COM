import { auth } from "./auth";
import { NextResponse } from "next/server";

// 세션이 없으면 로그인으로 넘어가게
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
