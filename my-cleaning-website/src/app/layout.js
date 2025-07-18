import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
