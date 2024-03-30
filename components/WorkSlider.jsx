import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Certificate 1",
          path: "a.png",
          link: "",
        },
        {
          title: "Certificate 2",
          path: "z.png",
          link: "",
        },
        {
          title: "Certificate 3",
          path: "e.png",
          link: "",
        },
        {
          title: "Certificate 4",
          path: "r.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 5",
          path: "t.png",
          link: "",
        },
        {
          title: "Certificate 6",
          path: "y.png",
          link: "",
        },
        {
          title: "Certificate 7",
          path: "u.png",
          link: "",
        },
        {
          title: "Certificate 8",
          path: "i.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 9",
          path: "o.png",
          link: "",
        },
        {
          title: "Certificate 10",
          path: "p.png",
          link: "",
        },
        {
          title: "Certificate 11",
          path: "q.png",
          link: "",
        },
        {
          title: "Certificate 12",
          path: "s.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 13",
          path: "d.png",
          link: "",
        },
        {
          title: "Certificate 14",
          path: "f.png",
          link: "",
        },
        {
          title: "Certificate 15",
          path: "g.png",
          link: "",
        },
        {
          title: "Certificate 16",
          path: "h.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 17",
          path: "j.png",
          link: "",
        },
        {
          title: "Certificate 18",
          path: "k.png",
          link: "",
        },
        {
          title: "Certificate 19",
          path: "l.png",
          link: "",
        },
        {
          title: "Certificate 20",
          path: "m.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 21",
          path: "w.png",
          link: "",
        },
        {
          title: "Certificate 22",
          path: "x.png",
          link: "",
        },
        {
          title: "Certificate 23",
          path: "11.png",
          link: "",
        },
        {
          title: "Certificate 24",
          path: "22.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 25",
          path: "33.png",
          link: "",
        },
        {
          title: "Certificate 26",
          path: "44.png",
          link: "",
        },
        {
          title: "Certificate 27",
          path: "55.png",
          link: "",
        },
        {
          title: "Certificate 28",
          path: "66.png",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 29",
          path: "77.png",
          link: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">Click here</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        to Verify
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
