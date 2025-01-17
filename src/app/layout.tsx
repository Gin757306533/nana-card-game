import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NANA",
  description: "A card game that tests your memory",
  appleWebApp: {
    title: "NANA",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  initialScale: 0.5,
  maximumScale: 0.5,
  width: "device-width",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
