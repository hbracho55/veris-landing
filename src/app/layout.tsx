import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./_components/SiteNav";
import SiteFooter from "./_components/SiteFooter";
import DemoModalProvider from "./_components/DemoModal";
import Breadcrumb from "./_components/Breadcrumb";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Veris · Digital Trust Infrastructure",
  description:
    "Verifica datos. No documentos. Veris reemplaza el PDF por evidencia criptográfica — verificable en segundos, sin almacenar datos sensibles.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <DemoModalProvider>
          <SiteNav />
          <Breadcrumb />
          {children}
          <SiteFooter />
        </DemoModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
