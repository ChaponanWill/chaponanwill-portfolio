import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "💻 Chaponanwill | William Chapoñan",
    description:
        "William Chapoñan, desarrollador de software apasionado por crear soluciones digitales eficientes y elegantes.",
    keywords:
        "Chaponanwill, William Chapoñan, Desarrollador de software Chiclayo, ing. de software Chiclayo, Creador de páginas web Chiclayo, Desarrollador web Chiclayo, Creador de sistemas Chiclayo ",
    openGraph: {
        title: "Chaponanwill",
        description: "Chaponanwill",
        url: "https://chaponanwill.netlify.app",
        type: "website",
        locale: "es_PE",
        images: [
            {
                url: "/chaponanwill/chaponanwill.webp",
                width: 1200,
                height: 630,
                alt: "Chaponanwill",
            },
        ],
    },
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="text-[16px]">
            <body className={urbanist.className}>{children}</body>
        </html>
    );
}
