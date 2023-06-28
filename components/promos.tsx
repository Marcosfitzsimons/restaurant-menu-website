import React from "react"

import { Product } from "@/types/product"
import { siteConfig } from "@/config/site"

import Card from "./card"

async function getCategoryData() {
  const res = await fetch(`${siteConfig.endPoints.getCategory.url}Promos`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  const data = res.json()
  return data
}

const Promos = async () => {
  const data = await getCategoryData()
  const promosList: Product[] = data.data
  return (
    <section className="flex flex-col gap-2">
      <div className="flex w-full items-center justify-between">
        <h4 className="font-semibold">Promos</h4>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {promosList.length > 0
          ? promosList.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : ""}
      </div>
    </section>
  )
}

export default Promos
