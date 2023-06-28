import Image from "next/image"
import Link from "next/link"
import { DollarSign, Plus } from "lucide-react"

import { CardProps } from "@/types/card"

import { Button } from "./ui/button"

const CategoryCard = ({ product }: CardProps) => {
  const productData = product.attributes
  let productImgUrl
  if (product.attributes.imagen.data.attributes.formats.medium) {
    productImgUrl = product.attributes.imagen.data.attributes.formats.medium.url
  } else {
    productImgUrl = product.attributes.imagen.data.attributes.formats.small.url
  }
  console.log(productImgUrl)
  return (
    <article className="w-full text-card relative max-w-[355px] flex flex-col justify-between gap-[75px] rounded-[1.5rem] py-5 px-3 after:absolute after:rounded-[1.5rem] after:inset-0 after:z-10 after:bg-gradient-to-b after:from-transparent after:to-black/90 dark:text-white">
      <Image
        src={productImgUrl ? productImgUrl : "https://picsum.photos/200/300"}
        alt="animales"
        fill
        className="-z-10 rounded-[1.5rem] object-cover object-center"
        sizes="(max-width: 768px) 100vw"
      />

      <h5 className="z-20 w-8/12 text-xl font-bold">{productData.titulo}</h5>
      <div className="z-20 flex justify-between">
        <div className="flex flex-col">
          <p className="flex items-center text-sm">${productData.precio}</p>
          <Link
            href={`/${product.id}`}
            className="text-sm text-[hsl(181,43%,60%)]"
          >
            ver más
          </Link>
        </div>
        <Button
          variant="secondary"
          className="h-10 w-10 items-center justify-center self-end rounded-full border border-border"
        >
          <Plus className="h-5 w-5 shrink-0 rounded-full" />
        </Button>
      </div>
    </article>
  )
}

export default CategoryCard
