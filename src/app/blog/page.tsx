import Input from "@/components/Input"
import PageHeader from "@/components/PageTitle"
import { IoSearch } from "react-icons/io5";
import { getAllPosts } from "@/libs/functions"
import { useState } from "react";

const BlogPage = async () => {
  const postList = await getAllPosts()
  const [searchValue, setSearchValue] = useState<string>('')
  
  return (
    <main>
      <PageHeader
        title="Blog"
        desc="개발 수기, 오늘 공부한 내용, 리포트등을 기록합니다."
        additionalElem={
          <Input
            value={searchValue}
            inputFn={setSearchValue}
            icon={<IoSearch />}
          />
        }
      />
    </main>
  )
}
export default BlogPage