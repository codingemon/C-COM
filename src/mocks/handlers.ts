import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const User = [
  { id: "jjbob", nickname: "깜다람쥐", image: "/jj.jpg" },
  { id: "pikacoding", nickname: "피카코딩", image: "/pukacoding.jpeg" },
  { id: "fuku", nickname: "푸쿠링", image: faker.image.avatar() },
];

export const handlers = [
  // 로그인
  http.post("/api/login", () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: "피카코딩",
        id: "pikacoding",
        image: "/pikacoding.jpeg",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),
  // 로그아웃
  http.post("/api/logout", () => {
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.post("/api/users", async ({ request }) => {
    // console.log("회원가입");
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.get("/api/postRecommend/", ({ request }) => {
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} 다람쥐에 세계는 철학적이면 과학적인 논점에서 벗어난 세계이다.`,
        Image: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} 다람쥐에 세계는 철학적이면 과학적인 논점에서 벗어난 세계이다.`,
        Image: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} 다람쥐에 세계는 철학적이면 과학적인 논점에서 벗어난 세계이다.`,
        Image: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} 다람쥐에 세계는 철학적이면 과학적인 논점에서 벗어난 세계이다.`,
        Image: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
];
