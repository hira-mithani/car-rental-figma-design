"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Users, Gauge, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    category: "Sport",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20this.PNG-TFdNCZ8jLRY0VibuISv6beOjrbcjLS.png",
    specs: {
      fuel: "90L",
      transmission: "Manual",
      capacity: "2 People",
    },
    price: 99.0,
  },
  {
    id: 2,
    name: "Nissan GT-R",
    category: "Sport",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20this.PNG-TFdNCZ8jLRY0VibuISv6beOjrbcjLS.png",
    specs: {
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
    },
    price: 80.0,
    originalPrice: 100.0,
  },
  {
    id: 3,
    name: "Rolls-Royce",
    category: "Sport",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20this.PNG-TFdNCZ8jLRY0VibuISv6beOjrbcjLS.png",
    specs: {
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    price: 96.0,
  },
  {
    id: 4,
    name: "All New Rush",
    category: "SUV",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20this.PNG-TFdNCZ8jLRY0VibuISv6beOjrbcjLS.png",
    specs: {
      fuel: "70L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 72.0,
  },
  {
    id: 5,
    name: "CR - V",
    category: "SUV",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20this.PNG-TFdNCZ8jLRY0VibuISv6beOjrbcjLS.png",
    specs: {
      fuel: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.0,
  },
  {
    id: 6,
    name: "All New Terios",
    category: "SUV",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add%20this.PNG-TFdNCZ8jLRY0VibuISv6beOjrbcjLS.png",
    specs: {
      fuel: "90L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 74.0,
  },
]

export default function CarGrid({ filters }) {
  const [favorites, setFavorites] = useState(new Set())

  const toggleFavorite = (carId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(carId)) {
        newFavorites.delete(carId)
      } else {
        newFavorites.add(carId)
      }
      return newFavorites
    })
  }

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      car.category.toLowerCase().includes(filters.search.toLowerCase())
    const matchesType =
      filters.type.length === 0 || filters.type.some((type) => car.category.toLowerCase().includes(type))
    const matchesCapacity =
      filters.capacity.length === 0 || filters.capacity.some((cap) => car.specs.capacity.includes(cap))
    const matchesPrice = car.price <= filters.price

    return matchesSearch && matchesType && matchesCapacity && matchesPrice
  })

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.category}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={favorites.has(car.id) ? "text-red-500" : "text-gray-500"}
                onClick={() => toggleFavorite(car.id)}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative h-40 mb-4">
              <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-contain" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                <span>{car.specs.fuel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>{car.specs.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{car.specs.capacity}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">${car.price.toFixed(2)}</span>
                <span className="text-gray-500">/day</span>
                {car.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">${car.originalPrice.toFixed(2)}</p>
                )}
              </div>
              <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90">Rent Now</Button>
            </div>
          </div>
        ))}
      </div>
      {filteredCars.length === 0 && (
        <div className="text-center py-8 text-gray-500">No cars found matching your criteria</div>
      )}
      {filteredCars.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Button className="bg-[#3563E9]">Show more cars</Button>
        </div>
      )}
    </div>
  )
}

