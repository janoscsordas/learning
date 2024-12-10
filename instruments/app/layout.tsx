import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Hangszerbolt",
  description: "Hangszerbolt Máté hangszereiről",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body>
        <Theme className={`${GeistSans.className} antialiased`} appearance="light">
          <Header />
          <main className="w-full min-h-screen pt-16">
            {children}
          </main>
          <footer>

          </footer>
        </Theme>
      </body>
    </html>
  );
}
