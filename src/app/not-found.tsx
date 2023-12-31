import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>페이지가 존재하지 않아요. 다른 페이지를 검색해 보세요</div>
      <Link href="/search">검색</Link>
    </div>
  );
};

export default NotFound;
