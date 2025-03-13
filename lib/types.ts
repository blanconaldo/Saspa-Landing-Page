export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
  discount?: number
  colors?: string[]
  inStock: boolean
}

