import Navbar from "./Navbar/Navbar";
import SessionProvider from "./SessionProvider";
import Footer from "./footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowmazon",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar></Navbar>
          <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
          <Footer></Footer>
        </SessionProvider>
      </body>
    </html>
  );
}
