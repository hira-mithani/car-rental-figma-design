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
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={(term) => setFilters((prev) => ({ ...prev, search: term }))} />
      <div className="container mx-auto px-4 py-6">
        <PickupDropoff />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <Sidebar filters={filters} setFilters={setFilters} />
          <CarGrid filters={filters} />
        </div>
      </div>
    </div>
  )
}

