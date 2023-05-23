import { FaHome } from "react-icons/fa";

import AppHeader from '@/client-components/AppHeader'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="./about">ไปที่หน้า About</Link>
      </div>
      <p className="header">สวัสดี Next.js</p>
      <p>{process.env.DB_PASSWORD}</p>
      <p>{ process.env.DB_USER }</p>
      <FaHome size={50} />
      <AppHeader />
      <p className={styles.title}>Hello Next.js 13</p>
    </main>
  );
}
