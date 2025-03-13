import Image from "next/image"
import { Truck, DollarSign, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/data"

export default function Home() {
  const featuredProducts = products.slice(0, 8)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-4">
                Modern
                <br />
                Furniture
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md">
                we combine interior and exterior design service and often provide them as a single solution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary text-white hover:bg-secondary/90">Start Now</Button>
                <Button variant="outline" className="bg-accent text-foreground border-accent hover:bg-accent/80">
                  Read More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent -z-10 translate-x-1/4 -translate-y-1/4"></div>
              {/*<Image*/}
              {/*  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-07%20at%2005.49.38_7c4588f7.jpg-Wrn0689kPOvjzGmqQRm1WOnIHFUmrk.jpeg"*/}
              {/*  alt="Modern blue sofa"*/}
              {/*  width={600}*/}
              {/*  height={400}*/}
              {/*  className="relative z-10"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="section-divider">
            <span className="text-xl font-playfair">Hot Deals For You</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary">
                  <Truck className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">we combine interior and exterior design service</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Save Money</h3>
              <p className="text-muted-foreground">we combine interior and exterior design service</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary">
                  <MessageSquare className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Contact With Us</h3>
              <p className="text-muted-foreground">we combine interior and exterior design service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <h2 className="section-title">This Week Featured Product</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent -z-10 -translate-x-1/4 translate-y-1/4"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Featured blue armchair"
                width={400}
                height={400}
                className="relative z-10"
              />
            </div>

            <div>
              <div className="inline-block bg-accent px-3 py-1 rounded-full text-sm font-medium mb-4">20% OFF</div>
              <h3 className="text-2xl font-playfair font-medium mb-4">
                Being able to sit back and relax in your favourite armchair is truly one of the greatest feelings in
                life.
              </h3>
              <p className="text-muted-foreground mb-6">
                That's why we've created a stunning range of lovingly handmade luxury armchairs, using only materials of
                the finest quality, to ensure you have the best seat in the house.
              </p>
              <Button className="bg-secondary text-white hover:bg-secondary/90">Add to Cart</Button>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-medium mb-4">
                  As in the best seat in the house. Combining comfort and style.
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our stunning range of armchairs features designs to suit any style. Perhaps, you're looking for a
                  mid-century masterpiece.
                </p>
                <Button className="bg-accent text-foreground hover:bg-accent/90">Add to Cart</Button>
              </div>

              <div className="relative">
                <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-accent -z-10 translate-x-1/4 translate-y-1/4"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Blue armchair with footrest"
                  width={400}
                  height={400}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Collection Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="section-divider">
            <span className="text-xl font-playfair">Wooden Sofa Sets</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="section-title text-center">A Huge Collection Of Furniture</h2>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant="outline"
                className="rounded-full bg-accent text-foreground border-accent hover:bg-accent/80"
              >
                All products
              </Button>
              <Button variant="outline" className="rounded-full">
                Home Office
              </Button>
              <Button variant="outline" className="rounded-full">
                Bedroom
              </Button>
              <Button variant="outline" className="rounded-full">
                Sofa
              </Button>
              <Button variant="outline" className="rounded-full">
                Chair
              </Button>
              <Button variant="outline" className="rounded-full">
                More
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-primary rounded-lg p-4 relative group">
                  <div className="aspect-square relative mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium truncate">{product.name}</h3>
                  <p className="text-secondary font-medium">${product.price}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 right-4 rounded-full h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-accent relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-muted"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-secondary"></div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-medium mb-4">
                We Are The Biggest Furniture Brands
              </h2>
              <p className="text-muted-foreground mb-6">
                Over the years our team always been at the top of the furniture industry across the world, that why
                everyone believes in the quality of our products
              </p>
              <Button className="bg-secondary text-white hover:bg-secondary/90">Read More</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


