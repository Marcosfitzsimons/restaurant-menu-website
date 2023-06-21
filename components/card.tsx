import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"

const Card = () => {
  return (
    <article className="shrink-0 text-background w-60 relative flex flex-col justify-between gap-20 rounded-[0.5rem] p-3 after:absolute after:rounded-[0.5rem] after:inset-0 after:z-10 after:bg-gradient-to-b after:from-transparent after:to-black/70 ">
      <Image
        src="/images/burger.jpg"
        alt="animales"
        fill
        className="-z-10 rounded-[0.5rem] object-cover object-center"
        sizes="(max-width: 768px) 100vw"
      />

      <h5 className="z-20 w-8/12">Hamburguesa con queso</h5>
      <div className="z-20 flex justify-between">
        <div className="flex flex-col">
          <p className="">$2000</p>
          <Link href="/" className="text-sm">
            ver más
          </Link>
        </div>
        <Button>+</Button>
      </div>
    </article>
  )
}

export default Card
