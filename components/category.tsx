"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { CategoryItem } from "@/types/category"

interface CategoryProps {
  category: CategoryItem
}

const Category = ({ category }: CategoryProps) => {
  const pathname = usePathname()
  return (
    <li className="flex flex-col items-center text-xs">
      <Link
        href={`/${category.text.toLowerCase()}`}
        className={`flex h-12 w-12  items-center justify-center rounded-full border transition-colors hover:border-foreground hover:bg-accent/50 ${
          pathname === `/${category.text.toLowerCase()}`
            ? "border-foreground bg-accent/50"
            : "border-border bg-card"
        }`}
      >
        {category.icon}
      </Link>
      <span className="select-none">{category.text}</span>
    </li>
  )
}

export default Category
