import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Hero from "@/components/hero"

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <main className="container"></main>
    </div>
  )
}
