import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const BackButton = () => {
  return (
    <div className="relative after:absolute after:pointer-events-none after:inset-px after:rounded-full after:shadow-highlight after:shadow-gray-300/20 after:transition focus-within:after:shadow-accent dark:after:shadow-highlight dark:after:shadow-accent/20 dark:focus-within:after:shadow-accent">
      <Link
        href="/"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-[#f1f4f7]/20 dark:shadow-black/10 dark:shadow-input dark:border-[#f1f4f7]/20"
      >
        <ArrowLeft className="h-5 w-5 shrink-0 text-secondary-foreground" />
      </Link>
    </div>
  )
}

export default BackButton
