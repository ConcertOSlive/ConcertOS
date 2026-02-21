import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConcertOS",
  description:
    "Host ticketed live concerts for your global audience. Direct. Premium. Borderless.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
