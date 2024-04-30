import { PostType } from "@/libs/types"
import Post from "./Post"

interface PostListProps {
  title: string
  titlePosition?: 'left' | 'center' | 'right'
  postList: PostType[]
  id: string,
  onViewAll?: VoidFunction
}

const PostList = ({
  title,
  titlePosition,
  postList,
  id,
  onViewAll
}: PostListProps) => {
  return (
    <section className="pt-6">
      <h2 className={`font-semibold text-light-gray800 dark:text-dark-gray800 text-xl w-full text-${titlePosition || 'center'}`}>
        {title}
      </h2>
      { postList.length > 0 
        ? <ul className="mt-3">
            { postList.map((v, i) => (
              <li key={`postlist-${id}-${i}`}>
                <Post />
              </li>
            )) }
          </ul>
        : <div>
          
        </div> 
      }
      { onViewAll && <button>

      </button> }
    </section>
  )
}
export default PostList