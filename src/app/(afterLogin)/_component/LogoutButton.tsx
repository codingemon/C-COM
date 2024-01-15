"use client";

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    // 임시
    id: "pikacoding",
    nickname: "피카코딩",
    image: "/pikacoding.jpeg",
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
