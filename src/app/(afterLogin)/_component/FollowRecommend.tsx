"use client";

import style from "./followRecommend.module.css";

export default function FollowRecommend() {
  const onFollow = () => {};

  // 가짜 데이터
  const user = {
    id: "JJbob",
    nickname: "깜다람쥐",
    image: "/jj.jpg",
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
