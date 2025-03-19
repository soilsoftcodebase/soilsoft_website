import React from 'react';
import Card from './Card';
import Slider from 'react-slick';
import { courses } from '../data/Courses';

const Courses = () => {
  var settings = {
    dots: true, // Keep dots for navigation if needed
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disables the previous/next buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="flex justify-center px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="w-full max-w-[1180px] text-center">
        <div className="relative top-[-300px]">
          {/* Header Section */}
          <div className="flex flex-col text-center justify-center items-center sm:text-left">
            <h1 className="py-3 text-3xl sm:text-4xl font-bold leading-[40px] sm:leading-[60px]">
              Our Services,{' '}
              <span className="text-[#038b46]">Your Success!</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-[800px] px-2 sm:px-0 text-center">
              Explore the range of services we offer to drive innovation,
              streamline operations, and help your business grow.
            </p>
          </div>

          {/* Slider Section */}
          <Slider {...settings} className="mt-6 px-2 sm:px-5">
            {courses.map((course, i) => (
              <div key={i}>
                <Card course={course} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Courses;
