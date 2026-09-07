import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abin Varghese — Full-Stack Engineer & UI/UX Designer | Resume",
  description:
    "Interactive resume and credentials of Abin Varghese — Front-End Developer, UI/UX Designer, and smart hackathon winner from Kerala, India. Explore work history, achievements, and download official PDF resumes.",
  metadataBase: new URL("https://resume.abinvarghese.app"),
  keywords: [
    "Abin Varghese Resume",
    "Abin Varghese CV",
    "Front-End Developer Resume",
    "UI/UX Designer Resume",
    "Amal Jyothi College of Engineering",
    "NASA Space Apps Winner",
    "Next.js Developer India",
  ],
  authors: [{ name: "Abin Varghese", url: "https://abinvarghese.app" }],
  creator: "Abin Varghese",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resume.abinvarghese.app",
    title: "Abin Varghese — Full-Stack Engineer & UI/UX Designer | Resume",
    description:
      "Interactive resume and official documents of Abin Varghese — Front-End Developer & UI/UX Designer.",
    siteName: "Abin Varghese Resume",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abin Varghese Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abin Varghese — Resume & Credentials",
    description:
      "Interactive resume of Abin Varghese — Front-End Developer & UI/UX Designer.",
    creator: "@toabinvarghese",
  },
  icons: {
    icon: "/Logo.svg",
    shortcut: "/Logo.svg",
    apple: "/Logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#fbf9f4] text-neutral-900">
        {children}
      </body>
    </html>
  );
}
