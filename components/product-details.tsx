import React from "react"
import Image from "next/image"
import { Clock, DollarSign } from "lucide-react"
import { ProductDetails } from "@/types/product-details"

import { Button } from "./ui/button"

async function getSingleProductData(id: number) {
  const res = await fetch(`https://restaurant-menu-strapi-production.up.railway.app/api/products/${id}?populate=*`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  const data = res.json()
  return data
}

const ProductDetails = async ({ params }: any) => {
  const data = await getSingleProductData(params.id)
  const productData: ProductDetails = data.data.attributes
  let productImgUrl
  if (productData.imagen.data.attributes.formats.medium) {
    productImgUrl = productData.imagen.data.attributes.formats.medium.url
  } else if (productData.imagen.data.attributes.formats.small) {
    productImgUrl = productData.imagen.data.attributes.formats.small.url
  } else {
    productData.imagen.data.attributes.formats.thumbnail.url
  }
  return (
    <section className="mt-4 flex flex-col gap-2">
      <h1 className="text-lg font-bold">{productData.titulo}</h1>

      <div className="relative h-80 w-full rounded-[1.5rem]  after:absolute after:inset-0 after:z-10 after:rounded-[1.5rem] after:bg-gradient-to-b after:from-transparent after:to-black/40">
        <Image
          src={productImgUrl}
          alt="hamburguesa"
          fill
          className="rounded-[1.5rem] object-cover object-center "
        />
      </div>

      <div className="flex items-center justify-between">
        {productData.descripcion ? (
          <h2 className="flex items-center gap-[2px] text-lg font-semibold">
            Descripción
          </h2>
        ) : (
          ""
        )}

        <p className="flex items-center gap-[3px] text-sm">
          <Clock className="h-[15px] w-[15px] text-accent" />{" "}
          {productData.tiempo} min{" "}
          <span className="text-xs text-accent">(apróx)</span>
        </p>
      </div>

      {productData.descripcion ? (
        <p className="text-card-foreground">{productData.descripcion}</p>
      ) : (
        ""
      )}

      <h3 className="flex items-center gap-1 py-4">
        <span className="font-semibold">Precio:</span>{" "}
        <span className="flex items-center">
          <DollarSign className="relative top-[1.4px] h-4 w-4 text-accent" />
          {productData.precio}
        </span>
      </h3>

      <form className="flex w-full flex-col gap-2 ">
        <Button className="w-full rounded-[2.2rem]">Agregar a mi pedido</Button>
      </form>
    </section>
  )
}

export default ProductDetails
