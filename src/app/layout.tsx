import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rıza Hurdacı | Hurda Alım Satım",
  description: "İstanbul ve çevresinde hurda alım satım hizmeti. Hurda demir, bakır, alüminyum ve daha fazlası için en iyi fiyatlar.",
  keywords: "İstanbul Hurdacı, En Yakın Hurdacı, Hurdacı, Hurda Demir, Bakır Hurdacı, Hurda Fiyatları, Tekirdağ Hurdacı, Maden hurda fiyatları, Çorlu Hurda, Kablo hurda, E. kart hurdaları, Alüminyum hurda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
