import React from "react";
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
        className="h-screen cursor-pointer"
      >
        <SwiperSlide className="flex flex-col justify-center items-center pt-[8rem]">
          <div className="relative w-full h-full flex justify-center">
            <Image
            style={{width: "100vw", height:"80vh", objectFit:"cover", borderRadius:"0px", padding: "0px"}}
              alt="product image"
              src="https://www.fusionselvatica.com/cdn/shop/files/ANCESTRAL_WEB_DESKTOP.png?v=1702177026&width=1800"
            />
            <div className="absolute bottom-14 w-full flex justify-center items-center text-center p-1 gap-1 z-10">
              <button className="bg-black text-green-100 font-bold rounded-lg hover:scale-110 p-3 duration-500">
                PIDELO YA
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
