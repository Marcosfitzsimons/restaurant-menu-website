import React from "react"
import Link from "next/link"
import { ClipboardSignature, LayoutList, ShoppingCart } from "lucide-react"

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
                <LayoutList className="h-[19px] w-[19px] text-slate-200 dark:text-background" />
                <span className="absolute -right-[2px] top-[1px] flex h-3 w-3 items-center justify-center rounded-full bg-accent text-[8px] text-white ">
                  2
                </span>
                <span className="absolute -top-[15.5px] w-16 text-center rounded-md bg-card text-[9px] px-1 font-bold uppercase">
                  Mi pedido
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
