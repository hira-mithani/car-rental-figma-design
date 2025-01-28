"use client"

import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PickupDropoff() {
  return (
    <div className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#3563E9]" />
          <span className="font-semibold">Pick - Up</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="la">Los Angeles</SelectItem>
              <SelectItem value="ch">Chicago</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10:00 AM</SelectItem>
              <SelectItem value="11">11:00 AM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="relative">
        <Button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#3563E9]" size="icon">
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-[#3563E9] bg-opacity-30" />
            <span className="font-semibold">Drop - Off</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="ch">Chicago</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10:00 AM</SelectItem>
                <SelectItem value="11">11:00 AM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

