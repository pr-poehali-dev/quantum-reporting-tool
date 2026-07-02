import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useLang } from "@/lib/lang-context"

export function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Standoff<span className="text-red-500">Arena</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md shimmer-text">{f.desc}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4 shimmer-text">{f.market}</h3>
            <ul className="space-y-2">
              <li><a href="#packages" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.links.packages}</a></li>
              <li><a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.links.tournaments}</a></li>
              <li><a href="#packages" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.links.tickets}</a></li>
              <li><a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.links.faq}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4 shimmer-text">{f.company}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.company_links.about}</a></li>
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.company_links.careers}</a></li>
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.company_links.press}</a></li>
              <li><a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 shimmer-text">{f.company_links.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm shimmer-text">{f.rights}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200 shimmer-text">{f.privacy}</a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200 shimmer-text">{f.terms}</a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200 shimmer-text">{f.cookie}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
