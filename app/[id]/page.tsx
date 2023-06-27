import BackButton from "@/components/back-button"
import ProductDetails from "@/components/product-details"

const SingleProductPage = ({ params }: any) => {
  return (
    <div className="container flex flex-col gap-2 py-4">
      <BackButton />
      {/* @ts-expect-error Server Component */}
      <ProductDetails params={params} />
    </div>
  )
}

export default SingleProductPage
