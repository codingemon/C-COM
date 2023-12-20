import { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}): Promise<Element> {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}
