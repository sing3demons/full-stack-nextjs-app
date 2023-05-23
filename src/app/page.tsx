import Image from 'next/image'
import styles from './page.module.css'
import AppHeader from '@/client-components/AppHeader'

export default function Home() {
  return (
    <main className={styles.main}>
      <p className='header'>Hello Next.js 13</p>
      <AppHeader/>
    </main>
  )
}
