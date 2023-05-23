// localhost:4000/about

import { Metadata } from "next";
import Link from "next/link";
import AboutContent from '../ui/AboutContent';

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "ระบบจัดการข่าวสาร",
};

export default function AboutPage() {
  return (
   <>
   <AboutContent/>
    </>
  );
}