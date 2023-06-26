import { ReactNode } from "react"

import SearchBar from "./search-bar"
import { Separator } from "./ui/separator"

type FormWrapperProps = {
  title: string
  placeholder: string
  children: ReactNode
}

const CategoryWrapper = ({
  placeholder,
  title,
  children,
}: FormWrapperProps) => {
  return (
    <div className="my-2 flex flex-col gap-3">
      <h2 className="text-center text-lg font-semibold">{title}</h2>
      <SearchBar placeholder={placeholder} />

      {children}
    </div>
  )
}

export default CategoryWrapper
