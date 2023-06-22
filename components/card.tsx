import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "./ui/button"

const Card = () => {
  return (
    <article className="shrink-0 text-card w-60 relative flex flex-col justify-between gap-24 rounded-[1.5rem] py-5 px-3 after:absolute after:rounded-[1.5rem] after:inset-0 after:z-10 after:bg-gradient-to-b after:from-transparent after:to-black/90 dark:text-white">
      <Image
        src="/images/burger.jpg"
        alt="animales"
        fill
        className="-z-10 rounded-[1.5rem] object-cover object-center"
        sizes="(max-width: 768px) 100vw"
      />

      <h5 className="z-20 w-8/12 font-bold">Hamburguesa con queso</h5>
      <div className="z-20 flex justify-between">
        <div className="flex flex-col">
          <p className="">$2000</p>
          <Link href="/" className="text-sm text-white">
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

export default Card
