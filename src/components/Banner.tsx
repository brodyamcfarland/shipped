import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../assets/ShippedBanner1.png";
import Banner2 from "../assets/ShippedBanner2.png";
import Banner3 from "../assets/ShippedBanner3.png";

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <Image loading="lazy" src={Banner3} alt="" />
                </div>
                <div>
                    <Image loading="lazy" src={Banner2} alt="" />
                </div>
                <div>
                    <Image loading="lazy" src={Banner1} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
