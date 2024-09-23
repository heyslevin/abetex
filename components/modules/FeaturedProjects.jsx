import { ArrowRight, ArrowUpRight, Scroll } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import * as DialogRadix from "@radix-ui/react-dialog";
import { ScrollArea } from "../ui/scroll-area";
import { classNames } from "../utils/helpers";
import CircleIcon from "../utils/CircleIcon";
import { PortableText } from "next-sanity";
import { PortableParagraph } from "../fragments/PortableParagraph";
import _ from "lodash";
import { getImageDimensions } from "@sanity/asset-utils";

export default function FeaturedProjects({ data }) {
  // let dataShape = {
  //   title: "Title",
  //   heading: "Heading",
  //   projects: [
  //     {
  //       title: "",
  //       status: planning | construction | design | selling | sold,
  //       projectInfo: [
  //                     {title: "", text: ""},
  //                     {title: "", text: ""}
  //                    ],
  //       gallery: [{ alt: "", imageUrl: "" }],
  //       url: "https://www.firmalt.com",
  //       openInNewWindow: true,
  //     },
  //     {
  //       title: "",
  //       caption: "",
  //       gallery: [{ alt: "", imageUrl: "" }],
  //     },
  //   ],
  // };

  const STYLES = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  };

  const STATUS_COLOR = {
    planning: "text-rose-500",
    construction: "text-blue-700",
    design: "text-cyan-500",
    selling: "text-yellow-500",
    sold: "text-green-600",
  };

  const STATUS_TITLE = {
    planning: "Planning",
    construction: "Construction",
    design: "Design",
    selling: "Now Selling",
    sold: "Sold",
  };

  const itemsPerRow = data?.itemsPerRow;

  return (
    <main
      id={_.kebabCase(data?.title)}
      className="justify-left flex w-full scroll-mt-10 flex-col bg-zinc-200 p-10 px-4 font-body md:px-28"
    >
      <header className="flex justify-center pb-8 md:justify-start">
        <h2 className="text-4xl">{data?.heading || "Our Work"}</h2>
      </header>
      <section
        className={classNames(
          "grid grid-cols-1 gap-8 md:grid-cols-2",
          STYLES[itemsPerRow],
        )}
      >
        {data?.projects.map((project) => {
          return (
            <Dialog key={project._key}>
              <DialogTrigger asChild>
                <article
                  className={classNames(
                    "border-1 flex h-full cursor-pointer flex-col",
                  )}
                >
                  <Image
                    src={project.gallery[0].imageUrl}
                    alt={project.gallery[0].alt}
                    key={project.gallery[0]._key}
                    width={
                      getImageDimensions(project.gallery[0].imageUrl).width
                    }
                    height={
                      getImageDimensions(project.gallery[0].imageUrl).height
                    }
                    className="h-96 object-cover"
                    placeholder="blur"
                    blurDataURL={project.gallery[0].blurDataURL}
                  />
                  <section className="flex h-auto w-full items-center pt-2 md:pt-3">
                    <header className="flex-1">
                      <p className="text-base">{project?.title}</p>
                    </header>
                    <figcaption
                      className={classNames(
                        "flex w-fit flex-1 items-center gap-2",
                        STATUS_COLOR[project.status],
                      )}
                    >
                      <CircleIcon />
                      <p className="text-base text-black">
                        {STATUS_TITLE[project?.status]}
                      </p>
                    </figcaption>
                  </section>
                </article>
              </DialogTrigger>
              <DialogRadix.Overlay>
                <DialogContent className="w-11/12 rounded-sm md:min-w-[800px]">
                  <ScrollArea className="h-[90vh]">
                    <section className="h-auto md:w-full md:px-3">
                      <header className="flex flex-col">
                        <h2 className="pb-4 text-3xl">{project.title}</h2>
                        <figcaption className="pt-1">
                          <div className="flex w-full flex-col py-2 md:flex-row">
                            <p className="flex-1 text-base text-gray-400">
                              Status
                            </p>
                            <p className="flex-[3_0_0%] text-base">
                              {_.upperFirst(project.status)}
                            </p>
                          </div>
                          {/* Wrapper Div so "Last" styling can apply */}
                          <div>
                            {project.projectInfo &&
                              project.projectInfo.map((item) => (
                                <div
                                  key={item.title}
                                  className="flex w-full flex-col border-b border-gray-300 py-2 first:border-t last:border-b-0 md:flex-row"
                                >
                                  <p className="flex-1 text-base text-gray-400">
                                    {item.title}
                                  </p>
                                  <p className="flex-[3_0_0%] text-base">
                                    {item.text}
                                  </p>
                                </div>
                              ))}
                          </div>
                          {project.url && (
                            <div className="flex h-14 w-full items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-black">
                              <a href={project.url} className="">
                                {project.urlTitle || "More information"}
                              </a>
                              <ArrowUpRight strokeWidth={1} />
                            </div>
                          )}
                        </figcaption>
                      </header>
                      <Carousel className="pt-4">
                        <CarouselContent className="-ml-4 pl-0">
                          {project.gallery.map((image, index) => (
                            <CarouselItem key={index} className="">
                              <div className="relative h-96 overflow-hidden rounded-lg bg-yellow-400 md:h-[555px] md:w-auto">
                                <Image
                                  src={image.imageUrl}
                                  alt={image.alt}
                                  key={image._key}
                                  width={
                                    getImageDimensions(image.imageUrl).width
                                  }
                                  height={
                                    getImageDimensions(image.imageUrl).height
                                  }
                                  className="h-full object-cover"
                                  placeholder="blur"
                                  blurDataURL={image.blurDataURL}
                                  layout="responsive"
                                />
                                {image.alt}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </section>
                  </ScrollArea>
                </DialogContent>
              </DialogRadix.Overlay>
            </Dialog>
          );
        })}
      </section>
    </main>
  );
}
