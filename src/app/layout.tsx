import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner"; 
import { ConvexClientProvider } from "@/components/convex-client-provider";

import "./globals.css";
import "@liveblocks/react-ui/styles.css"
import "@liveblocks/react-tiptap/styles.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LeDocs",
  description: "Google Docs clone built with Next.js and Liveblocks",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
