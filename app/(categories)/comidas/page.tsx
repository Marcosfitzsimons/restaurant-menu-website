import EmpanadasCategory from "@/components/categories/empanadas-category"
import HamburgersCategory from "@/components/categories/hamburgers-category"
import PanchosCategory from "@/components/categories/panchos-category"
import PizzasCategory from "@/components/categories/pizzas-category"
import SaladsCategory from "@/components/categories/salads-category"
import SandwichesECategory from "@/components/categories/sandwiches-e-category"
import SandwichesTCategory from "@/components/categories/sandwiches-t-category"
import CategoryWrapper from "@/components/category-wrapper"

const ComidasPage = async () => {
  return (
    <CategoryWrapper title="Comidas" placeholder="ej. Hamburguesa completa">
      <div className="flex flex-col gap-1">
        <HamburgersCategory />
        <PizzasCategory />
        <SandwichesTCategory />
        <SandwichesECategory />
        <EmpanadasCategory />
        <SaladsCategory />
        <PanchosCategory />
      </div>
    </CategoryWrapper>
  )
}

export default ComidasPage
