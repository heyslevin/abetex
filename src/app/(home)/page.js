import { client, sanityFetch } from "../../sanity/lib/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import CarouselSSR from "@/components/ui/carouselSSR";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/ContactForm";
import { PortableText } from "next-sanity";

const DATA_QUERY = `*[_type == "page" && title == "Home"]
{
  heading, 
  caption,
  images[]{
    alt,
    "imageUrl": asset->url
  },
  textBlock,
  textBlockLink,
  textBlockLinkTitle,
}[0]`;

export default async function Home() {
  const page = await sanityFetch({ query: DATA_QUERY });
  console.log(page.images[0].imageUrl);

  const myPortableTextComponents = {
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("?")
          ? "norefferer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className="border-b border-white hover:border-red-500"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      {/* Wrapper */}
      <div className="flex h-full w-full flex-col items-center bg-black">
        {/* Hero */}
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
        {/* Image Gallery */}
        <div className="w-full pb-6">
          <CarouselSSR>
            <CarouselContent className="-ml-1">
              {page.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-[555px] w-auto overflow-hidden rounded-lg bg-yellow-400">
                    <Image
                      src={image.imageUrl}
                      alt={image.alt}
                      width={1200}
                      height={1200}
                      className="h-full object-cover"
                    />
                    {image.alt}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </CarouselSSR>
        </div>

        <div className="flex h-[500px] w-full bg-black px-28">
          <div className="flex w-full flex-col items-start justify-center gap-y-10 text-white">
            <div className="inline w-7/12 text-left md:text-2xl">
              <PortableText
                value={page.textBlock}
                components={myPortableTextComponents}
              />
            </div>
            {page.textBlockLink ? (
              <a
                className="text-md flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white px-5 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
                href={page.textBlockLink}
              >
                <p>{page.textBlockLinkTitle}</p>
              </a>
            ) : null}
          </div>
        </div>
        <div className="flex h-[500px] w-full justify-center gap-9 bg-white p-10 px-28">
          <div className="flex h-full flex-1 flex-col content-center justify-center text-black">
            <h1 className="font-display text-balance text-left text-xl font-bold tracking-tight drop-shadow-sm md:text-4xl md:leading-[2rem]">
              Ideas don’t build businesses. People do.
            </h1>
            <p className="mt-6 inline w-10/12 text-left md:text-xl">
              We have a great philosophy on world building and making homes that
              really stand out.
            </p>
            <a
              href=""
              className="mt-6 max-w-fit border-b border-black text-xl hover:border-red-500"
            >
              Learn more
            </a>
          </div>
          <div className="flex-column flex-1 overflow-hidden rounded-lg text-black">
            <Image
              src={page.images[0].imageUrl}
              alt={page.images[0].alt}
              width={1200}
              height={1200}
              className="h-full object-cover"
            />
          </div>
        </div>
        {/* Data points */}
        <div className="flex h-[750px] w-full flex-col items-center justify-center bg-zinc-200 p-10 px-28">
          <p className="mb-4 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
            For Customers
          </p>
          <h1 className="text-left text-5xl font-bold leading-[3rem] tracking-tight">
            Instant service, exceptional experiences
          </h1>
          <div className="mt-24 flex w-full flex-row gap-5">
            <div className="border-1 flex h-80 w-1/3 flex-col justify-between rounded-lg border border-black p-3">
              <div className="">
                <h2 className="ml-[-6px] text-8xl">2x</h2>
                <h3 className="">on average per day</h3>
              </div>
              <p className="text-lg">
                Up to 80% in cost savings as compared to in-house service
              </p>
            </div>
            <div className="border-1 flex h-80 w-1/3 flex-col justify-between rounded-lg border border-black p-3">
              <div className="">
                <h2 className="ml-[-6px] text-8xl">32%</h2>
                <h3 className="">on average per day</h3>
              </div>
              <p className="text-lg">
                Keep all your systems in the know. And we believe we've only
                scratched the surface.
              </p>
            </div>{" "}
            <div className="border-1 flex h-80 w-1/3 flex-col justify-between rounded-lg border border-black p-3">
              <div className="">
                <h2 className="ml-[-6px] text-8xl">$1bn</h2>
                <h3 className="">on average per day</h3>
              </div>
              <p className="text-lg">
                With this technology there are so many rich opportunties to help
                care staff.
              </p>
            </div>
          </div>
        </div>
        {/* Tabs */}
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
                      <h1 className="text-md text-left font-bold group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500">
                        Omnichannel
                      </h1>
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
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
                      <h1 className="text-md text-left font-bold group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500">
                        Help Center
                      </h1>
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
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
                  alt={page.images[0].alt}
                  width={1200}
                  height={1200}
                  className="h-full object-cover"
                />
              </TabsContent>
              <TabsContent value="help">
                <Image
                  src={page.images[1].imageUrl}
                  alt={page.images[0].alt}
                  width={1200}
                  height={1200}
                  className="h-full object-cover"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        {/* Accordion */}
        <div className="flex h-auto w-full flex-col items-center justify-center bg-zinc-200 px-28 py-24">
          <div className="flex h-full w-full flex-row gap-4">
            <div className="flex h-full w-1/2 flex-col justify-start">
              <h2 className="text-6xl">Frequently asked questions</h2>
            </div>
            <div className="h-full w-1/2">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-b border-black hover:text-gray-700"
                >
                  <AccordionTrigger className="text-left text-xl">
                    How much does it cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border-b border-black hover:text-gray-700"
                >
                  <AccordionTrigger className="text-left text-xl">
                    Can your booking software system replace our reservations
                    diary?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border-b border-black hover:text-gray-700"
                >
                  <AccordionTrigger className="text-left text-xl">
                    Should I have a cash register or a digital cash register for
                    my restaurant?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border-b border-black hover:text-gray-700"
                >
                  <AccordionTrigger className="text-left text-xl">
                    Is your booking application suitable for all types of
                    restaurants?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-600">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="flex h-auto w-full flex-row px-28 py-24">
          <div className="w-1/2">
            <h2 className="text-6xl text-white">Contact us</h2>
          </div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex h-[555px] flex-col bg-slate-500 px-28 py-10">
        <div className="flex w-full flex-row gap-6">
          <div className="flex w-1/2 flex-col">
            <p className="text-3xl">
              Beautiful Website <br /> Corporation
            </p>
          </div>
          <div className="flex w-1/2 flex-row">
            <div className="flex w-1/3 flex-col">
              <a href="#" className="">
                Instagram
              </a>
              <a href="#" className="">
                LinkedIn
              </a>
              <a href="#" className="">
                X
              </a>
            </div>
            <div className="flex w-1/3 flex-col">
              <a href="">Privacy Policy</a>
              <a href="">Legal</a>
            </div>
            <div className="w-1/3">
              <p>
                Sydney (Warrang) The Commons 388 George Street Sydney NSW 2000
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-5 mt-60 bg-slate-800" />
        <div className="flex w-full flex-row">
          <div className="flex w-1/2">
            <p className="text-sm">Copyright 2024</p>
          </div>
          <div className="flex w-1/2 justify-end">
            <p className="text-sm">
              Code by{" "}
              <a href="" className="border-b border-black">
                Slevin
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
