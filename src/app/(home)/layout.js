import "@/src/app/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import localFont from "next/font/local";

import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export const metadata = {
  title: "Abetex Capital",
  description: "Real Estate Developer",
};

const signifier = localFont({
  src: "../fonts/sign-light.woff2",
  display: "swap",
  variable: "--font-signifier",
});

const llsub = localFont({
  src: [
    {
      path: "../fonts/llsub-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/llsub-reg.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-llsub",
});

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${signifier.variable} ${llsub.variable}`}
    >
      <body className="">
        <Header />
        <div className="flex h-full w-full flex-col items-center bg-black">
          {children}
        </div>
        <Footer />
        {draftMode().isEnabled && (
          <a
            className="fixed bottom-0 right-0 m-4 bg-blue-500 p-4 text-white"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
