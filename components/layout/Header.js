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
import {
  HEADER_NAV_LOGO_QUERY,
  HEADER_NAVIGATION_QUERY,
  HOMEPAGE_QUERY,
} from "@/src/lib/sanity/queries";
import { sanityFetch } from "@/src/sanity/lib/client";
import Link from "next/link";
import React from "react";
import { navUrlProcessor } from "./lib/helpers";

export default async function Header({ props }) {
  const {
    navItems,
    selectedAsset = "noAsset",
    websiteTitle,
  } = await sanityFetch({
    query: HEADER_NAVIGATION_QUERY,
  });
  const { slug: homepageSlug } = await sanityFetch({ query: HOMEPAGE_QUERY });
  //Helper to process the navItem Data
  // If "home": /
  // If internal: /slug
  // If internal + section: /slug#section
  // If external: url

  // Data Shape:
  // selectedAsset {
  // name: "",
  // imageUrl: "",
  // blurDataURL: "",
  // }

  let navItemsWithUrl = navUrlProcessor(navItems, homepageSlug);

  // const navTitle = {
  //   websiteTitle: websiteTitle || "Company Name",
  // };

  // if (selectedAsset !== "noAsset") {
  //   navTitle.selectedAsset = selectedAsset;
  // }

  function NavTitle() {
    if (selectedAsset !== "noAsset") {
      return (
        <div className="h-6 md:h-7">
          <img src={selectedAsset.imageUrl} className="h-full" />
        </div>
      );
    } else {
      <Link className="text-xl md:text-3xl" href="/">
        {websiteTitle}
      </Link>;
    }
  }

  return (
    <div className="sticky top-0 z-10 flex w-full flex-row justify-between border-b border-gray-800 bg-white px-5 py-5 text-black">
      <div className="flex flex-row items-center justify-start">
        <NavTitle />
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent
              className="h-full bg-white text-left text-black sm:text-left"
              side="top"
            >
              <SheetHeader>
                <SheetTitle className="text-inherit">
                  <NavTitle />
                </SheetTitle>
                {/* <SheetDescription>Here it is</SheetDescription> */}
              </SheetHeader>
              <div className="flex flex-col pt-8 text-3xl">
                {navItemsWithUrl.map((item) => {
                  return (
                    <div
                      key={item._key}
                      className="w-full border-t border-gray-800 py-2"
                    >
                      <SheetClose asChild>
                        <Link href={item.navUrl}>{item.text}</Link>
                      </SheetClose>
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden flex-row items-center gap-4 md:flex">
          {navItemsWithUrl.map((item) => {
            return (
              <Link key={item._key} href={item.navUrl}>
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
