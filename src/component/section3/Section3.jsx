import React from 'react';
import './section3.css';
import img from '../../assets/Screenshot from 2022-11-06 10-19-04.png';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Section3 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center heading">
        Popular Post
      </h1>

      <Swiper slidesPerView={2} loop={true} autoplay={{ delay: 2000 }}>
        <SwiperSlide>{Popular()}</SwiperSlide>
        <SwiperSlide>{Popular()}</SwiperSlide>
      </Swiper>
    </section>
  );
};

function Popular() {
  return (
    <div className="item">
      <div className="images">
        <Link href={'/'}>
          <a>
            <img src={img} className="rounded" width={500} height={350} />
          </a>
        </Link>
      </div>

      <div className="flex justify-center flex-col py-4">
        <Link href={'/'}>
          <a>
            {' '}
            <span>Business, Travel</span> - Jun 3,2022{' '}
          </a>
        </Link>
      </div>

      <Link href={'/'}>
        <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
          {' '}
          <h1>
            Your most unhappy customers are your greatest source of learning
          </h1>
        </a>
      </Link>

      <p className="text-gray-500 py-3">
        Even the all-powerful pointing has no control about the the blind texts
        it is an almost <br /> unorthographic life, One day however a small line
        of blind text by the name of lorem <br /> ipsum decided to leave for the
        far world of Grammer..
      </p>
    </div>
  );
}

export default Section3;
