"use client"
import Image from "next/image"
import AutoPlay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { dataBrands } from "./SlidersBrands.data"
import { Reveal } from "@/components/Shared/Reveal"

export function SliderBrands() {
  return (
    <Reveal position="bottom" className="flex gap-x-8 lg:gap-x-20 justify-center items-center lg:pb-10 mt-5 mb-8">
      <Carousel
        className="w-[30%] lg:w-[80%] mx-auto"
        plugins={[
          AutoPlay({
            delay: 1500,
          })
        ]}
      >
        <CarouselContent>
          {
            dataBrands.map(({url}) => (
              <CarouselItem key={url} className="basis-3/4 md:basis-2/4 lg:basis-1/6">
                <Image src={`/brands/${url}`} alt="Brand" width={300} height={300} className="object-contain aspect-[3/2]" />
              </CarouselItem>    
            ))
          }
        </CarouselContent>
      </Carousel>
    </Reveal>
  )
}