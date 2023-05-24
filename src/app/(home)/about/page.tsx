// localhost:4000/about

import { Metadata } from 'next'
import Link from 'next/link'
import AboutContent from '../ui/AboutContent'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'ระบบจัดการข่าวสาร',
}

interface version {
  message: string
  data: { version: string }
  status_code: number
}

async function getData(): Promise<version> {
  // const res = await fetch("https://api.codingthailand.com/api/version"); // Static site generation (SSG)
  // const res = await fetch("https://api.codingthailand.com/api/version", { // Incremental Static Regeneration (ISR)
  //   next: { revalidate: 10 }, // ดึงข้อมูลมาใหม่ทุกๆ 10 วินาที
  // });
  const res = await fetch('https://api.codingthailand.com/api/version/v', {
    // Server-side rendering (SSR)
    cache: 'no-store', // ไม่ cache ข้อมูลจะอัปเดตทันที
  })

    if (res.status === 404) {
    notFound()
    }
  
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }

  return res.json() as Promise<version>
}

export default async function AboutPage() {
  const v = await getData()

  return (
    <>
      <AboutContent data={v} />
    </>
  )
}
