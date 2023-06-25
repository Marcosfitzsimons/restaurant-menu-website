import Hero from "@/components/hero"
import Main from "@/components/main"

// async function getData() {
//   const res = await fetch("http://127.0.0.1:1337/api/products?populate=*")
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data")
//   }

//   return res.json()
// }

export default async function IndexPage() {
  // const data = await getData()
  // console.log(data.data[0].attributes)

  // const mostSoldProducts = data.data.filter(
  //   (product: any) => product.attributes.popular === true
  // )

  return (
    <div>
      <Hero />
      <Main />
    </div>
  )
}
