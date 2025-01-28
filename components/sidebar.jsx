"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const types = [
  { id: "sport", label: "Sport", count: 10 },
  { id: "suv", label: "SUV", count: 12 },
  { id: "mpv", label: "MPV", count: 16 },
  { id: "sedan", label: "Sedan", count: 20 },
  { id: "coupe", label: "Coupe", count: 14 },
  { id: "hatchback", label: "Hatchback", count: 14 },
]

const capacities = [
  { id: "2", label: "2 Person", count: 10 },
  { id: "4", label: "4 Person", count: 14 },
  { id: "6", label: "6 Person", count: 12 },
  { id: "8", label: "8 or More", count: 16 },
]

export default function Sidebar({ filters, setFilters }) {
  const handleTypeChange = (typeId) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type.includes(typeId) ? prev.type.filter((id) => id !== typeId) : [...prev.type, typeId],
    }))
  }

  const handleCapacityChange = (capacityId) => {
    setFilters((prev) => ({
      ...prev,
      capacity: prev.capacity.includes(capacityId)
        ? prev.capacity.filter((id) => id !== capacityId)
        : [...prev.capacity, capacityId],
    }))
  }

  return (
    <div className="md:w-64 mb-8 md:mb-0">
      <div className="bg-white rounded-[10px] p-4">
        <div className="space-y-6">
          {/* Type Section */}
          <div>
            <h3 className="font-semibold mb-4">TYPE</h3>
            <div className="space-y-4">
              {types.map((type) => (
                <div key={type.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id={type.id}
                      checked={filters.type.includes(type.id)}
                      onCheckedChange={() => handleTypeChange(type.id)}
                      className="border-[#90A3BF] data-[state=checked]:bg-[#3563E9] data-[state=checked]:border-[#3563E9]"
                    />
                    <Label htmlFor={type.id} className="text-sm text-[#596780]">{type.label}</Label>
                  </div>
                  <span className="text-sm text-[#90A3BF]">{type.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capacity Section */}
          <div>
            <h3 className="font-semibold mb-4">CAPACITY</h3>
            <div className="space-y-4">
              {capacities.map((capacity) => (
                <div key={capacity.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id={capacity.id}
                      checked={filters.capacity.includes(capacity.id)}
                      onCheckedChange={() => handleCapacityChange(capacity.id)}
                      className="border-[#90A3BF] data-[state=checked]:bg-[#3563E9] data-[state=checked]:border-[#3563E9]"
                    />
                    <Label htmlFor={capacity.id} className="text-sm text-[#596780]">{capacity.label}</Label>
                  </div>
                  <span className="text-sm text-[#90A3BF]">{capacity.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Section */}
          <div>
            <h3 className="font-semibold mb-4">PRICE</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-[#90A3BF]">
                <span>Max. ${filters.price}</span>
              </div>
              <Slider
                value={[filters.price]}
                onValueChange={([value]) => setFilters((prev) => ({ ...prev, price: value }))}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-[#3563E9]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
