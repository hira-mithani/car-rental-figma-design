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
    <div className="w-full lg:w-64 space-y-8 bg-white p-6 rounded-lg h-fit">
      <div>
        <h3 className="text-sm font-semibold mb-4">TYPE</h3>
        <div className="space-y-4">
          {types.map(({ id, label, count }) => (
            <div key={id} className="flex items-center gap-2">
              <Checkbox id={id} checked={filters.type.includes(id)} onCheckedChange={() => handleTypeChange(id)} />
              <Label htmlFor={id} className="flex-1">
                {label} <span className="text-gray-500">({count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">CAPACITY</h3>
        <div className="space-y-4">
          {capacities.map(({ id, label, count }) => (
            <div key={id} className="flex items-center gap-2">
              <Checkbox
                id={`capacity-${id}`}
                checked={filters.capacity.includes(id)}
                onCheckedChange={() => handleCapacityChange(id)}
              />
              <Label htmlFor={`capacity-${id}`} className="flex-1">
                {label} <span className="text-gray-500">({count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">PRICE</h3>
        <Slider
          value={[filters.price]}
          max={100}
          step={1}
          className="w-full"
          onValueChange={([value]) => setFilters((prev) => ({ ...prev, price: value }))}
        />
        <p className="mt-2 text-sm">Max. ${filters.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

