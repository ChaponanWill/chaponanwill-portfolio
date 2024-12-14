import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
const urbanist = Urbanist({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Chaponanwill",
  description: "Chaponanwill",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="text-[16px]">
      <body
        className={urbanist.className}
      >
        {children}
      </body>
    </html>
  );
}
