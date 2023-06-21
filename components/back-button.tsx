import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "./ui/button"

const BackButton = () => {
  return (
    <Link
      href="/"
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card"
    >
      <ArrowLeft className="h-5 w-5 shrink-0 text-secondary-foreground" />
    </Link>
  )
}

export default BackButton
