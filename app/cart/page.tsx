import Link from "next/link"
import { useStore } from "@/src/store"
import { DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import BackButton from "@/components/back-button"
import ProductThumbnail from "@/components/product-thumbnail"

const CartPage = () => {
  return (
    <section className="container flex flex-col gap-8 py-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0">
          <BackButton />
        </div>
        <h1 className="text-center text-lg font-semibold">Mi pedido</h1>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <ProductThumbnail />
          <ProductThumbnail />
        </div>
        <Button asChild>
          <Link href="/">Añadir más</Link>
        </Button>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-lg">
          <p className="flex items-center gap-1 font-semibold">
            <span className="aspect-square w-3 animate-pulse rounded-full bg-accent" />
            Total:
          </p>

          <span className="flex items-center">
            <DollarSign className="relative top-[1.45px] h-4 w-4 text-accent" />
            4400
          </span>
        </div>
        <span className="text-xs">
          El precio es apróximado y puede variar. Por favor, consultar en caja.
        </span>
      </div>
    </section>
  )
}

export default CartPage
