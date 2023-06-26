import React from "react"
import Image from "next/image"

import { Separator } from "./ui/separator"

const Hero = () => {
  return (
    <section className="relative grid w-full items-center pb-16 pt-6 after:absolute after:inset-0 after:z-10 after:bg-gradient-to-b after:from-transparent after:to-black/40">
      <Image
        src="/images/hero.webp"
        alt="animales"
        fill
        className="-z-10 object-cover"
        sizes="(max-width: 768px) 100vw"
      />
      <div className="flex max-w-[980px] flex-col items-center gap-14">
        <h1 className="z-20 rounded-md select-none border border-[#e1e7ef]/30  bg-accent/10 px-3 py-1   font-[700] font-serif text-white shadow-md backdrop-blur">
          Golfo Nuevo Confitería
        </h1>

        <h2 className="z-20 text-2xl font-extrabold leading-tight tracking-tighter text-white md:text-4xl">
          ¿Qué te gustaría ordenar?
        </h2>
      </div>
    </section>
  )
}

export default Hero
