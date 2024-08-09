"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

const CarouselSSR = ({ children, ...delegated }) => (
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

export default CarouselSSR;
