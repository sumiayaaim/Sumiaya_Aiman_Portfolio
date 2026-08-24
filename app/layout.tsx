import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
metadataBase: new URL("https://sumiaya-aiman-portfolio.vercel.app"),  title: "Sumiaya Aiman Portfolio",
  description: "Portfolio of Sumiaya Aiman, a Karachi-based frontend, MERN stack, Laravel, ASP.NET, and Flutter developer building responsive web and mobile products.",
  keywords: [
    "Sumiaya Aiman",
    "MERN stack developer",
    "full-stack developer",
    "frontend developer",
    "React developer",
    "Laravel developer",
    "Flutter developer",
    "Upwork developer",
    "Karachi software developer",
  ],
  authors: [{ name: "Sumiaya Aiman" }],
  creator: "Sumiaya Aiman",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Sumiaya Aiman Portfolio",
    description: "Responsive web and mobile products built with MERN, Laravel, ASP.NET, Angular, and Flutter.",
    url: "/",
    siteName: "Sumiaya Aiman Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sumiaya Aiman — Full-Stack & MERN Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumiaya Aiman Portfolio",
    description: "Responsive web and mobile products built with MERN, Laravel, ASP.NET, Angular, and Flutter.",
    images: ["/og.png"],
  },
 icons: {
  icon: [
    {
      url: "/favicon-sa.svg",
      type: "image/svg+xml",
    },
  ],
  shortcut: "/favicon-sa.svg",
},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
