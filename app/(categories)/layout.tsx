import Categories from "@/components/categories"
import SearchBar from "@/components/search-bar"

export default function CategoriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <div className="">
        <SearchBar />
        <Categories />
      </div>
      {children}
    </section>
  )
}
