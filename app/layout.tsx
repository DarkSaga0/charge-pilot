import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'ChargePilot - Find, Plan, and Charge Your EV Journey',
  description: 'The ultimate EV charging station finder and route planning app. Real-time availability, optimal route planning, and all charging stations in one unified app.',
  keywords: ['EV charging', 'electric vehicle', 'charging stations', 'route planning', 'EV app'],
  authors: [{ name: 'ChargePilot' }],
  openGraph: {
    title: 'ChargePilot - Find, Plan, and Charge Your EV Journey',
    description: 'The ultimate EV charging station finder and route planning app.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0066FF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
