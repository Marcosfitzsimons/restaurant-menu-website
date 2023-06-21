import React from "react"
import Image from "next/image"
import { ChefHat, Clock, DollarSign } from "lucide-react"

import ProductCount from "./product-count"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const ProductDetails = () => {
  return (
    <section className="mt-4 flex flex-col gap-3">
      <h1 className="text-lg font-bold">Hamburguesa con queso</h1>

      <div className="relative h-80 w-full rounded-[1.5rem]">
        <Image
          src="/images/burger.jpg"
          alt="hamburguesa"
          fill
          className="rounded-[1.5rem] object-cover object-center "
        />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-[2px]">
          <ChefHat className="h-4 w-4 text-accent" />
          Ingredientes
        </h2>
        <p className="flex items-center gap-[3px] text-sm">
          <Clock className="h-[15px] w-[15px] text-accent" /> 20 min{" "}
          <span className="text-xs text-accent">(apróx)</span>
        </p>
      </div>

      <ul className="flex flex-wrap items-center gap-1">
        <li className="px-2 py-[.2rem] select-none shadow-sm shadow-black/30 shrink-0  rounded-md text-sm bg-accent/50">
          Carne
        </li>
        <li className="px-2 py-[.2rem] select-none shadow-sm shadow-black/30 shrink-0  rounded-md text-sm bg-accent/50">
          Queso
        </li>
        <li className="px-2 py-[.2rem] select-none shadow-sm shadow-black/30 shrink-0  rounded-md text-sm bg-accent/50">
          Pan de hamburguesa
        </li>
        <li className="px-2 py-[.2rem] select-none shadow-sm shadow-black/30 shrink-0  rounded-md text-sm bg-accent/50">
          Huevo
        </li>
        <li className="px-2 py-[.2rem] select-none shadow-sm shadow-black/30 shrink-0  rounded-md text-sm bg-accent/50">
          Tomate
        </li>
        <li className="px-2 py-[.2rem] select-none shadow-sm shadow-black/30 shrink-0  rounded-md text-sm bg-accent/50">
          Lechuga
        </li>
      </ul>

      <h3 className="flex items-center gap-[2px]">
        <DollarSign className="h-4 w-4 text-accent" />
        Precio: $2000
      </h3>

      <form className="flex w-full flex-col gap-2 ">
        <ProductCount />
        <Button className="w-full rounded-[2.2rem]">Agregar a mi pedido</Button>
      </form>
    </section>
  )
}

export default ProductDetails
