import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "ChargePath - Find. Charge. Go.",
//   description:
//     "ChargePath helps EV drivers find charging stations, plan smart routes, and manage charging — all in one app. Station owners can register and start earning.",
//   keywords: ["EV charging", "charging stations", "route planner", "ChargePath", "Sri Lanka EV"],
// };

export const metadata = {
  title: "ChargePath - EV Charging Station Finder & Route Planner in Sri Lanka",
  description: "Find EV charging stations near you, plan battery-aware routes, and pay from your wallet — all in one free app. 126+ stations across Sri Lanka.",
  keywords: ["EV charging Sri Lanka", "charging station finder", "EV route planner", "ChargePath", "electric vehicle app"],
  alternates: {
    canonical: "https://www.chargepath.lk/",
  },
  openGraph: {
    title: "ChargePath - EV Charging Station Finder & Route Planner in Sri Lanka",
    description: "Find EV charging stations near you, plan battery-aware routes, and pay from your wallet — all in one free app.",
    url: "https://www.chargepath.lk/",
    images: ["https://www.chargepath.lk/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <body
//         suppressHydrationWarning
//         className="bg-white text-slate-900 antialiased selection:bg-blue-200"
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-white text-slate-900 antialiased selection:bg-blue-200"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "ChargePath",
              operatingSystem: "ANDROID, IOS",
              applicationCategory: "TravelApplication",
              url: "https://www.chargepath.lk/",
              downloadUrl: "https://play.google.com/store/apps/details?id=com.chargepath.app",
              description: "ChargePath helps EV drivers find charging stations, plan battery-aware routes, and manage charging payments — all in one app.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "LKR",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ChargePath",
              url: "https://www.chargepath.lk/",
              logo: "https://www.chargepath.lk/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Panadura",
                addressCountry: "LK",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}