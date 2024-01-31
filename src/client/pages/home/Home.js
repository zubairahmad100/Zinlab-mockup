"use client";
import { PdfCard } from "@/client/components/card/PdfCard";
import { PdfCardData } from "@/data/PdfCardData";
import style from "@/styles/home.module.css";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import "swiper/modules/navigation.scss"; // Navigation module
import { Swiper, SwiperSlide } from "swiper/react";

export const Home = () => {
  return (
    <main>
      <section className="section_wrapper">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between ">
            <h2 className={`${style.slider_title}`}>Convert From PDF</h2>
            <button
              className={`d-flex align-items-center justify-content-center gap-2 ${style.all_btn}`}
            >
              All
              <Image
                src={"/images/right.svg"}
                alt="right-arrow"
                width={10}
                height={10}
              />
            </button>
          </div>
          <div className="relative">
            <Swiper
              navigation={{
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              modules={[Navigation]}
              autoplay={true}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              className="section_wrapper  px-5 "
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {PdfCardData.map((data, i) => (
                <SwiperSlide key={i + data?.title} className="section_wrapper">
                  <PdfCard
                    icon={data?.icon}
                    title={data?.title}
                    desc={data?.desc}
                  />
                </SwiperSlide>
              ))}
              <div
                className={`d-flex align-item-center justify-content-between ${style.arrow_btns}`}
              >
                <button
                  className={`icon-arrow-long-left review-swiper-button-prev prev_btn `}
                >
                  <Image
                    src={"/images/back.png"}
                    alt="prev"
                    width={30}
                    height={30}
                  />
                </button>

                <button
                  className={`icon-arrow-long-right review-swiper-button-next next_btn`}
                >
                  <Image
                    src={"/images/forward.png"}
                    alt="forward"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};
