import Image from "next/image";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import CarouselSSR from "../ui/carouselSSR";

function Carousel({ data }) {
  // Data Structure
  //
  // const data = {
  //   images: {
  //     image: {
  //       imageUrl: "https://www.tester.com",
  //       alt: "Alt Description",
  //     },
  //     //More images
  //   },
  // };
  return (
    <div id={data._key} className="w-full px-4 pb-6">
      <CarouselSSR>
        <CarouselContent className="-ml-4 pl-0">
          {data.images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative h-[555px] w-auto overflow-hidden rounded-lg bg-yellow-400">
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
      </CarouselSSR>
    </div>
  );
}

export default Carousel;
