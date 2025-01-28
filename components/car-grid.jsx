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
    image: "/cars/Car.png",
    specs: {
      fuel: "90L",
      transmission: "Manual",
      capacity: "2 People",
    },
    price: 99.00,
  },
  {
    id: 2,
    name: "Nissan GT-R",
    category: "Sport",
    image: "/cars/Car 1.png",
    specs: {
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
    },
    price: 80.00,
    originalPrice: 100.00,
  },
  {
    id: 3,
    name: "Rolls-Royce",
    category: "Sport",
    image: "/cars/Car 2.png",
    specs: {
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
    },
    price: 96.00,
  },
  {
    id: 4,
    name: "All New Rush",
    category: "SUV",
    image: "/cars/Car 3.png",
    specs: {
      fuel: "70L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 72.00,
    originalPrice: 80.00,
  },
  {
    id: 5,
    name: "CR-V",
    category: "SUV",
    image: "/cars/Car 4.png",
    specs: {
      fuel: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.00,
  },
  {
    id: 6,
    name: "All New Terios",
    category: "SUV",
    image: "/cars/Car 5.png",
    specs: {
      fuel: "90L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 74.00,
  },
  {
    id: 7,
    name: "MG ZX Exclusice",
    category: "Hatchback",
    image: "/cars/Car 6.png",
    specs: {
      fuel: "70L",
      transmission: "Electric",
      capacity: "4 People",
    },
    price: 76.00,
    originalPrice: 80.00,
  },
  {
    id: 8,
    name: "New MG ZS",
    category: "SUV",
    image: "/cars/Car 7.png",
    specs: {
      fuel: "80L",
      transmission: "Manual",
      capacity: "6 People",
    },
    price: 80.00,
  },
  {
    id: 9,
    name: "MG ZX Excite",
    category: "Hatchback",
    image: "/cars/Car 8.png",
    specs: {
      fuel: "90L",
      transmission: "Electric",
      capacity: "4 People",
    },
    price: 74.00,
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
    const matchesSearch = car.name.toLowerCase().includes(filters.search.toLowerCase())
    const matchesType = filters.type.length === 0 || filters.type.includes(car.category.toLowerCase())
    const matchesCapacity =
      filters.capacity.length === 0 ||
      filters.capacity.includes(car.specs.capacity.split(" ")[0])
    return matchesSearch && matchesType && matchesCapacity
  })

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white rounded-[10px] p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-[#90A3BF] text-sm">{car.category}</p>
              </div>
              <button 
                onClick={() => toggleFavorite(car.id)}
                className="text-[#90A3BF] hover:text-[#ED3F3F]"
              >
                <Heart className={`h-6 w-6 ${favorites.has(car.id) ? 'fill-[#ED3F3F] text-[#ED3F3F]' : ''}`} />
              </button>
            </div>

            <div className="relative h-[200px] mb-4">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-1 text-[#90A3BF]">
                <Gauge className="h-4 w-4" />
                <span className="text-sm">{car.specs.fuel}</span>
              </div>
              <div className="flex items-center gap-1 text-[#90A3BF]">
                <Settings className="h-4 w-4" />
                <span className="text-sm">{car.specs.transmission}</span>
              </div>
              <div className="flex items-center gap-1 text-[#90A3BF]">
                <Users className="h-4 w-4" />
                <span className="text-sm">{car.specs.capacity}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold">${car.price}</span>
                  <span className="text-sm text-[#90A3BF]">/ day</span>
                </div>
                {car.originalPrice && (
                  <span className="text-sm text-[#90A3BF] line-through">${car.originalPrice}</span>
                )}
              </div>
              <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90">
                Rent Now
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 px-6">
          Show more cars
        </Button>
        <p className="text-[#90A3BF] mt-2">120 Cars</p>
      </div>
    </div>
  )
}
