import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ChargePath – Find. Charge. Go.",
  description:
    "ChargePath helps EV drivers find charging stations, plan smart routes, and manage charging — all in one app. Station owners can register and start earning.",
  keywords: ["EV charging", "charging stations", "route planner", "ChargePath", "Sri Lanka EV"],
};

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
        {children}
      </body>
    </html>
  );
}