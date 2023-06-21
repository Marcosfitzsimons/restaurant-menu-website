import React from "react"

import Card from "./card"

const MostSold = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="mb-1 mt-3 flex w-full items-center justify-between ">
        <h4 className="font-semibold">Lo más pedido</h4>
        <button className="self-end text-sm text-accent">Ver todos</button>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default MostSold
