import { CategoryItem } from "@/types/category"

interface CategoryProps {
  category: CategoryItem
}

const Category = ({ category }: CategoryProps) => {
  return (
    <li className="flex flex-col items-center gap-[2px] text-xs">
      <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full  border border-border transition-colors hover:border-foreground hover:bg-accent/50">
        {category.icon}
      </span>
      {category.text}
    </li>
  )
}

export default Category
