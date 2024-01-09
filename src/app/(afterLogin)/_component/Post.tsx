import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
// fromNow를 쓰게하는 플로그인
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionBottons from "./ActionButtons";
import PostAricle from "./PostAricle";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: "jjbob",
      nickname: "깜다람쥐",
      image: "/jj.jpg",
    },
    content: "크아 종밥이들 다 모여라 서열정리하게",
    createdAt: new Date(),
    Images: [],
  };
  return (
    // 전체를 클라이언트 컴포넌트로 만들어주기 좋지 않아서
    // PostAricle 일부분만 클라이언트 컴포넌트로 만들어줬다.
    <PostAricle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          <ActionBottons />
        </div>
      </div>
    </PostAricle>
  );
}
