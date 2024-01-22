export { auth as middleware } from "./auth";
// auth가 알아서 관리해줌

// 미들웨어 적용 목록
export const config = {
  matcher: ["./compose/tweet", "/home", "/explore", "/messages", "/search"],
};
