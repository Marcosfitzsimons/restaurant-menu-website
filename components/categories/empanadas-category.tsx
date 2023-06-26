import { Product } from "@/types/product"
import { siteConfig } from "@/config/site"

import Card from "../card"
import { Separator } from "../ui/separator"

async function getCategoryData() {
  const res = await fetch(`${siteConfig.endPoints.getCategory.url}Empanadas`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  const data = res.json()
  return data
}

const EmpanadasCategory = async () => {
  const data = await getCategoryData()
  const categoryData: Product[] = data.data
  return (
    <section className="flex flex-col gap-2">
      {categoryData.length > 0 && (
        <h3 className="text-lg font-semibold">Empanadas</h3>
      )}
      <div className="flex gap-2 overflow-x-auto">
        {categoryData.length > 0
          ? categoryData.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : ""}
      </div>
      {categoryData.length > 0 && (
        <Separator className="mt-2 w-4 self-center" />
      )}
    </section>
  )
}

export default EmpanadasCategory
