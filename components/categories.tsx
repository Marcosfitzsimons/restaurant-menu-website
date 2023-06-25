import { categoriesItems } from "@/lib/categoriesItems"

import Category from "./category"

const Categories = () => {
  return (
    <section className="flex flex-col">
      <h3 className="mb-2 text-center font-semibold">Categorías</h3>
      <ul className="flex items-center justify-center gap-2 overflow-x-auto py-2">
        {categoriesItems.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
    </section>
  )
}

export default Categories
