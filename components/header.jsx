"use client"

import { Bell, Heart, Search, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header({ onSearch }) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-[#3563E9] text-2xl font-bold">MORENT</h1>
          <div className="relative hidden md:block max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search something here"
              className="pl-10 w-full"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative hidden sm:inline-flex">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sss.PNG-oXp2aOO1i3VtKAgjL9976OCLmrNOrr.png"
              alt="User"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

