import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer"
import styles from "@/app/layout.module.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    </html>
  );
}
