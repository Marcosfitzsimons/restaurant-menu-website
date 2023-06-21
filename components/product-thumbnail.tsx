import React from "react"
import Image from "next/image"

import ProductCount from "./product-count"

const ProductThumbnail = () => {
  return (
    <article className="flex gap-2">
      <div className="relative h-28 w-28">
        <Image
          src="/images/burger.jpg"
          alt="hamburguesa"
          fill
          className="rounded-[1.5rem] object-cover object-center"
        />
      </div>
      <div className="">
        <h2>Hamburguesa con queso</h2>
        <p>$2000</p>
        {/* change */}
        <ProductCount />
      </div>
      <div className="self-center">X</div>
    </article>
  )
}

export default ProductThumbnail
