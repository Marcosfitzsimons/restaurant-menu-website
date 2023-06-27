import { Product } from "@/types/product";
import { create } from "zustand"

interface CounterState {
    cart: Product[]
}

export const useStore = create<CounterState>((set) => ({
    cart: []
}))