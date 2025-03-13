import { products, categories } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl md:text-4xl font-playfair font-medium mb-8">Our Collection</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button key={category.id} variant={category.id === "all" ? "secondary" : "outline"} className="rounded-full">
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

