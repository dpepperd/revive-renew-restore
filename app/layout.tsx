import type { Metadata } from "next";
import { Inter, Orbitron, Bebas_Neue } from "next/font/google"; 
import "./globals.css";
import { EstimateModalProvider } from "@/context/EstimateModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.reviverenewrestore.com'),
  title: "Revive Renew Restore | Premier EV Collision Center",
  description: "Jacksonville's Rivian-Certified collision repair specialists.",
  openGraph: {
    title: "Revive Renew Restore | Premier EV Collision Center",
    description: "Jacksonville's Rivian-Certified collision repair specialists.",
    url: "/",
    siteName: "Revive Renew Restore",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive Renew Restore | Premier EV Collision Center",
    description: "Jacksonville's Rivian-Certified collision repair specialists.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} ${bebas.variable} antialiased`}>
        <EstimateModalProvider>
          <Header />
            {children}
          <Footer />
          <EstimateModal />
          <ChatWidget />
        </EstimateModalProvider>
      </body>
    </html>
  );
}