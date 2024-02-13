import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../pages/home/styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Button, Image } from "@nextui-org/react";

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="min-h-[40rem] mt-5 cursor-pointer"
      >
        <SwiperSlide className="w-full h-full flex flex-col justify-center items-center p-2 ">
          <div className="relative w-full h-full flex justify-center">
            <Image
              className="h-[40rem] w-full object-cover"
              alt="product image"
              src="https://www.fusionselvatica.com/cdn/shop/files/SHAMPOOANCESTRAL500ML.png?v=1705972376&width=700"
            />
            <div className="absolute bottom-10 w-full flex flex-col justify-center items-center text-center p-1 gap-1 z-10">
              <h2 className="text-white font-bold text-xl md:text-3xl bottom-10">
                Shampoo Ancestral PREMIUM
              </h2>
              <Button className="bg-black text-white rounded-lg hover:scale-110">
                PIDELO YA
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
