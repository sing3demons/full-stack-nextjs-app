import Providers from '../components/Providers'
import '../globals.css'
import { AppFooter } from './ui/AppFooter'
import { AppHeader } from './ui/AppHeader'

export const metadata = {
  title: 'Home Page',
  description: 'By Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <AppHeader />
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  )
}
