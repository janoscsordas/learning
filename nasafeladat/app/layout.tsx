import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";


export const metadata: Metadata = {
  title: "APOD",
  description: "Astronomy Picture of the day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
        <body className={`${GeistSans.className} bg-white `}>
            <header className="fixed top-0 left-0 p-5 w-full h-max border-b border-gray-300 bg-white/75 backdrop-blur-md">
                <h1 className="text-center text-2xl font-semibold">Astronomy Picture of the day (APOD)</h1>
            </header>
            <main className="mt-32">
                {children}
            </main>
        </body>
    </html>
  );
}
