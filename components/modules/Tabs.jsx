import { Separator } from "@radix-ui/react-separator";
import {
  Tabs as TabsRadix,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@radix-ui/react-tabs";
import Image from "next/image";

export default function Tabs({ data }) {
  console.log(data.tabs);
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
    <div className="flex h-[750px] w-full flex-row justify-center bg-slate-100 p-10 px-28">
      <TabsRadix
        className="flex w-full gap-9"
        orientation="vertical"
        defaultValue={data.tabs[0]._key}
      >
        <div className="flex h-full w-2/5 flex-col justify-between">
          <div className="mb-auto flex flex-col gap-y-5">
            <p className="flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-red-500 px-7 py-2 text-sm font-semibold text-black">
              {data.caption}
            </p>
            <h1 className="text-left text-5xl font-bold leading-[3rem] tracking-tight">
              {data.heading}
            </h1>
          </div>
          <div className="flex">
            <TabsList>
              {data.tabs.map((tab) => {
                return (
                  <TabsTrigger
                    className="group flex flex-col content-start"
                    value={tab._key}
                    key={tab._key}
                  >
                    <Separator className="group-rdx-state-active:bg-black" />
                    <div className="flex h-full flex-col py-4">
                      <h1 className="text-md text-left font-bold group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500">
                        {tab.heading}
                      </h1>
                      <p className="text-left group-rdx-state-inactive:text-neutral-500">
                        {tab.text}
                      </p>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </div>
        <div className="h-full w-3/5 overflow-hidden rounded-lg bg-blue-300">
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
