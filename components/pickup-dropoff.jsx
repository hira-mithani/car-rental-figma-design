"use client"

import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PickupDropoff() {
  return (
    <div className="space-y-4 bg-white rounded-[10px] p-6">
      {/* Mobile Logo and Search - Only visible on mobile */}
      <div className="md:hidden space-y-4">
        <div className="flex items-center gap-2">
          <h1 className="text-[32px] font-bold bg-gradient-to-r from-[#3563E9] to-[#6C89EB] bg-clip-text text-transparent">MORENT</h1>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 bg-[#F6F7F9] rounded-[10px] p-3">
            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.58329 17.5C13.9555 17.5 17.5 13.9556 17.5 9.58334C17.5 5.21108 13.9555 1.66667 9.58329 1.66667C5.21104 1.66667 1.66663 5.21108 1.66663 9.58334C1.66663 13.9556 5.21104 17.5 9.58329 17.5Z" stroke="#596780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 18.3333L16.6666 16.6667" stroke="#596780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search something here"
              className="bg-transparent w-full outline-none text-sm"
            />
            <button className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="#596780" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6 12H18" stroke="#596780" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M10 17H14" stroke="#596780" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Pickup and Dropoff Form - Different layouts for mobile and desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-[#3563E9]" />
            <span className="font-semibold">Pick - Up</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select defaultValue="semarang">
              <SelectTrigger className="bg-[#F6F7F9] border-0 md:bg-transparent md:border">
                <SelectValue placeholder="Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semarang">Semarang</SelectItem>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="surabaya">Surabaya</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="20july">
              <SelectTrigger className="bg-[#F6F7F9] border-0 md:bg-transparent md:border">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20july">20 July 2022</SelectItem>
                <SelectItem value="21july">21 July 2022</SelectItem>
                <SelectItem value="22july">22 July 2022</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="07">
              <SelectTrigger className="bg-[#F6F7F9] border-0 md:bg-transparent md:border">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="07">07:00</SelectItem>
                <SelectItem value="08">08:00</SelectItem>
                <SelectItem value="09">09:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative my-8 md:my-0">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Button 
              size="icon" 
              className="h-10 w-10 rounded-lg bg-[#3563E9] hover:bg-[#3563E9]/90"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4 md:col-start-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-[#3563E9]" />
            <span className="font-semibold">Drop - Off</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select defaultValue="semarang">
              <SelectTrigger className="bg-[#F6F7F9] border-0 md:bg-transparent md:border">
                <SelectValue placeholder="Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semarang">Semarang</SelectItem>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="surabaya">Surabaya</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="21july">
              <SelectTrigger className="bg-[#F6F7F9] border-0 md:bg-transparent md:border">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="21july">21 July 2022</SelectItem>
                <SelectItem value="22july">22 July 2022</SelectItem>
                <SelectItem value="23july">23 July 2022</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="01">
              <SelectTrigger className="bg-[#F6F7F9] border-0 md:bg-transparent md:border">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01">01:00</SelectItem>
                <SelectItem value="02">02:00</SelectItem>
                <SelectItem value="03">03:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
