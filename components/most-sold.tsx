import { Product } from "@/types/product"
import { siteConfig } from "@/config/site"

import Card from "./card"

async function getMostSoldData() {
  const res = await fetch(siteConfig.endPoints.getPopulars.url)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  const data = res.json()
  return data
}

const MostSold = async () => {
  const data = await getMostSoldData()
  console.log(data.data)
  const mostSoldProducts: Product[] = data.data
  return (
    <section className="flex flex-col gap-2">
      <h4 className="mb-1 mt-3 font-semibold">Lo más pedido</h4>
      <div className="flex gap-2 overflow-x-auto">
        {mostSoldProducts.length > 0
          ? mostSoldProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : ""}
      </div>
    </section>
  )
}

export default MostSold
