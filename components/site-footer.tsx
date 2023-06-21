import React from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const SiteFooter = () => {
  return (
    <footer className="fixed bottom-0 z-50 my-1 w-full">
      <div className="mx-auto w-[95%] rounded-[2.2rem] bg-background p-[6px]">
        <nav className="rounded-[2.2rem] bg-zinc-200/40 px-4 py-2 dark:bg-secondary">
          <ul className="flex w-full items-center justify-center">
            <li>
              <Link
                href="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/90 dark:bg-white"
              >
                <ShoppingCart className="h-4 w-4 text-slate-200 dark:text-background" />
                <span className="absolute -right-[2px] top-[1px] flex h-3 w-3 items-center justify-center rounded-full bg-accent text-[8px] text-white ">
                  2
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
