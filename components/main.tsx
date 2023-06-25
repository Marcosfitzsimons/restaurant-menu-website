import SearchBar from "@/components/search-bar"

import Categories from "./categories"
import MostSold from "./most-sold"

const Main = () => {
  return (
    <main className="container flex flex-col gap-2 py-4">
      <Categories />

      <MostSold />
    </main>
  )
}

export default Main
