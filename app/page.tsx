// app/page.tsx
"use client"

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { MdTranslate } from "react-icons/md"
import { GB, PL } from 'country-flag-icons/react/3x2'

export default function CV() {
  const [language, setLanguage] = useState<"pl" | "en">("pl") // Default to Polish

  // This would contain your CV text in different languages
  const cvContent: { [key in "pl" | "en"]: { name: string; title: string } } = {
    pl: {
      name: "Twoje Imię",
      title: "Fullstack Developer",
      // Add all your CV content in Polish
    },
    en: {
      name: "Your Name",
      title: "Fullstack Developer",
      // Add all your CV content in English
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <header className="bg-purple-800 text-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{cvContent[language].name}</h1>
          <div className="flex gap-2">
            <Button 
              variant={language === "pl" ? "default" : "outline"}
              className={language === "pl" ? "bg-purple-600 hover:bg-purple-700" : "text-white border-white hover:bg-purple-700"}
              onClick={() => setLanguage("pl")}
              aria-label="Polski"
              size="icon"
            >
              <PL className="h-5 w-5" />
            </Button>
            <Button 
              variant={language === "en" ? "default" : "outline"}
              className={language === "en" ? "bg-purple-600 hover:bg-purple-700" : "text-white border-white hover:bg-purple-700"}
              onClick={() => setLanguage("en")}
              aria-label="English"
              size="icon"
            >
              <GB className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg my-8 rounded-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-800">{cvContent[language].title}</h2>
          {/* Display the CV content based on the selected language */}
          {/* You'll add the actual content here */}
        </div>

        {/* Experience section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-700 border-b border-purple-200 pb-2 mb-4">
            {language === "pl" ? "Doświadczenie" : "Experience"}
          </h3>
          {/* Add your experience items here */}
        </section>

        {/* Education section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-700 border-b border-purple-200 pb-2 mb-4">
            {language === "pl" ? "Edukacja" : "Education"}
          </h3>
          {/* Add your education items here */}
        </section>

        {/* Skills section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-700 border-b border-purple-200 pb-2 mb-4">
            {language === "pl" ? "Umiejętności" : "Skills"}
          </h3>
          {/* Add your skills here */}
        </section>
      </main>

      <footer className="bg-purple-800 text-white p-4 text-center">
        <p className="text-sm">
          {language === "pl" ? "© 2025 Wszelkie prawa zastrzeżone" : "© 2025 All rights reserved"}
        </p>
      </footer>
    </div>
  )
}