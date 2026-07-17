import type { Metadata } from "next";
import { Noto_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto",
});

// Mono accent cho chữ Latin / số / wordmark. KHÔNG dùng cho tiếng Việt
// (Space Mono thiếu dấu) — chỉ gắn qua class .font-accent ở nơi Latin.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "LT Studio - Sản xuất Video Giải trí & Truyền thông",
  description: "LT Studio is a technology - media and entertainment group established in Vietnam and cooperating globally.",
  keywords: "LT Studio, sản xuất video, video quảng cáo, TVC, video giải trí, truyền thông số, media production, Vietnam",
  authors: [{ name: "LT Studio" }],
  openGraph: {
    title: "LT Studio - Sản xuất Video Giải trí & Truyền thông",
    description: "LT Studio is a technology - media and entertainment group established in Vietnam and cooperating globally.",
    type: "website",
    locale: "vi_VN",
    siteName: "LT Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "LT Studio - Sản xuất Video Giải trí & Truyền thông",
    description: "LT Studio is a technology - media and entertainment group established in Vietnam and cooperating globally.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${notoSans.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="crt-veil">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
