import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brozcars.com"),
  title: "Brozcars | Premium Self Drive Car Rentals in Khanapara, Guwahati, Assam",
  description:
    "Brozcars offers the best self-drive car rentals in Khanapara, Guwahati. Choose strictly from Thar 4x4, Innova Crysta, Scorpio, i20 Sunroof, Baleno, Swift, City, Altroz & Venue. 100% verified, clean cars, zero hidden charges.",
  keywords: [
    "self drive car rental guwahati",
    "brozcars",
    "car rental khanapara",
    "hire thar in guwahati",
    "innova rental guwahati",
    "self drive cars assam",
    "shillong self drive cars from guwahati",
    "cheap car hire guwahati",
  ],
  authors: [{ name: "Brozcars Assam" }],
  creator: "Brozcars",
  openGraph: {
    title: "Brozcars - YOUR JOURNEY. YOUR RULES. | Self Drive Cars in Guwahati",
    description:
      "Experience the freedom of self-drive car rentals with Brozcars in Guwahati. Book online or instantly on WhatsApp (+91 7086100215).",
    url: "https://brozcars.com",
    siteName: "Brozcars Self Drive Rentals",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#09090b" />
        {/* Structured Data (Schema.org) for LocalBusiness / AutoRental */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              name: "Brozcars",
              image: "https://brozcars.com/images/hero-car.jpg",
              "@id": "https://brozcars.com",
              url: "https://brozcars.com",
              telephone: "+91-7086100215",
              email: "Brozcarassam@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Khanapara",
                addressLocality: "Guwahati",
                addressRegion: "Assam",
                postalCode: "781022",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.1158",
                longitude: "91.8152",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "23:00",
              },
              priceRange: "₹1,800 - ₹4,500/day",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-yellow-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
