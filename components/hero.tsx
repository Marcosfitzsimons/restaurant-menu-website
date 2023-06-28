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
        <div className="relative z-20 after:absolute after:pointer-events-none after:inset-px after:rounded-[7px] after:shadow-highlight after:shadow-white/30 dark:after:shadow-highlight dark:after:accent/20 after:transition focus-within:after:shadow-accent dark:focus-within:after:shadow-accent ">
          <h1 className="flex select-none items-center rounded-lg border border-[#e1e7ef]/20 bg-black/5 px-3 py-1 font-serif  text-white shadow-md shadow-black/50  backdrop-blur-md dark:bg-accent/5 dark:shadow-black/10 dark:shadow-input">
            Golfo Nuevo Confitería
          </h1>
        </div>

        <h2 className="z-20 text-2xl font-extrabold leading-tight tracking-tighter text-white md:text-4xl">
          ¿Qué te gustaría ordenar?
        </h2>
      </div>
    </section>
  )
}

export default Hero
