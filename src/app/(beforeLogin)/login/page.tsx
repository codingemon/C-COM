import { redirect } from "next/navigation";

export default function Login(): void {
  // url을 사용했더니 오류가 발생해서 url 제거
  // redirect(url : "/i/flow/login");
  redirect("/i/flow/login");
}
