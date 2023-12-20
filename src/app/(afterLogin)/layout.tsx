import { ReactNode } from "react";

export default function AfterLogin({
  children,
}: {
  children: ReactNode;
}): Promise<Element> {
  return (
    <div>
      {/* 로그인 후에 레이아웃을 해줄거임 */}
      에프터로그인레이아웃
      {children}
    </div>
  );
}
