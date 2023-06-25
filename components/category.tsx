"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { CategoryItem } from "@/types/category"

interface CategoryProps {
  category: CategoryItem
}

const Category = ({ category }: CategoryProps) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <li className="flex flex-col items-center text-xs">
      <Link
        href={`/${category.text.toLowerCase()}`}
        className={`${
          pathname === `/${category.text.toLowerCase()}`
            ? "border-foreground bg-accent/50"
            : ""
        } flex h-12 w-12  items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-foreground hover:bg-accent/50`}
      >
        {category.icon}
      </Link>
      <span className="select-none">{category.text}</span>
    </li>
  )
}

export default Category
