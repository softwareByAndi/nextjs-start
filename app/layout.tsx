import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import ClientSideAuthProvider from "@components/ClientSideAuthProvider";

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
      <body>
        <Header/>
        <div className="m-2">
          <ClientSideAuthProvider>
            {children}
          </ClientSideAuthProvider>
        </div>
      </body>
    </html>
  );
}