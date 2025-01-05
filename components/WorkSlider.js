// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'ERA Solutions',
          path: 'https://www.erasolutions.us/', // External URL
        },
        {
          title: 'Title 2',
          path: '/thumb2.jpg', // Local images
        },
        {
          title: 'Title 3',
          path: '/thumb3.jpg',
        },
        {
          title: 'Title 4',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'Title 5',
          path: '/thumb4.jpg',
        },
        {
          title: 'Title 6',
          path: '/thumb1.jpg',
        },
        {
          title: 'Title 7',
          path: '/thumb2.jpg',
        },
        {
          title: 'Title 8',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => {
              const isExternalLink = image.path.startsWith('http'); // Check if the path is an external URL

              return (
                <div
                  key={imageIndex}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                >
                  {isExternalLink ? (
                    // External link
                    <a
                      href={image.path} // Dynamically use the external URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full block z-10" // Ensure z-index is on top
                    >
                      <img
                        src="/ERA-thumbnail.png" // Replace with an actual thumbnail image for the ERA Solutions project
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  ) : (
                    // Local images
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Overlay Gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 pointer-events-none"
                  ></div>
                  {/* Title */}
                  <div
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300 pointer-events-none"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
