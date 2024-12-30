'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone, CreditCard } from 'lucide-react'
import ProductCarousel from './components/ProductCarousel'
import PaymentModal from './components/PaymentModal'
import React from 'react'

const products = [
  { name: 'Folding Table', price: 199, image: 'https://d.media.kavehome.com/image/upload/v1709569063/products/J0500008MM43_1V01.jpg' },
  { 
    name: 'Wall Bed', 
    price: 599, 
    image: 'https://www.organizedinteriors.com/blog/wp-content/uploads/2015/06/wall-bed-in-condo.jpg' 
  },
  { name: 'Expandable Sofa', price: 799, image: 'https://rigstudio.international/cdn/shop/files/O1CN01QkXWtL1wcjf6V77z0__2440046329.jpg?v=1719204082&width=416' },
  { name: 'Nesting Tables', price: 249, image: 'https://www.nismaayadecor.in/cdn/shop/files/nismaaya-gavin-nesting-tables-set-of-3_1.png?v=1686819974&width=1080' },
]

export default function Home() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Product Carousel */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <ProductCarousel products={products} />
        </div>
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-removebg-preview-PmkIOUAgTSEnxL05SYPCrLX22HW8r6.png"
            alt="SASPA Logo"
            width={300}
            height={150}
            className="mb-2"
            priority
          />
          <p className="text-2xl mb-8 font-playfair">Saving Space, Enhancing Life</p>
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="bg-orange-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors flex items-center"
          >
            <CreditCard className="mr-2" />
            Buy Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-playfair">{product.name}</h3>
              <p className="text-gray-400 mb-4 font-playfair">Space-saving solution for modern living.</p>
              <p className="text-orange-500 font-bold font-playfair">KWD {product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-orange-500 text-black py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 font-playfair">About SASPA</h2>
          <p className="text-lg text-center font-playfair">
            At SASPA, we believe that living spaces should be both functional and beautiful. Our innovative furniture
            solutions are designed to maximize your space without compromising on style or comfort.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 text-orange-500" />
                <span>+965 9711 1111</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-orange-500" />
                <span>info@saspa.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-orange-500" />
                <span>123 Furniture St, Design City, Kuwait</span>
              </li>
            </ul>
          </div>
          <form className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 bg-gray-900 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 bg-gray-900 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full mb-4 p-2 bg-gray-900 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6">
        <p>&copy; 2024 SASPA. All rights reserved.</p>
      </footer>

      {/* Payment Modal */}
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </div>
  )
}

