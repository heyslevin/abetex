import { Separator } from "@/components/ui/separator";
import {
  Tabs as TabsRadix,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@radix-ui/react-tabs";
import _ from "lodash";
import Image from "next/image";
import CircleIcon from "../utils/CircleIcon";

export default function Tabs({ data }) {
  //Data Structure
  //
  // const data = {
  //   heading: "",
  //   caption: "",
  //   tabs: {
  //      tab: {
  //          heading: "",  slug: ""; //auto generated
  //          description: "",
  //      image: {
  //          imageUrl: "",
  //          alt: "",
  //     },
  //   },

  return (
    <div
      id={_.kebabCase(data?.title)}
      className="flex w-full scroll-mt-10 flex-row justify-center bg-slate-100 p-10 px-4 md:h-[750px] md:px-28"
    >
      <TabsRadix
        className="flex w-full gap-9"
        orientation="vertical"
        defaultValue={data?.tabs[0]._key}
      >
        <div className="flex h-full w-full flex-col justify-between md:w-1/2">
          <div className="flex flex-col pb-10 md:pb-24">
            <div className="mb-4 flex max-w-fit flex-row items-center justify-center gap-1 pl-1">
              <CircleIcon />
              <p className="text-sm uppercase">{data?.caption}</p>
            </div>
            <h1 className="text-balance text-left text-6xl leading-none tracking-tight">
              {data?.heading}
            </h1>
          </div>
          <div className="font-body flex">
            <TabsList>
              {data?.tabs.map((tab) => {
                return (
                  <TabsTrigger
                    className="group flex w-full flex-col content-start"
                    value={tab._key}
                    key={tab._key}
                  >
                    <Separator className="my-4 border group-rdx-state-active:border-black group-rdx-state-inactive:border-gray-400" />
                    <div className="flex h-full flex-col">
                      <h1 className="text-left text-5xl tracking-tight group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500 md:group-rdx-state-active:pb-9">
                        {tab.heading}
                      </h1>
                    </div>

                    <TabsContent value={tab._key} className="flex">
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
                        {tab.description}
                      </p>
                    </TabsContent>

                    {/* Mobile */}
                    <TabsContent
                      value={tab._key}
                      className="flex pb-4 md:hidden"
                    >
                      <Image
                        src={tab.image.imageUrl}
                        alt={tab.image.alt}
                        width={1200}
                        height={1200}
                        className="h-full object-cover"
                        placeholder="blur"
                        blurDataURL={tab.image.blurDataURL}
                      />
                    </TabsContent>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </div>
        <div className="hidden h-full w-3/5 overflow-hidden rounded-lg bg-blue-300 sm:hidden md:flex">
          {data?.tabs.map((tab) => {
            return (
              <TabsContent value={tab._key} key={tab._key}>
                <Image
                  src={tab.image.imageUrl}
                  alt={tab.image.alt}
                  width={1200}
                  height={1200}
                  className="h-full object-cover"
                  placeholder="blur"
                  blurDataURL={tab.image.blurDataURL}
                />
              </TabsContent>
            );
          })}
        </div>
      </TabsRadix>
    </div>
  );
}
