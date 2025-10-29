import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: Readonly<{ children: React.ReactNode; session: any }>) {
  return (
    <html lang="ru">
      <body
        className={`${font.className} section-compact bg-white dark:bg-black antialiased`}
      >
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp session={session}>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
          >
            <Header />
            {children}
            <YandexMetrika />
            <Footer />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  );
}
