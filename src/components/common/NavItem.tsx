import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem ({
  pathTo,
  itemText
}: {
  pathTo: string
  itemText: string
}) {
  const pathname = usePathname();
  const isCurrentMenu = (currentPath: string) => {
    if (currentPath === '/') return pathname === currentPath;
  
    return pathname!.startsWith(currentPath);
  };

  return (
    <Link
      href={pathTo}
      className={cn(`rounded p-2 hover:bg-light-gray200 dark:hover:bg-dark-gray200 transition ease-in-out delay-100 duration-300 ${isCurrentMenu(pathTo) ? 'text-blue300' : ''}`)}
    >
      {itemText}
    </Link>
  );
}
