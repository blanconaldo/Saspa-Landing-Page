"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"

interface CartItem {
  id: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", quantity: 1 },
    { id: "3", quantity: 1 },
  ])

  const cartProducts = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.id)
      return {
        ...product,
        quantity: item.quantity,
      }
    })
    .filter(Boolean)

  const subtotal = cartProducts.reduce((total, item) => {
    return total + (item?.price || 0) * (item?.quantity || 0)
  }, 0)

  const shipping = 15
  const total = subtotal + shipping

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl md:text-4xl font-playfair font-medium mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link href="/products">
            <Button className="bg-secondary text-white hover:bg-secondary/90">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-primary rounded-lg p-6">
              <div className="flex justify-between items-center pb-4 border-b border-muted mb-6">
                <h2 className="font-medium">Product</h2>
                <h2 className="font-medium">Total</h2>
              </div>

              <div className="space-y-6">
                {cartProducts.map((item) => (
                  <div key={item?.id} className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-accent rounded-lg overflow-hidden">
                      <Image
                        src={item?.image || "/placeholder.svg?height=80&width=80"}
                        alt={item?.name || "Product"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-medium">{item?.name}</h3>
                      <p className="text-secondary">${item?.price !== undefined ? item.price.toFixed(2) : "0.00"}</p>
                    </div>

                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item?.id || "", (item?.quantity || 0) - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-2 w-6 text-center">{item?.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item?.id || "", (item?.quantity || 0) + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="text-right min-w-[80px]">
                      ${((item?.price || 0) * (item?.quantity || 0)).toFixed(2)}
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item?.id || "")}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-muted">
                <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-primary rounded-lg p-6">
              <h2 className="font-medium pb-4 border-b border-muted mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="pt-4 border-t border-muted flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-secondary text-white hover:bg-secondary/90">Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


