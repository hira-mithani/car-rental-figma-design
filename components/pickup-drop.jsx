import { useState } from "react"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function PickupDrop() {
  const [pickupDate, setPickupDate] = useState(new Date())
  const [dropoffDate, setDropoffDate] = useState(new Date())

  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]

  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 || 12
    const ampm = i < 12 ? "AM" : "PM"
    return `${hour}:00 ${ampm}`
  })

  return (
    <div className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-sm relative">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#3563E9]" />
          <span className="font-semibold">Pick - Up</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start text-left font-normal">
                {format(pickupDate, "PP")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {times.map((time) => (
                <SelectItem key={time} value={time.toLowerCase()}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#3563E9] hidden md:flex"
        size="icon"
      >
        <ArrowUpDown className="h-4 w-4" />
      </Button>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#3563E9] bg-opacity-30" />
          <span className="font-semibold">Drop - Off</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start text-left font-normal">
                {format(dropoffDate, "PP")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={dropoffDate} onSelect={setDropoffDate} initialFocus />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {times.map((time) => (
                <SelectItem key={time} value={time.toLowerCase()}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

