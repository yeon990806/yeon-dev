import PageHeader from "@/components/PageTitle"
import { getAllPosts } from "@/libs/functions"

const BlogPage = async () => {
  const postList = await getAllPosts()
  
  return (
    <main>
      <PageHeader
        title="Blog"
        desc="개발 수기, 오늘 공부한 내용, 리포트등을 기록합니다."
      />
    </main>
  )
}
export default BlogPage