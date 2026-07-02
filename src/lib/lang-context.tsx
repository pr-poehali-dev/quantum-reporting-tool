import { createContext, useContext, useState } from "react"
import type { Lang } from "./i18n"
import { translations } from "./i18n"

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations["en"]
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: translations["en"],
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "en"
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("lang", l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
