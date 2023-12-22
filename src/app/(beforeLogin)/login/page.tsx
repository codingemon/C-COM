"use client";

// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Main from "../_component/\bMain";

export default function Login() {
  // url을 사용했더니 오류가 발생해서 url 제거
  // redirect(url : "/i/flow/login");
  // redirect("/i/flow/login");
  const router = useRouter();
  router.replace("/i/flow/login");
  return (
    // 배경을 똑같이 깔아줘서 해결
    <Main />
  );
}

// router.push
// 뒤로 보내서 무한반복이 되버림
// localhost:3000/ login -> localhost:3000/login -> localhost:3000/i/flow/login

// router.replace
// 이동 후 이전 히스토리를 없애버림 무한루프(x)
// localhost:3000/ login -> localhost:3000/login -> localhost:3000/i/flow/login
