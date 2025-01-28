"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import CarGrid from "@/components/car-grid"
import PickupDropoff from "@/components/pickup-dropoff"

export default function Page() {
  const [filters, setFilters] = useState({
    type: [],
    capacity: [],
    price: 100,
    search: "",
  })

  return (
    <div className="min-h-screen bg-[#F6F7F9] md:bg-gray-50">
      <Header onSearch={(term) => setFilters((prev) => ({ ...prev, search: term }))} />
      <div className="px-4 py-6 md:container md:mx-auto">
        <PickupDropoff />
        <div className="mt-8 md:flex md:gap-8">
          <Sidebar filters={filters} setFilters={setFilters} />
          <CarGrid filters={filters} />
        </div>
      </div>
    </div>
  )
}
