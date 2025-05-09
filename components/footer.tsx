import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-knooppunt-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Knooppunt Community Center Logo"
                width={120}
                height={53}
                className="h-auto w-auto bg-white rounded-md p-2"
              />
            </Link>
            <p className="text-gray-300 mt-2">Building bridges in our community - A UWC Maastricht Initiative</p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.instagram.com/knooppunt_uwcm?igsh=MW4xOTFpczBiaHE5dA==" className="text-white hover:text-knooppunt-orange transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-knooppunt-orange pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-knooppunt-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-knooppunt-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/living-library" className="hover:text-knooppunt-orange transition-colors">
                  Living Library
                </Link>
              </li>
              <li>
                <Link href="/uwc-experience" className="hover:text-knooppunt-orange transition-colors">
                  UWC Experience Day
                </Link>
              </li>
              <li>
                <Link href="/uwc-experience/workshops" className="hover:text-knooppunt-orange transition-colors">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-knooppunt-orange pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-knooppunt-orange shrink-0 mt-0.5" />
                <span>Discusworp 13, 6225 XP Maastricht, Netherlands</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-knooppunt-orange shrink-0" />
                <span>knooppunt@uwcmaastricht.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Knooppunt Community Center. All rights reserved.</p>
          <p className="mt-1">A UWC Maastricht Initiative</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
