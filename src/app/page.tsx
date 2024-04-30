import IntroMyProfile from "@/components/IntroMyProfile";
import PostList from "@/components/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <IntroMyProfile />
      <PostList
        title="Featured Post"
        postList={[]}
        id="featured-list"
      />
    </main>
  );
}
