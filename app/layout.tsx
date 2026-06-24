import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Schema } from "@/components/seo/Schema"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title:
    "Penkridge Dog Services | Reliable Dog Walking & Boarding in Penkridge, Staffordshire",
  description:
    "Reliable dog walking and boarding services in Penkridge, Staffordshire. Trusted, insured, and passionate about your pet's wellbeing. Serving Penkridge, Stafford, Cannock, and surrounding areas.",
  metadataBase: new URL("https://www.penkridgedogservices.co.uk"),
  alternates: {
    canonical: "https://www.penkridgedogservices.co.uk",
  },
  icons: {
  icon: "/favicon-16x16.png",
  shortcut: "/favicon-16x16.png",
  apple: "/apple-icon.png",
},
}

export const viewport: Viewport = {
  themeColor: "#6b8f71",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Schema />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
