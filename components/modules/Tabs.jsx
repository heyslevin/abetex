import { Separator } from "@/components/ui/separator";
import {
  Tabs as TabsRadix,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@radix-ui/react-tabs";
import _ from "lodash";
import Image from "next/image";

export default function Tabs({ data }) {
  //Data Structure
  //
  // const data = {
  //   heading: "",
  //   caption: "",
  //   tabs: {
  //      tab: {
  //          heading: "",  slug: ""; //auto generated
  //          text: "",
  //      image: {
  //          imageUrl: "",
  //          alt: "",
  //     },
  //   },

  return (
    <div
      id={_.kebabCase(data.title)}
      className="flex w-full scroll-mt-10 flex-row justify-center bg-slate-100 p-10 px-4 md:h-[750px] md:px-28"
    >
      <TabsRadix
        className="flex w-full gap-9"
        orientation="vertical"
        defaultValue={data.tabs[0]._key}
      >
        <div className="flex h-full w-full flex-col justify-between md:w-2/5">
          <div className="flex flex-col gap-6 pb-10 md:pb-24">
            <p className="max-w-fit rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
              {data.caption}
            </p>
            <h1 className="flex text-left text-4xl font-bold leading-none tracking-tight md:text-5xl md:leading-[3rem]">
              {data.heading}
            </h1>
          </div>
          <div className="flex">
            <TabsList>
              {data.tabs.map((tab) => {
                return (
                  <TabsTrigger
                    className="group flex w-full flex-col content-start"
                    value={tab._key}
                    key={tab._key}
                  >
                    <Separator className="border group-rdx-state-active:border-black group-rdx-state-inactive:border-gray-400" />
                    <div className="flex h-full flex-col py-4">
                      <h1 className="text-md text-left font-bold group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500">
                        {tab.heading}
                      </h1>
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
                        {tab.text}
                      </p>
                    </div>
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
                      />
                    </TabsContent>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </div>
        <div className="hidden h-full w-3/5 overflow-hidden rounded-lg bg-blue-300 sm:hidden md:flex">
          {data.tabs.map((tab) => {
            return (
              <TabsContent value={tab._key} key={tab._key}>
                <Image
                  src={tab.image.imageUrl}
                  alt={tab.image.alt}
                  width={1200}
                  height={1200}
                  className="h-full object-cover"
                />
              </TabsContent>
            );
          })}
        </div>
      </TabsRadix>
    </div>
  );
}
