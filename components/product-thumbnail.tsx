import React from "react"
import Image from "next/image"
import Link from "next/link"
import { DollarSign, Eye, Trash, Trash2 } from "lucide-react"

import { Separator } from "./ui/separator"

const ProductThumbnail = () => {
  return (
    <>
      <article className="relative flex h-28 max-w-sm items-center gap-2  rounded-md rounded-l-3xl bg-card pr-1  text-card-foreground shadow-sm">
        <div className="relative h-28 w-28">
          <Image
            src="/images/burger.webp"
            alt="hamburguesa"
            fill
            className="rounded-[1.5rem] object-cover object-center"
            sizes="(max-width: 768px) 30vw"
          />
        </div>
        <div className="flex h-full flex-col justify-between py-1">
          <h2 className="w-10/12 font-semibold leading-5 text-foreground">
            Hamburguesa con queso
          </h2>

          <p className="flex items-center">
            <DollarSign className="relative top-[1.45px] h-4 w-4 text-accent" />
            {2000}
          </p>
        </div>
        <Trash2 className="absolute right-2 top-1 aspect-square w-4 cursor-pointer text-red-600" />
        <Link href="/1" className="absolute bottom-1 right-2">
          <Eye className="aspect-square w-4 text-accent" />
        </Link>
      </article>
      <Separator className="w-4 self-center" />
    </>
  )
}

export default ProductThumbnail
