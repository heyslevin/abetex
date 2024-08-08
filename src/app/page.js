import { client } from "../sanity/lib/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import CarouselSSR from "@/components/ui/carouselSSR";
import { SeparatorHorizontal } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TabData from "@/components/ui/tabData";

const DATA_QUERY = `*[_type == "page" && title == "Home"]
{
  heading, 
  caption,
      images[]{
    alt,
    "imageUrl": asset->url
  },
}[0]`;

export default async function Home() {
  const page = await client.fetch(DATA_QUERY);
  console.log(page.images[0].imageUrl);
  return (
    <>
      <div className="flex h-full w-full flex-col items-center bg-black">
        <div className="z-10 m-auto w-full max-w-xl px-5 py-8 xl:px-0">
          <a
            href="https://twitter.com/steventey/status/1613928948915920896"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Introducing Precedent
            </p>
          </a>
          <h1 className="font-display text-balance text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm md:text-7xl md:leading-[5rem]">
            {page.heading}
          </h1>
          <p className="mt-6 text-center text-white [text-wrap:balance] md:text-xl">
            {page.caption}
          </p>
          <div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-gray-500 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4 group-hover:text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L20 20H4L12 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Deploy to Vercel</p>
            </a>
            <a
              className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              href="https://github.com/steven-tey/precedent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="w-full pb-6">
          <CarouselSSR>
            <CarouselContent className="-ml-1">
              {page.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-[555px] w-auto overflow-hidden rounded-lg bg-yellow-400">
                    <Image
                      src={image.imageUrl}
                      width={1200}
                      height={1200}
                      className="h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </CarouselSSR>
        </div>

        <div className="flex h-[500px] w-full bg-black px-28">
          <div className="flex w-full flex-col items-start justify-center gap-y-10 text-white">
            <p className="inline w-7/12 text-left md:text-2xl">
              When it comes to the{" "}
              <a href="" className="border-b border-white hover:border-red-500">
                {" "}
                founders we work with
              </a>
              , we look for the unexpected. The groundbreakers and game-changers
              with a fire inside that can’t be dimmed or duplicated. Because at
              Index, we’re invested in the people behind great ideas.
            </p>

            <a
              className="text-md flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white px-5 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>See our philosophy</p>
            </a>
          </div>
        </div>
        <div className="flex h-[500px] w-full justify-center gap-9 bg-white p-10 px-28">
          <div className="flex h-full flex-1 flex-col content-center justify-center text-black">
            <h1 className="font-display text-balance text-left text-xl font-bold tracking-tight drop-shadow-sm md:text-6xl md:leading-[4rem]">
              Ideas don’t build businesses. People do.
            </h1>
            <p className="mt-6 inline w-10/12 text-left md:text-2xl">
              We have a great philosophy on world building and making homes that
              really stand out.
            </p>
            <a
              href=""
              className="mt-6 max-w-fit border-b border-black text-2xl hover:border-red-500"
            >
              Learn more
            </a>
          </div>
          <div className="flex-column flex-1 overflow-hidden rounded-lg text-black">
            <Image
              src={page.images[0].imageUrl}
              width={1200}
              height={1200}
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="flex h-[750px] w-full flex-row justify-center bg-slate-100 p-10 px-28">
          <Tabs
            className="flex w-full gap-9"
            orientation="vertical"
            defaultValue="omnichannel"
          >
            <div className="flex h-full w-2/5 flex-col justify-between">
              <div className="mb-auto flex flex-col gap-y-5">
                <p className="flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
                  For Customers
                </p>
                <h1 className="text-left text-5xl font-bold leading-[3rem] tracking-tight">
                  Instant service, exceptional experiences
                </h1>
              </div>
              <div className="flex">
                <TabsList>
                  <TabsTrigger
                    className="group flex flex-col content-start"
                    value="omnichannel"
                  >
                    <Separator className="group-rdx-state-active:bg-black" />
                    <div className="flex h-full flex-col py-4">
                      <h1 className="text-md group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500 text-left font-bold">
                        Omnichannel
                      </h1>
                      <p className="group-rdx-state-inactive:text-neutral-500 text-left">
                        Help customers find accurate answers when and where they
                        need them. Always there, 24/7
                      </p>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    className="group flex flex-col content-start"
                    value="help"
                  >
                    <Separator className="group-rdx-state-active:bg-black" />
                    <div className="flex h-full flex-col py-4">
                      <h1 className="text-md group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500 text-left font-bold">
                        Help Center
                      </h1>
                      <p className="group-rdx-state-inactive:text-neutral-500 text-left">
                        Provide 24/7 support and resolve 50% of support volume,
                        instantly. It's so much more than an AI chatbot.
                      </p>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            <div className="h-full w-3/5 overflow-hidden rounded-lg bg-blue-300">
              <TabsContent value="omnichannel">
                <Image
                  src={page.images[0].imageUrl}
                  width={1200}
                  height={1200}
                  className="h-full object-cover"
                />
              </TabsContent>
              <TabsContent value="help">
                <Image
                  src={page.images[1].imageUrl}
                  width={1200}
                  height={1200}
                  className="h-full object-cover"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
