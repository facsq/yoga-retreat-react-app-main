import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import picture from '../assets/picture.png';

const HighlightsSection = () => {
  return (
    <section className="bg-white py-8 mx-8 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-30 2xl:my-16 drop-shadow-2xl rounded-2xl mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2 pr-8 px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4 text-center md:text-left">Highlights</h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src={icon1} alt="Icon 1" className="w-12 h-12 mr-4 mb-4 md:mb-0 md:mr-8" />
            <p className="text-center md:text-left"><span className='font-semibold'>Accommodation </span><br /> - 3 daily healthy vegetarian meals <br /> - 3 or 6 nights accommodation</p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src={icon2} alt="Icon 2" className="w-12 h-12 mr-4 mb-4 md:mb-0 md:mr-8" />
            <p className="text-center md:text-left"><span className='font-semibold'>Yoga Sessions </span><br /> - One 60 minute Ayurvedic massage and consultation <br /> - Mantra chanting</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <img src={icon3} alt="Icon 3" className="w-12 h-12 mr-4 mb-4 md:mb-0 md:mr-8" />
            <p className="text-center md:text-left"><span className='font-semibold'>Cultural Events </span><br /> - Excursion and participate in local cultural events <br /> - Pranayama | Meditation | Yoga Sessions | Yog Nidra</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-6 md:px-16 mt-6 md:mt-0">
          <img src={picture} alt="Picture" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
