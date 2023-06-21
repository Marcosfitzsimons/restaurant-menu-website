import React from "react"
import { Minus, Plus } from "lucide-react"

const ProductCount = () => {
  return (
    <div className="relative flex items-center justify-around rounded-md border border-border bg-card p-3 md:w-[35%] md:p-4 ">
      <Minus className="absolute left-4 h-5 w-5 cursor-pointer text-accent" />
      <p className="select-none font-bold">{1}</p>
      <Plus className="absolute right-4 h-5 w-5 cursor-pointer text-accent" />
    </div>
  )
}

export default ProductCount
