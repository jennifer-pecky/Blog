import React from 'react';
import img from '../../assets/Screenshot from 2022-11-06 10-19-04.png';
import './section.css';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { client } from '../../lib/client';

const Section1 = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section>
      <div>
        <div className="heading">
          <h1>
            <b>Trending News</b>
          </h1>
        </div>

        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

function Slide() {
  const [post, setPost] = React.useState([]);
  const postQuery = `*[_type == "post"]`;
  React.useEffect(() => {
    client.fetch(postQuery).then((response) => {
      console.log(response);
      setPost(response.data);
    });
  }, [post]);

  console.log('post response', post);
  return (
    <div>
      <div className="slide">
        <Link href={'/'}>
          <a>
            <img src={img} alt="" />
          </a>
        </Link>

        <div className="slide1">
          <Link href={'/'}>
            <a>
              {' '}
              <span>Business, Travel</span> - Jun 3,2022{' '}
            </a>
          </Link>

          <Link href={'/'}>
            <a>
              {' '}
              <h1>
                Your most unhappy <br /> customers are your <br /> greatest
                source of <br /> learning
              </h1>
            </a>
          </Link>

          <p className="text-gray-600 py-3">
            Even the all-powerful pointing has no control about the the blind
            texts it is an almost <br /> unorthographic life, One day however a
            small line of blind text by the name of lorem <br /> ipsum decided
            to leave for the far world of Grammer..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
