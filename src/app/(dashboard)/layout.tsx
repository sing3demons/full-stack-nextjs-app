import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard Page",
  description: "By Next.js",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Dashboard Header</h1>
        <hr />
        {children}
        <hr />
        <h1>Dashboard Footer</h1>
      </body>
    </html>
  );
}
