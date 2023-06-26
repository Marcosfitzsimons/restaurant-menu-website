import { Product } from "@/types/product"
import { siteConfig } from "@/config/site"
import CategoryCard from "@/components/category-card"
import CategoryWrapper from "@/components/category-wrapper"

async function getCategoryData() {
  const res = await fetch(`${siteConfig.endPoints.getCategory.url}Promos`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  const data = res.json()
  return data
}

const PromosPage = async () => {
  const data = await getCategoryData()
  const productsData: Product[] = data.data
  return (
    <CategoryWrapper
      title="Promos"
      placeholder="ej. Café con leche y dos medialunas"
    >
      <div className="flex w-full flex-col items-center gap-2">
        {productsData.length > 0 ? (
          productsData.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles en la categoría seleccionada.</p>
        )}
      </div>
    </CategoryWrapper>
  )
}

export default PromosPage
