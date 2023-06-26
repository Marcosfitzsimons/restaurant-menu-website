import BackButton from "@/components/back-button"
import Categories from "@/components/categories"
import SearchBar from "@/components/search-bar"

export default function CategoriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="container relative flex min-h-screen flex-col py-6">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex flex-col gap-3">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0">
            <BackButton />
          </div>
          <h3 className="text-center text-lg font-semibold">Categorías</h3>
        </div>

        <Categories />
      </div>
      {children}
    </section>
  )
}
