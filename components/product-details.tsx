import React from "react"
import Image from "next/image"
import { ChefHat, Clock, DollarSign } from "lucide-react"

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
        <li className="shadow-sm select-none shadow-black/30 bg-accent/50 shrink-0 px-2 pt-1 py-[.2rem] rounded-md text-sm">
          Carne
        </li>
        <li className="shadow-sm select-none shadow-black/30 bg-accent/50 shrink-0 px-2 pt-1 py-[.2rem] rounded-md text-sm">
          Queso
        </li>
        <li className="shadow-sm select-none shadow-black/30 bg-accent/50 shrink-0 px-2 pt-1 py-[.2rem] rounded-md text-sm">
          Pan de hamburguesa
        </li>
        <li className="shadow-sm select-none shadow-black/30 bg-accent/50 shrink-0 px-2 pt-1 py-[.2rem] rounded-md text-sm">
          Huevo
        </li>
        <li className="shadow-sm select-none shadow-black/30 bg-accent/50 shrink-0 px-2 pt-1 py-[.2rem] rounded-md text-sm">
          Tomate
        </li>
        <li className="shadow-sm select-none shadow-black/30 bg-accent/50 shrink-0 px-2 pt-1 py-[.2rem] rounded-md text-sm">
          Lechuga
        </li>
      </ul>

      <h3 className="flex items-center gap-[2px]">
        <DollarSign className="h-4 w-4 text-accent" />
        Precio: $2000
      </h3>

      <form className="flex w-full flex-col gap-2 ">
        <Input type="number" />
        <Button className="w-full rounded-[2.2rem]">Agregar a mi pedido</Button>
      </form>
    </section>
  )
}

export default ProductDetails
