"use client";

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-blue-600 text-2xl font-bold mb-4">MORENT</h2>
            <p className="text-gray-600">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-purple-600">How it works</Link></li>
              <li><Link href="/featured" className="text-gray-600 hover:text-purple-600">Featured</Link></li>
              <li><Link href="/partnership" className="text-gray-600 hover:text-purple-600">Partnership</Link></li>
              <li><Link href="/business" className="text-gray-600 hover:text-purple-600">Business Relation</Link></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-600 hover:text-purple-600">Events</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-purple-600">Blog</Link></li>
              <li><Link href="/podcast" className="text-gray-600 hover:text-purple-600">Podcast</Link></li>
              <li><Link href="/invite" className="text-gray-600 hover:text-purple-600">Invite a friend</Link></li>
            </ul>
          </div>

          {/* Socials Links */}
          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><Link href="/discord" className="text-gray-600 hover:text-purple-600">Discord</Link></li>
              <li><Link href="/instagram" className="text-gray-600 hover:text-purple-600">Instagram</Link></li>
              <li><Link href="/twitter" className="text-gray-600 hover:text-purple-600">Twitter</Link></li>
              <li><Link href="/facebook" className="text-gray-600 hover:text-purple-600">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">2024 MORENT. All rights reserved</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600">
              Privacy & Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-purple-600">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
