import { sync } from "glob"
import path from "path"

const BASE_PATH = '/posts'
const POST_PATH = path.join(process.cwd(), BASE_PATH)

export const getAllPosts = () => {
  const postPath: string[] = sync(`${POST_PATH}/**/*.mdx`)
  return postPath.map(path => ({
    slug: path.slice(path.indexOf(BASE_PATH)).replace('.mdx', '')
  }))
}