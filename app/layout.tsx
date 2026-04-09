import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "For My Queen",
  description: "A special AR experience for the prettiest queen",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-face-aframe.prod.js" defer></script>
      </head>
      <body style={{ margin: 0, overflow: "hidden", backgroundColor: "#000" }}>
        {children}
      </body>
    </html>
  )
}
