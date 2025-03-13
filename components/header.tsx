"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-playfair italic text-xl">
            sofa set
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="hover:text-secondary transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-secondary transition-colors">
              About us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search size={20} />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart size={20} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-primary px-4 py-4 shadow-lg transition-all duration-300 ease-in-out",
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0",
          )}
        >
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/reviews"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/about" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About us
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon">
                <Search size={20} />
              </Button>
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart size={20} />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

