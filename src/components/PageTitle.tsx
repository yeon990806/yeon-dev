import { ReactNode } from "react"

interface PageHeaderProps {
  title: ReactNode
  desc: ReactNode
  additionalElem?: ReactNode
}

const PageHeader = ({
  title,
  desc,
  additionalElem
}: PageHeaderProps) => {
  return (
    <header className="py-4 flex">
      <div>
        <h1 className="text-xl font-semibold text-light-gray800 dark:text-dark-gray800">
          {title}
        </h1>
        <p className="mt-3 text-md font-medium texxt-light-gray600 dark:text-dark-gray600">
          {desc}
        </p>
      </div>
      { additionalElem && <div>
        
      </div> }
    </header>
  )
}
export default PageHeader