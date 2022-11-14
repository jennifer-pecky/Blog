import React from 'react';
import img from '../assets/images.jpeg';

const Blog = () => {
  return (
    <div className="md:container md:mx-auto px-5 xl:max-w-6xl xl:mx-auto">
      <h1 className="uppercase font-bold text-4xl mb-7 md:text-6cl lg:text-4xl mt-5 text-center">
        Good programming
      </h1>
      <div className="flex items-center justify-center h-full">
        <img src={img} alt="" className="md:h-1/4 py-9 px-13" />
      </div>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fuga excepturi iste earum at exercitationem ipsam impedit mollitia
          omnis dolore temporibus totam qui quam, eaque laboriosam eligendi
          aliquid sed voluptates. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Deserunt odio quidem neque in, fugiat eius quae ipsa
          modi. Exercitationem qui rem officia totam? Impedit mollitia harum
          ipsum maxime, libero cumque.
        </p>
      </div>
    </div>
  );
};

export default Blog;
