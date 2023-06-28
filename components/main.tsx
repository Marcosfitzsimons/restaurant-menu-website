import Categories from "./categories"
import MostSold from "./most-sold"
import Promos from "./promos"

const Main = () => {
  return (
    <main className="container flex flex-col gap-2 py-4">
      <h3 className="text-center text-lg font-semibold">Categorías</h3>
      <Categories />
      {/* @ts-expect-error Server Component */}
      <MostSold />
      {/* @ts-expect-error Server Component */}
      <Promos />
    </main>
  )
}

export default Main
