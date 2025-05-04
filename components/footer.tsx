import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Other Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-secondary transition-colors">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-secondary transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-secondary transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs" className="hover:text-secondary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-secondary transition-colors">
                  Photo gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-secondary transition-colors">
                  Latest news
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Be social</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted text-center text-sm">
          <p>copyright 2025 by SASPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

