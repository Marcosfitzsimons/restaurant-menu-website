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
        className={`relative rounded-full after:absolute after:pointer-events-none after:inset-px after:rounded-full after:shadow-highlight after:shadow-gray-300/20 after:transition focus-within:after:shadow-accent transition-colors dark:after:shadow-highlight dark:after:shadow-accent/20 dark:focus-within:after:shadow-accent  ${
          pathname === `/${category.text.toLowerCase()}`
            ? "after:shadow-accent bg-accent/50 dark:after:shadow-accent"
            : "after:shadow-gray-300/20 bg-card hover:bg-accent/50 hover:after:shadow-accent"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f1f4f7]/20 dark:shadow-black/10 dark:shadow-input dark:border-[#f1f4f7]/20">
          {category.icon}
        </span>
      </Link>
      <span className="select-none">{category.text}</span>
    </li>
  )
}

export default Category
