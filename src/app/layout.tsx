import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NM-Challenge-01",
  description:
    "Mise en place de la structure de base d'une projet Next, React, TypeScript, Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
