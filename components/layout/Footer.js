import { sanityFetch } from "@/src/sanity/lib/client";
import { Separator } from "../ui/separator";
import { FOOTER_QUERY, GLOBAL_SETTINGS_QUERY } from "@/src/lib/sanity/queries";
import { Phone } from "lucide-react";

export default async function Footer() {
  const data = await sanityFetch({ query: GLOBAL_SETTINGS_QUERY });
  const { selectedAsset = "noAsset", websiteTitle } = await sanityFetch({
    query: FOOTER_QUERY,
  });

  // const data = {
  //   title: "Beautiful Website Corporation",
  //   socials: {
  //     ig: "#",
  //     x: "#",
  //     li: "#",
  //   },
  //   address: "Sydney (Warrang) The Commons 388 George Street Sydney NSW 2000",
  //   privacyPolicy: {
  //     fileUrl: "#",
  //   },
  //   legal: {
  //     fileUrl: "#",
  //   },
  // };

  function WebsiteTitle() {
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
    <main className="flex h-auto flex-col bg-primary px-4 py-10 text-white md:h-[555px] md:px-28">
      <section className="flex w-full text-white">
        <img src={selectedAsset.imageUrl} className="w-full" />
      </section>
      <Separator className="my-5 mt-20 bg-white" />
      <section className="flex w-full flex-col gap-6 md:flex-row">
        <div className="flex flex-col md:w-full md:flex-row">
          <div className="flex w-1/2 flex-row">
            <div className="flex w-1/2 flex-col md:w-1/2">
              {data?.socials?.instagram && (
                <a href={data?.socials.instagram} className="">
                  Instagram
                </a>
              )}
              {data?.socials?.linkedIn && (
                <a href={data?.socials.linkedIn} className="">
                  LinkedIn
                </a>
              )}
              {data?.socials?.x && (
                <a href={data?.socials.x} className="">
                  X
                </a>
              )}
            </div>
            <div className="flex w-1/2 flex-col md:w-1/2">
              <a href={data?.privacyPolicy?.fileUrl || "#"}>Privacy Policy</a>
              <a href={data?.legal?.fileUrl || "#"}>Legal</a>
            </div>
          </div>
          <div className="flex w-full grow text-balance pt-12 md:w-1/2 md:pt-0">
            <p>{data?.address}</p>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-row pt-14 md:mt-16">
        <div className="flex w-1/2">
          <p className="text-sm">Copyright {new Date().getFullYear()}</p>
        </div>
        <div className="flex w-1/2 justify-end">
          <p className="text-sm">
            Code by{" "}
            <a href="https://www.firmalt.com" className="border-b border-white">
              Firmalt
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
