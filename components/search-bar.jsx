import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  return (
    <div className="mb-8 flex gap-4 items-center">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#596780]" size={20} />
        <Input placeholder="Search for a car" className="pl-10 bg-[#f3f5f7] border-none h-12" />
      </div>
      <Button className="bg-[#3563e9] hover:bg-[#3563e9]/90 h-12 px-6">Search</Button>
    </div>
  )
}

