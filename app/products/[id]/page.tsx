import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import {JSX} from "react";

// interface ProductPageProps {
//   params: {
//     id: string
//   }
// }

export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<JSX.Element> {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container-custom py-12">
      <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square bg-primary rounded-lg overflow-hidden">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        <div>
          <h1 className="text-3xl font-playfair font-medium mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-medium text-secondary">${product.price.toFixed(2)}</span>
            {product.discount && (
              <span className="text-sm bg-accent px-2 py-1 rounded-full">{product.discount}% OFF</span>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {product.colors && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-muted focus:outline-none focus:ring-2 focus:ring-secondary"
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="rounded-full">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 font-medium">1</span>
              <Button variant="outline" size="icon" className="rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-secondary text-white hover:bg-secondary/90 flex-1 sm:flex-none">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              Buy Now
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>High-quality materials</li>
              <li>Durable construction</li>
              <li>Easy to clean</li>
              <li>Modern design</li>
              <li>1-year warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

