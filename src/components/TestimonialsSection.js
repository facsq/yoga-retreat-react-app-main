import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialImage1 from '../assets/Virtual.jpg';
import testimonialImage2 from '../assets/Virtual.jpg';
import testimonialImage3 from '../assets/Virtual.jpg';

const TestimonialsSection = () => {
  const testimonialData = [
    {
      name: 'Aayush Dabral',
      role: 'Yoga Practitioner',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum, justo a sollicitudin pharetra, augue metus tristique ligula.',
      image: testimonialImage1,
    },
    {
      name: 'Rishit Vaish',
      role: 'Fitness Enthusiast',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: testimonialImage2,
    },
    {
      name: 'Jasraj Juneja',
      role: 'Wellness Coach',
      text: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: testimonialImage3,
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className=" py-12 2xl:mx-72 xl:mx-64 lg:mx-20 md:mx-12 sm:mx-12">
      <div className="container drop-shadow-2xl">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-sitegreen mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="bg-litegreen rounded-xl overflow-hidden  p-6">
              <img src={testimonial.image} alt={`Testimonial ${index}`} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 pl-6">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4 pl-6">{testimonial.role}</p>
              <p className="text-gray-700 pl-6">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
