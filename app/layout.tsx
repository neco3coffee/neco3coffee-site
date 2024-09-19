import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer"
import styles from "@/app/layout.module.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "neco3coffee site",
  description: "this is a site of neco3coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJP.className }>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            {children} 
          </div>
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-02ND8D73C0" />
    </html>
  );
}
