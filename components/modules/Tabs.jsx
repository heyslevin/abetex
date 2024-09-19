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
import { Search } from "lucide-react";
import Icon from "../fragments/Icon";

export default function Tabs({ data }) {
  console.log({ tabs: data.tabs[0] });
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
  //      },
  //      icon: "icon-name" kebab case
  //   },

  return (
    <main
      id={_.kebabCase(data?.title)}
      className="flex w-full scroll-mt-10 flex-row justify-center bg-slate-100 p-10 px-4 md:h-[750px] md:px-28"
    >
      <TabsRadix
        className="flex w-full gap-9"
        orientation="vertical"
        defaultValue={data?.tabs[0]._key}
      >
        <section className="flex h-full w-full flex-col justify-between md:w-1/2">
          <heading className="flex flex-col pb-10">
            <div className="mb-4 flex max-w-fit flex-row items-center justify-center gap-1 pl-1">
              <CircleIcon />
              <p className="text-sm uppercase">{data?.caption}</p>
            </div>
            <h1 className="text-balance text-left text-5xl leading-none tracking-tight md:text-6xl">
              {data?.heading}
            </h1>
          </heading>
          <section className="">
            <TabsList className="font-body flex flex-col">
              {data?.tabs.map((tab) => {
                console.log(tab);
                return (
                  <TabsTrigger
                    className="group flex h-fit w-full flex-col content-start"
                    value={tab._key}
                    key={tab._key}
                  >
                    <Separator className="my-4 border-t group-rdx-state-active:border-black group-rdx-state-inactive:border-gray-400" />
                    <section className="flex h-full w-full flex-row items-center justify-between md:group-rdx-state-active:pb-9">
                      <h1 className="ml-[-2px] text-left text-2xl tracking-tight group-rdx-state-active:text-black group-rdx-state-inactive:text-neutral-500 md:text-5xl">
                        {tab.heading}
                      </h1>
                      <figure className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
                        <Icon name={tab.icon} />
                      </figure>
                    </section>
                    <TabsContent value={tab._key} className="flex">
                      <p className="pt-4 text-left group-rdx-state-inactive:text-neutral-500">
                        {tab.description}
                      </p>
                    </TabsContent>
                    {/* Mobile */}
                    <TabsContent
                      value={tab._key}
                      className="flex group-rdx-state-active:pt-5 md:hidden"
                    >
                      <Image
                        src={tab.image.imageUrl}
                        alt={tab.image.alt}
                        width={1200}
                        height={1200}
                        className="h-full rounded-md object-cover"
                        placeholder="blur"
                        blurDataURL={tab.image.blurDataURL}
                      />
                    </TabsContent>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </section>
        </section>
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
    </main>
  );
}
