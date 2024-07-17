"use client";
import Slider from "react-slick";
import Image from "next/image";
// import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Sample data with image URLs
const data = [
  {
    id: 1,
    imageUrl: "/assets/facilities/facility6.webp",
  },
  {
    id: 2,
    imageUrl: "/assets/facilities/facility1.webp",
  },
  {
    id: 3,
    imageUrl: "/assets/facilities/facility11.webp",
  },
  {
    id: 4,
    imageUrl: "/assets/facilities/facility111.webp",
  },
  {
    id: 5,
    imageUrl: "/assets/facilities/facility2.webp",
  },
  {
    id: 6,
    imageUrl: "/assets/facilities/facility3.webp",
  },
  {
    id: 7,
    imageUrl: "/assets/facilities/facility33.webp",
  },
  {
    id: 8,
    imageUrl: "/assets/facilities/facility333.webp",
  },
  {
    id: 9,
    imageUrl: "/assets/facilities/facility4.webp",
  },
  {
    id: 10,
    imageUrl: "/assets/facilities/facility44.webp",
  },
  {
    id: 11,
    imageUrl: "/assets/facilities/facility444.webp",
  },
  {
    id: 12,
    imageUrl: "/assets/facilities/facility5.webp",
  },
];

const Facilities = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,  
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 640, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="mx-auto mt-10 pb-28 bg-primary-400">
        <h1 className="py-16 mt-8 text-4xl text-center text-white">Our Facilities</h1>
        <div className="max-w-[90%] mx-auto">
          <Slider {...settings} className="custom-slider">
            {data.map((item) => (
              <div key={item.id} className="px-8">
                <div className="h-[300px] md:h-[500px] relative">
                  <Image
                    src={item.imageUrl}
                    alt={`Facility ${item.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Facilities;
