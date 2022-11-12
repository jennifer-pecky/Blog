import React from 'react';
import { Link } from 'react-router-dom';
import './section2.css';
import { client, urlFor } from '../../lib/client';

const Post = ({ mainImage }) => {
  return (
    <Link to={`/blog/33`} className="item">
      <div className="w-72  h-40">
        <img
          src={urlFor(mainImage)}
          className="rounded max-w-full max-h-full w-full h-full object-center object-cover"
          width={500}
          height={350}
        />
      </div>

      <div className="flex justify-center flex-col py-4">
        <a>
          {' '}
          <span>Business, Travel</span> - Jun 3,2022{' '}
        </a>
      </div>

      <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
        {' '}
        <h1>
          Your most unhappy customers are your greatest source of learning
        </h1>
      </a>

      <p className="text-gray-500 py-3">
        Even the all-powerful pointing has no control about the the blind texts
        it is an almost <br /> unorthographic life, One day however a small line
        of blind text by the name of lorem <br /> ipsum decided to leave for the
        far world of Grammer..
      </p>
    </Link>
  );
};

const Section2 = () => {
  const [post, setPost] = React.useState([]);
  const postQuery = `*[_type == "post"]`;
  React.useEffect(() => {
    client.fetch(postQuery).then((response) => {
      console.log(response);
      setPost(response);
    });
  }, [post]);

  console.log('post response', post);
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center heading">
        Trading Post
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {post.map((post, index) => (
          <Post key={index} {...post} />
        ))}
        {/* <Post /> */}
      </div>
    </section>
  );
};

export default Section2;
