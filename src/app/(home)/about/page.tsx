// localhost:4000/about

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "ระบบจัดการข่าวสาร",
};

export default function AboutPage() {
  return (
    <div>
      <h1>Hello Page About</h1>
      <div>
        <Link href="../" replace={true}>กลับหน้าหลัก</Link>
      </div>
    </div>
  );
}