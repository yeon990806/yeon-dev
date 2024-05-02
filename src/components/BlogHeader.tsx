'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import HeaderSearch from "./HeaderSearch"
import ThemeSwitch from "./ThemeSwitch"
import { MenuList } from "@/libs/consts"
import { cn } from "@/libs/utils"
import NavItem from "./common/NavItem"

const BlogHeader = () => {
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
            <NavItem
              pathTo={v.path}
              itemText={v.menuName}
              key={`blogheader-navItem-${i}`}
            />
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