import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Hero from "@/components/hero"
import Main from "@/components/main"

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <Main />
    </div>
  )
}
