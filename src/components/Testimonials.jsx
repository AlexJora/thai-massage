"use client";
import Slider from "react-slick";
// import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    name: "John Doe",
    testimonialMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    testimonialTitle: "Title",
    id: 1,
  },
  {
    name: "Jane Doe",
    testimonialMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    testimonialTitle: "Title",
    id: 2,
  },
  {
    name: "John Smith",
    testimonialMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    testimonialTitle: "Title",
    id: 3,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-[90%] mx-auto h-[450px] bg-secondary-101 mt-16">
        <h1 className="py-12 mt-8 text-4xl text-center">Testimonials</h1>
      <Slider {...settings}>
        {data.map((testimonial) => (
          <div
            key={testimonial.id}
            className=" h-[250px] text-black flex justify-center items-center"
          >
            <h1 className="pb-6 text-xl text-center ">{testimonial.name}</h1>
            <h3 className="pb-4 text-lg font-semibold text-center">
              {testimonial.testimonialTitle}
            </h3>
            <p className="px-2 text-center md:mt-10 lg:px-20">
              {testimonial.testimonialMessage}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
