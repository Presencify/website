import "./globals.css"
import { Commissioner } from "next/font/google"

const inter = Commissioner({ subsets: ["latin"] })

export const metadata = {
  title: "Presencify",
  description: "Show your browser activity on your discord presence with Presencify"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
