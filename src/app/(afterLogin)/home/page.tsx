import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";

export default function Home(): JSX.Element {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
