"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const CONSENT_KEY = "carla-leite-cookie-consent"
const GTM_ID = "GTM-WS8GWCF7"

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

function loadGTM() {
  if (typeof window === "undefined") return
  if (document.getElementById("carla-leite-gtm")) return

  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  })

  const script = document.createElement("script")
  script.id = "carla-leite-gtm"
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`

  document.head.appendChild(script)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)

    if (consent === "granted") {
      loadGTM()
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  const setConsent = (value: "granted" | "denied") => {
    localStorage.setItem(CONSENT_KEY, value)

    if (value === "granted") {
      loadGTM()
    }

    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-lg font-bold text-slate-900">
              🍪 Votre confidentialité
            </h2>

            <p className="text-sm leading-relaxed text-slate-600">
              Ce site utilise des outils de mesure d’audience afin de
              comprendre sa fréquentation et d’améliorer son fonctionnement.
              Certains cookies et traceurs peuvent être utilisés avec votre
              accord. Vous pouvez accepter ou refuser leur utilisation.
            </p>

            <div className="mt-2 flex gap-4">
              <Link
                href="/cookies"
                className="text-sm font-medium text-slate-700 underline hover:no-underline"
              >
                Politique cookies
              </Link>

              <Link
                href="/confidentialite"
                className="text-sm font-medium text-slate-700 underline hover:no-underline"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setConsent("denied")}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Refuser
            </button>

            <button
              type="button"
              onClick={() => setConsent("granted")}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}