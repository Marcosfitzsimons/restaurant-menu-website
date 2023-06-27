import { Search } from "lucide-react"

import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface SearchBarProps {
  placeholder: string
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="grid w-full items-center gap-2">
      {/* <Label htmlFor="search">Busca por nombre</Label>*/}
      <div className="relative flex items-center">
        <Search className="absolute left-1.5 h-4" />
        <Input
          type="search"
          id="search"
          placeholder={placeholder}
          className="pl-[32px]"
        />
      </div>
    </div>
  )
}

export default SearchBar
