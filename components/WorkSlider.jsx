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
          link: "https://skillshop.exceedlms.com/profiles/541afa54bc634a9d99ea8a188fcccba7",
        },
        {
          title: "Certificate 2",
          path: "z.png",
          link: "https://verify.mygreatlearning.com/DELSSKFN",
        },
        {
          title: "Certificate 3",
          path: "e.png",
          link: "https://www.life-global.org/certificate/b35ce3ed-526d-47be-a52a-6c0da100044e",
        },
        {
          title: "Certificate 4",
          path: "r.png",
          link: "https://www.hackerrank.com/certificates/acf18c1a9ab2",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 5",
          path: "t.png",
          link: "https://verify.mygreatlearning.com/NUHNWQKZ",
        },
        {
          title: "Certificate 6",
          path: "y.png",
          link: "https://verify.mygreatlearning.com/UIVBRNIY",
        },
        {
          title: "Certificate 7",
          path: "u.png",
          link: "https://verify.mygreatlearning.com/BJGLHRKK",
        },
        {
          title: "Certificate 8",
          path: "i.png",
          link: "https://verify.mygreatlearning.com/VTQURZBW",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 9",
          path: "o.png",
          link: "https://www.life-global.org/certificate/071e78c2-4b0a-4626-8727-f48a4cf538f6",
        },
        {
          title: "Certificate 10",
          path: "p.png",
          link: "https://raw.githubusercontent.com/itachi10110/modern-portfolio/main/public/pp.png",
        },
        {
          title: "Certificate 11",
          path: "q.png",
          link: "https://www.life-global.org/certificate/da0d4d43-0591-4758-a186-c4f00a5c4f03",
        },
        {
          title: "Certificate 12",
          path: "s.png",
          link: "https://www.life-global.org/certificate/cf133396-0c65-4501-a665-d9e82e61a54b",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 13",
          path: "d.png",
          link: "https://www.hackerrank.com/certificates/2d0401311682",
        },
        {
          title: "Certificate 14",
          path: "f.png",
          link: "https://verify.mygreatlearning.com/EFEVJEQP",
        },
        {
          title: "Certificate 15",
          path: "g.png",
          link: "https://verify.mygreatlearning.com/LIQDOUKJ",
        },
        {
          title: "Certificate 16",
          path: "h.png",
          link: "https://www.hackerrank.com/certificates/48c79a0d1e00",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 17",
          path: "j.png",
          link: "https://www.life-global.org/certificate/9c28b389-31c5-4e90-9cab-5f1f8e5784c8",
        },
        {
          title: "Certificate 18",
          path: "k.png",
          link: "https://www.life-global.org/certificate/70e4e2ef-817d-4a51-800c-01de3bd90eb8",
        },
        {
          title: "Certificate 19",
          path: "l.png",
          link: "https://www.life-global.org/certificate/cfe45516-0999-4e03-acad-6a99324f7ed6",
        },
        {
          title: "Certificate 20",
          path: "m.png",
          link: "https://www.life-global.org/certificate/6fbfb506-cb50-4d41-9aa0-a27465172716",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 21",
          path: "w.png",
          link: "https://verify.mygreatlearning.com/ZAUZQCXT",
        },
        {
          title: "Certificate 22",
          path: "x.png",
          link: "https://verify.mygreatlearning.com/OMCRHANT",
        },
        {
          title: "Certificate 23",
          path: "11.png",
          link: "https://api.busuu.com/anon/certificates/e8de69192b24df9bb3e89818781927b9?",
        },
        {
          title: "Certificate 24",
          path: "22.png",
          link: "https://raw.githubusercontent.com/itachi10110/modern-portfolio/main/public/2.png",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 25",
          path: "33.jpg",
          link: "https://raw.githubusercontent.com/itachi10110/modern-portfolio/main/public/3.jpg",
        },
        {
          title: "Certificate 26",
          path: "44.png",
          link: "https://raw.githubusercontent.com/itachi10110/modern-portfolio/main/public/4.png",
        },
        {
          title: "Certificate 27",
          path: "55.png",
          link: "https://raw.githubusercontent.com/itachi10110/modern-portfolio/main/public/5.png",
        },
        {
          title: "Certificate 28",
          path: "66.png",
          link: "https://raw.githubusercontent.com/itachi10110/modern-portfolio/main/public/6.png",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 29",
          path: "77.jpg",
          link: "https://studio.code.org/print_certificates/eyJuYW1lIjoiU2FsYWggTGF6b3VhY2giLCJjb3Vyc2UiOiJob3Vyb2Zjb2RlIiwiZG9ub3IiOiJJbWFnaW5hYmxlIEZ1dHVyZXMifQ",
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
