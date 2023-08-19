import React from 'react';
import cardImage1 from '../assets/card-image1.png';
import cardImage2 from '../assets/card-image1.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

const WellnessExpertSection = () => {
  return (
    <section className="py-8 bg-litegreen pb-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-sitegreen">About Our Wellness Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 2xl:mx-72">
          <div className="relative overflow-hidden rounded-lg shadow-md md:h-80 lg:h-96">
            <img src={cardImage1} alt="Card 1" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center p-4">Her yoga journey started from 22 years of age, with Ashtanga Yoga from many guru's in Rishikesh later learned Hatha yoga and got certified from Rishikesh Yogpeeth. He has been a footballer and trained aspiring Indian soldiers in Rishikesh.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-sitegreen rounded-b-lg">
              <p className="text-center text-white mb-2 mt-2 text-lg">Yogini Ayushi Sharma</p>
              <div className="flex justify-center space-x-6 pb-4">
                <a href="#" className="footer-icon-link"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
                <a href="#" className="footer-icon-link"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
                <a href="#" className="footer-icon-link"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
                <a href="#" className="footer-icon-link"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md md:h-80 lg:h-96">
            <img src={cardImage2} alt="Card 2" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-center p-4">His yoga journey began 10 years ago with Vinyasa yoga and she has since then explored various styles like Yin, Hatha, and Ashtanga yoga. She is a certified yoga instructor from Yoga Alliance.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-sitegreen rounded-b-lg">
              <p className="text-center text-lg text-white mb-2 mt-2">Yogi Gaurav Negi</p>
              <div className="flex justify-center space-x-6 pb-4">
                <a href="#" className="footer-icon-link"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
                <a href="#" className="footer-icon-link"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
                <a href="#" className="footer-icon-link"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
                <a href="#" className="footer-icon-link"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessExpertSection;
