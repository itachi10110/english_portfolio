import {
  RxCrop,
  RxLockOpen2,
  RxDesktop,
  RxLockClosed,
  RxRocket,
  RxArrowTopRight,
  RxLinkBreak2,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxLockOpen2,
    title: "Ethical Hacking",
    description: "Ethical hacking protects computer systems by finding and fixing security weaknesses.",
  },
  {
    Icon: RxLockClosed,
    title: "Encryption",
    description: "Encrypt means Protect , Converting sensitive data to unreadable codes . One of the most important parts in Information Security.",
  },
  {
    Icon: RxDesktop,
    title: "Coding",
    description: "Coding is like giving instructions to a computer using a special language to make it do what you want.",
  },
  {
    Icon: RxLinkBreak2,
    title: "Problem Solving",
    description: "The Best Developer is The Best Problem-Solver .",
  },
  {
    Icon: RxCrop,
    title: "Design",
    description: "Coding and Design are the best duo.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
