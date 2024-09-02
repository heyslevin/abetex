import { MenuDivider } from "@sanity/ui";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { HEADER_NAVIGATION_QUERY } from "@/src/lib/sanity/queries";
import { sanityFetch } from "@/src/sanity/lib/client";
import Link from "next/link";
import React from "react";

export default async function Header({ props }) {
  const { navItems } = await sanityFetch({ query: HEADER_NAVIGATION_QUERY });
  console.log({ headerData: JSON.stringify(navItems) });
  //Process the navItem Data
  // If internal: /
  // If internal + section: /+section
  // If external: url
  return (
    <div className="flex w-full flex-row justify-between border-b border-gray-800 bg-black px-5 py-5 text-white">
      <div className="flex">Awesome Company</div>
      <div className="flex flex-row gap-5">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent
              className="h-full bg-black text-left text-white sm:text-left"
              side="top"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Awesome Company</SheetTitle>
                {/* <SheetDescription>Here it is</SheetDescription> */}
              </SheetHeader>
              <div className="flex flex-col pt-8 text-3xl">
                {navItems.map((item) => {
                  return (
                    <div
                      key={item._key}
                      className="w-full border-t border-gray-800 py-2"
                    >
                      <SheetClose asChild>
                        <Link href={`/${item.slug}#${item.pagePortionKey}`}>
                          {item.text}
                        </Link>
                      </SheetClose>
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden flex-row gap-4 md:flex">
          {navItems.map((item) => {
            return (
              <Link
                key={item._key}
                href={`/${item.slug}#${item.pagePortionKey}`}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
