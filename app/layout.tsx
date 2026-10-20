import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "RAPID Electric | Electrical Services & Electrician in Texas",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  description:
    "RAP Electric provides reliable electrical services, repairs, installations, lighting, panel upgrades and electrical solutions for residential and commercial properties. Contact our team to discuss your electrical project.",

  keywords: [
    "RAPID Electric",
    "RAPID Electric Texas",
    "RAPID Electric electrical services",
    "electrician Texas",
    "electrical contractor Texas",
    "electrical services Texas",
    "residential electrician",
    "commercial electrician",
    "electrical repairs",
    "electrical installations",
    "electrical panel upgrades",
    "lighting installation",
    "indoor lighting services",
    "outdoor lighting installation",
    "electrical troubleshooting",
    "residential electrical services",
    "commercial electrical services",
    "electrical maintenance",
    "professional electrical contractor",
    "local electrician",
    "electrical wiring services",
    "home electrical repairs",
    "electrical safety inspections",
    "electrical upgrades",
    "RAP Electric contact",
  ],

  authors: [
    {
      name: "RAPID Electric",
    },
  ],

  creator: "RAPID Electric",
  publisher: "RAPID Electric",
  applicationName: "RAP Electric",

  category: "Electrical Services",

  // Replace with RAP Electric's verified production domain.
  metadataBase: new URL("https://YOUR-RAP-ELECTRIC-DOMAIN.com"),

  openGraph: {
    title: "RAP Electric | Professional Electrical Services",

    description:
      "Get reliable electrical solutions for your property with RAP Electric. Explore our electrical services, learn about our work and contact our team for your next project.",

    url: "https://YOUR-RAP-ELECTRIC-DOMAIN.com",

    siteName: "RAP Electric",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "RAP Electric | Professional Electrical Services",

    description:
      "Reliable electrical services, repairs, installations and electrical upgrades from RAP Electric.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
