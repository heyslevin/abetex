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
          <p className="mt-6 text-balance text-center text-white md:text-xl">
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
        <div className="w-full px-4 pb-6">
          <CarouselSSR>
            <CarouselContent className="-ml-4 pl-0">
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

        {/* Paragraph Section */}
        <div className="flex h-[500px] w-full bg-black px-4 md:px-28">
          <div className="flex w-full flex-col items-start justify-center gap-y-10 text-white">
            <div className="inline w-full text-left text-xl md:w-7/12 md:text-2xl">
              <PortableText
                value={page.textBlock}
                components={myPortableTextComponents}
              />
            </div>
            {page.textBlockLink ? (
              <a
                className="text-md flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white px-10 py-3 text-white transition-colors hover:border-white hover:bg-white hover:text-black md:px-5 md:py-2"
                target="_blank"
                rel="noopener noreferrer"
                href={page.textBlockLink}
              >
                <p>{page.textBlockLinkTitle}</p>
              </a>
            ) : null}
          </div>
        </div>

        {/* SideText and Image Section */}
        <div className="flex h-auto w-full flex-col-reverse justify-center gap-9 bg-white p-10 px-4 md:h-[500px] md:flex-row md:px-28">
          <div className="flex h-full flex-1 flex-col content-center justify-center gap-6 text-black md:gap-6">
            <h1 className="font-display text-balance text-left text-3xl font-bold leading-none tracking-tight drop-shadow-sm md:text-4xl md:leading-[2rem]">
              Ideas don’t build businesses. People do.
            </h1>
            <p className="inline w-10/12 text-left text-lg md:text-xl">
              We have a great philosophy on world building and making homes that
              really stand out.
            </p>
            <a
              href=""
              className="max-w-fit border-b border-black pt-4 text-lg hover:border-red-500 md:text-xl"
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
        {/* Metrics */}
        <div className="justify-left flex h-auto w-full flex-col bg-zinc-200 p-10 px-4 md:h-[750px] md:px-28">
          <div className="flex flex-col justify-center pb-10 md:items-center md:pb-24">
            <p className="mb-4 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
              For Customers
            </p>
            <h1 className="text-left text-5xl font-bold leading-[3rem] tracking-tight">
              Instant service, exceptional experiences
            </h1>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-center">
            <div className="">
              <div className="border-1 flex h-auto flex-col justify-between gap-8 rounded-lg border border-black p-3 md:h-80">
                <div className="">
                  <h2 className="ml-[-6px] text-7xl md:text-8xl">2x</h2>
                  <h3 className="">on average per day</h3>
                </div>
                <p className="text-lg">
                  Up to 80% in cost savings as compared to in-house service
                </p>
              </div>
            </div>
            <div className="">
              <div className="border-1 flex h-auto flex-col justify-between gap-8 rounded-lg border border-black p-3 md:h-80">
                <div className="">
                  <h2 className="ml-[-6px] text-7xl md:text-8xl">2x</h2>
                  <h3 className="">on average per day</h3>
                </div>
                <p className="text-lg">
                  Up to 80% in cost savings as compared to in-house service
                </p>
              </div>
            </div>
            <div className="">
              <div className="border-1 flex h-auto flex-col justify-between gap-8 rounded-lg border border-black p-3 md:h-80">
                <div className="">
                  <h2 className="ml-[-6px] text-7xl md:text-8xl">2x</h2>
                  <h3 className="">on average per day</h3>
                </div>
                <p className="text-lg">
                  Up to 80% in cost savings as compared to in-house service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex w-full flex-row justify-center bg-slate-100 p-10 px-4 md:h-[750px] md:px-28">
          <Tabs
            className="flex w-full gap-9"
            orientation="vertical"
            defaultValue="omnichannel"
          >
            <div className="flex h-full w-full flex-col justify-between md:w-2/5">
              <div className="flex flex-col justify-center gap-6 pb-10 md:items-start md:pb-24">
                <p className="flex max-w-fit overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
                  For Customers
                </p>
                <h1 className="text-left text-4xl font-bold leading-none tracking-tight md:text-5xl md:leading-[3rem]">
                  Instant service, exceptional experiences
                </h1>
              </div>
              <div className="flex">
                <TabsList>
                  <TabsTrigger
                    className="group flex flex-col content-start"
                    value="omnichannel"
                  >
                    <Separator className="border group-rdx-state-active:border-black group-rdx-state-inactive:border-gray-400" />
                    <div className="flex h-full flex-col py-4">
                      <h1 className="text-md text-left font-bold group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500">
                        Omnichannel
                      </h1>
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
                        Help customers find accurate answers when and where they
                        need them. Always there, 24/7
                      </p>
                    </div>
                    <TabsContent
                      value="omnichannel"
                      className="flex pb-4 md:hidden"
                    >
                      <Image
                        src={page.images[0].imageUrl}
                        alt={page.images[0].alt}
                        width={1200}
                        height={1200}
                        className="h-full object-cover"
                      />
                    </TabsContent>
                  </TabsTrigger>

                  <TabsTrigger
                    className="group flex flex-col content-start"
                    value="help"
                  >
                    <Separator className="border group-rdx-state-active:border-black group-rdx-state-inactive:border-gray-400" />
                    <div className="flex h-full flex-col py-4">
                      <h1 className="text-md text-left font-bold group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500">
                        Help Center
                      </h1>
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
                        Provide 24/7 support and resolve 50% of support volume,
                        instantly. It's so much more than an AI chatbot.
                      </p>
                    </div>
                    <TabsContent value="help" className="flex pb-4 md:hidden">
                      <Image
                        src={page.images[1].imageUrl}
                        alt={page.images[0].alt}
                        width={1200}
                        height={1200}
                        className="h-full object-cover"
                      />
                    </TabsContent>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            <div className="hidden h-full w-3/5 overflow-hidden rounded-lg bg-blue-300 sm:hidden md:flex">
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
        <div className="flex h-auto w-full flex-col items-center justify-center bg-zinc-200 px-4 py-24 md:px-28">
          <div className="flex h-full w-full flex-col gap-12 md:flex-row md:gap-4">
            <div className="justify-start md:w-1/2">
              <h2 className="text-4xl font-bold md:text-6xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="h-full md:w-1/2">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-b border-black hover:text-gray-700"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl">
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
                  <AccordionTrigger className="text-left text-lg md:text-xl">
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
                  <AccordionTrigger className="text-left text-lg md:text-xl">
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
                  <AccordionTrigger className="text-left text-lg md:text-xl">
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
        <div className="flex h-auto w-full flex-col gap-12 px-4 py-24 md:flex-row md:px-28">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Contact us
            </h2>
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex h-auto flex-col bg-slate-500 px-4 py-10 md:h-[555px] md:px-28">
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="flex w-1/2 flex-col">
            <p className="text-xl md:text-3xl">
              Beautiful Website <br /> Corporation
            </p>
          </div>
          <div className="flex flex-col md:w-1/2 md:flex-row">
            <div className="flex w-1/2 flex-row">
              <div className="flex w-1/2 flex-col md:w-1/2">
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
              <div className="flex w-1/2 flex-col md:w-1/2">
                <a href="">Privacy Policy</a>
                <a href="">Legal</a>
              </div>
            </div>
            <div className="flex w-full grow text-balance pt-12 md:w-1/2 md:pt-0">
              <p>
                Sydney (Warrang) The Commons 388 George Street Sydney NSW 2000
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-5 mt-20 bg-slate-800 md:mt-60" />
        <div className="flex w-full flex-row">
          <div className="flex w-1/2">
            <p className="text-sm">Copyright 2024</p>
          </div>
          <div className="flex w-1/2 justify-end">
            <p className="text-sm">
              Code by{" "}
              <a href="" className="border-b border-black">
                Mr.Tortilla
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
