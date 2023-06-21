import React from "react"

import Card from "./card"

const MostSold = () => {
  return (
    <section className="flex flex-col gap-2">
      <h4>Lo más pedido</h4>
      <div className="flex items-center gap-2 overflow-x-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default MostSold
