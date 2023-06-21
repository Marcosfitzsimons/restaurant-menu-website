import BackButton from "@/components/back-button"
import ProductDetails from "@/components/product-details"

const CartPage = () => {
  return (
    <div className="container flex flex-col gap-2 py-4">
      <BackButton />
      <ProductDetails />
    </div>
  )
}

export default CartPage
