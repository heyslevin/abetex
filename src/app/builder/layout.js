import { Inter } from "next/font/google";
import "@/src/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Page Builder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full w-full flex-col items-center bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}