import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import Header from "@/components/Header";
import { SearchProvider } from "@/components/providers/SearchContextProvider";
import Provider from "@/components/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <SearchProvider>
          <Provider>
            <body className={inter.className}>
              <Header />
              {children}
            </body>
          </Provider>
        </SearchProvider>
      </ReactQueryProvider>
    </html>
  );
}
