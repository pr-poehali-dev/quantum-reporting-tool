import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useLang } from "@/lib/lang-context"
import type { Lang } from "@/lib/i18n"

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ua", label: "UA" },
  { code: "de", label: "DE" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useLang()

  const navBg = theme === "dark" ? "bg-black/95 border-red-500/20" : "bg-white/95 border-red-500/30"
  const textColor = theme === "dark" ? "text-white" : "text-gray-900"
  const mobileMenuBg = theme === "dark" ? "bg-black/98 border-red-500/20" : "bg-white border-red-500/20"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] backdrop-blur-md border-b ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className={`font-orbitron text-xl font-bold ${textColor}`}>
              Standoff<span className="text-red-500">Arena</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#packages" className={`font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}>{t.nav.packages}</a>
              <a href="#applications" className={`font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}>{t.nav.tournaments}</a>
              <a href="#faq" className={`font-geist ${textColor} hover:text-red-500 transition-colors duration-200`}>{t.nav.faq}</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-1">
              {LANGS.map(({ code, label }) => (
                <button key={code} onClick={() => setLang(code)}
                  className={`px-2 py-1 text-xs font-bold rounded transition-colors duration-200 font-orbitron ${lang === code ? "bg-red-500 text-white" : theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                  {label}
                </button>
              ))}
            </div>
            <button onClick={toggle}
              className={`p-2 rounded-lg transition-colors duration-200 ${theme === "dark" ? "text-white hover:text-red-500 hover:bg-white/10" : "text-gray-700 hover:text-red-500 hover:bg-gray-100"}`}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">{t.nav.buyTicket}</Button>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {LANGS.map(({ code, label }) => (
                <button key={code} onClick={() => setLang(code)}
                  className={`px-1.5 py-0.5 text-xs font-bold rounded font-orbitron ${lang === code ? "bg-red-500 text-white" : theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {label}
                </button>
              ))}
            </div>
            <button onClick={toggle} className={`p-1.5 rounded-lg ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} hover:text-red-500 transition-colors duration-200`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${mobileMenuBg}`}>
              <a href="#packages" className={`block px-3 py-2 font-geist ${textColor} hover:text-red-500 transition-colors duration-200`} onClick={() => setIsOpen(false)}>{t.nav.packages}</a>
              <a href="#applications" className={`block px-3 py-2 font-geist ${textColor} hover:text-red-500 transition-colors duration-200`} onClick={() => setIsOpen(false)}>{t.nav.tournaments}</a>
              <a href="#faq" className={`block px-3 py-2 font-geist ${textColor} hover:text-red-500 transition-colors duration-200`} onClick={() => setIsOpen(false)}>{t.nav.faq}</a>
              <div className="px-3 py-2">
                <a href="https://t.me/Paveldduroov" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">{t.nav.buyTicket}</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
