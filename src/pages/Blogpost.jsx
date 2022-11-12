import React from 'react';
import img from '../assets/Blog.jpg';

const Blogpost = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <img src={img} alt="" className="object-cover h-96 w-96 " />
      </div>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fuga excepturi iste earum at exercitationem ipsam impedit mollitia
          omnis dolore temporibus totam qui quam, eaque laboriosam eligendi
          aliquid sed voluptates.
        </p>
      </div>
    </div>
  );
};

export default Blogpost;
