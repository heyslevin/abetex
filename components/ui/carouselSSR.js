"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

function CarouselSSR({ children, ...delegated }) {
  return (
    <Carousel
      {...delegated}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      {children}
    </Carousel>
  );
}

export default CarouselSSR;
