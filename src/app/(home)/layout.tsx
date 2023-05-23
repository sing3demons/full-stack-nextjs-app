import '../globals.css'
import { Sarabun } from 'next/font/google'

const sarabun = Sarabun({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '700'],
})

export const metadata = {
  title: 'Home Page',
  description: 'By Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sarabun.className}>
        <h1>สวัสดี Header</h1>
        <hr />
        {children}
        <hr />
        <h1>Web Footer</h1>
      </body>
    </html>
  );
}
