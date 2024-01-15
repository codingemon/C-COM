import Home from "@/app/(afterLogin)/home/page";

// 슬러그들의 값을 params로 가져옴
type Props = {
  params: { username: string; id: string; photoId: string };
};

export default function Page({ params }: Props) {
  params.username;
  params.id;
  params.photoId;
  return <Home />;
}
