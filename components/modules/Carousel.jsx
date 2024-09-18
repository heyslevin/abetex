import Image from "next/image";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import CarouselSSR from "../ui/carouselSSR";
import _ from "lodash";

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

  const singleImage = data.images.length === 1;

  // Renders differently depeding on quantity of images

  if (singleImage) {
    const image = data.images[0];
    return (
      <div
        id={_.kebabCase(data.title)}
        className="w-full scroll-mt-10 bg-white"
      >
        <div className="w-full bg-red-300">
          <Image
            src={image.imageUrl}
            alt={image.alt}
            key={image._key}
            width={1800}
            height={1800}
            className="h-full object-cover"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        id={_.kebabCase(data.title)}
        className="w-full scroll-mt-10 bg-white px-4 pb-6"
      >
        <CarouselSSR>
          <CarouselContent className="-ml-4 animate-fade-up pl-0">
            {data.images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative h-[555px] w-auto overflow-hidden rounded-lg">
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    key={image._key}
                    width={1200}
                    height={1200}
                    className="h-full object-cover"
                    placeholder="blur"
                    blurDataURL={image.blurDataURL}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselSSR>
      </div>
    );
  }
}

export default Carousel;
