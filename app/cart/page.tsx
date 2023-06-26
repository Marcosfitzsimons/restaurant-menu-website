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
        <Button>Añadir más</Button>
      </div>

      <div className="flex flex-col">
        <p>Total: $ 4400</p>
        <span className="text-xs">
          El precio es apróximado y puede variar. Por favor, consultar en caja.
        </span>
      </div>
    </section>
  )
}

export default CartPage
