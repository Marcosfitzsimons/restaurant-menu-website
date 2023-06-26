import { categoriesItems } from "@/lib/categoriesItems"

import Category from "./category"
import { Separator } from "./ui/separator"

const Categories = () => {
  return (
    <section className="flex flex-col">
      <ul className="flex items-center justify-center gap-2 overflow-x-auto py-2">
        {categoriesItems.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
      <Separator className="mt-3 w-5 self-center" />
    </section>
  )
}

export default Categories
