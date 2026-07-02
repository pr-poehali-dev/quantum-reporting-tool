import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const navBg = theme === "dark" ? "bg-black/95 border-red-500/20" : "bg-white/95 border-red-500/30"
  const textColor = theme === "dark" ? "text-white" : "text-gray-900"
  const mobileMenuBg = theme === "dark" ? "bg-black/98 border-red-500/20" : "bg-white border-red-500/20"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-md border-b ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-orbitron text-xl font-bold ${textColor}`}>
              Standoff<span className="text-red-500">Arena</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#packages" className={`font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}>
                Packages
              </a>
              <a href="#applications" className={`font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}>
                Tournaments
              </a>
              <a href="#faq" className={`font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}>
                FAQ
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors duration-200 ${theme === "dark" ? "text-white hover:text-red-500 hover:bg-white/10" : "text-gray-700 hover:text-red-500 hover:bg-gray-100"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">Buy Ticket</Button>
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors duration-200 ${theme === "dark" ? "text-white hover:text-red-500" : "text-gray-700 hover:text-red-500"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} hover:text-red-500 transition-colors duration-200`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${mobileMenuBg}`}>
              <a
                href="#packages"
                className={`block px-3 py-2 font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                Packages
              </a>
              <a
                href="#applications"
                className={`block px-3 py-2 font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                Tournaments
              </a>
              <a
                href="#faq"
                className={`block px-3 py-2 font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <div className="px-3 py-2">
                <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                    Buy Ticket
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
