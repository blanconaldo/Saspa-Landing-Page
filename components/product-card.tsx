"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square bg-primary rounded-lg overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-secondary font-medium">${product.price}</span>
          <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Link href={`/products/${product.id}`} className="absolute inset-0">
        <span className="sr-only">View {product.name}</span>
      </Link>
    </div>
  )
}

