import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function FeaturedProjects({ data }) {
  // let dataShape = {
  //   title: "Title",
  //   projects: [
  //     {
  //       title: "",
  //       caption: "",
  //       gallery: [{ alt: "", imageUrl: "" }],
  //     },
  //     {
  //       title: "",
  //       caption: "",
  //       gallery: [{ alt: "", imageUrl: "" }],
  //     },
  //   ],
  // };

  return (
    <div
      id={_.kebabCase(data.title)}
      className="justify-left flex h-auto w-full scroll-mt-10 flex-col bg-zinc-200 p-10 px-4 md:h-[750px] md:px-28"
    >
      <div className="flex justify-center pb-8 md:justify-start">
        <p className="text-sm font-bold">FEATURED PROPERTIES</p>
      </div>
      <div className="flex-column flex flex-wrap gap-9 md:flex-row md:flex-nowrap md:justify-center md:gap-6">
        {data.projects.map((project) => {
          return (
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="border-1 flex h-[450px] w-full flex-col md:w-1/3"
                  key={project._key}
                >
                  <Image
                    src={project.gallery[0].imageUrl}
                    alt={project.gallery[0].alt}
                    key={project.gallery[0]._key}
                    width={1200}
                    height={1200}
                    className="h-full object-cover"
                  />
                  <div className="flex h-auto w-full flex-col gap-1 pt-2 md:gap-3 md:pt-3">
                    <div className="flex w-full flex-row justify-between">
                      <h2 className="text-xl">{project.title}</h2>
                      <ArrowRight strokeWidth={1} />
                    </div>
                    <div className="border-t border-gray-300 pt-1">
                      <h3 className="text-sm text-gray-500">
                        {project.caption}
                      </h3>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-11/12 rounded-sm md:min-w-[800px]">
                <div className="h-auto md:w-full">
                  <div className="flex flex-col">
                    <h2 className="text-xl">{project.title}</h2>
                    <div className="border-t border-gray-300 pt-1">
                      <h3 className="text-sm text-gray-500">
                        {project.caption}
                      </h3>
                    </div>
                  </div>
                  <Carousel className="pt-4">
                    <CarouselContent className="-ml-4 pl-0">
                      {project.gallery.map((image, index) => (
                        <CarouselItem key={index} className="">
                          <div className="relative h-96 overflow-hidden rounded-lg bg-yellow-400 md:h-[555px] md:w-auto">
                            <Image
                              src={image.imageUrl}
                              alt={image.alt}
                              key={image._key}
                              width={1200}
                              height={1200}
                              className="h-full object-cover"
                            />
                            {image.alt}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
