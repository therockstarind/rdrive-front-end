import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '®/styles/globals.css'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RDRIVE Front-End',
  description: 'Starting working on front-end design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance='dark'>
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  )
}
