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
      <div className="mb-1 mt-3 flex w-full items-center justify-between ">
        <h4 className="font-semibold">Lo más pedido</h4>
        <button className="self-end text-sm text-accent">Ver todos</button>
      </div>
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
