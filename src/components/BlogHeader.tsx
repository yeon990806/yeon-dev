'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import HeaderSearch from "./HeaderSearch"
import ThemeSwitch from "./ThemeSwitch"
import { MenuList } from "@/libs/consts"
import { cn } from "@/libs/utils"

const BlogHeader = () => {
  const pathname = usePathname()

  const isCurrentMenu = (currentPath: string) => {
    if (currentPath === '/') return pathname === currentPath;

    return pathname!.startsWith(currentPath);
  };

  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="inline-flex items-center gap-1 text-primary">
          &lt;
          <span>
            <strong>
              YeON
            </strong>
            .dev
          </span>
          &gt;
        </Link>
        <div className="inline-flex items-center gap-6 text-light-gray800 dark:text-dark-gray800">
          { MenuList.map((v, i) => (
            <Link
              href={v.path}
              key={`blogheader-${i}`}
              className={cn(`rounded p-2 hover:bg-light-gray200 dark:hover:bg-dark-gray200 transition ease-in-out delay-100 duration-300 ${isCurrentMenu(v.path) ? 'text-blue300' : ''}`)}
            >
              {v.menuName}
            </Link>
          )) }
        </div>
      </div>
      <div className="inline-flex items-center gap-2">
        <ThemeSwitch />
        <HeaderSearch />
      </div>
    </header>
  )
}
export default BlogHeader